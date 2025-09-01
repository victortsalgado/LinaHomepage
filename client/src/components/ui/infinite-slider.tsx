'use client'

import { cn } from '@/lib/utils'
import { useEffect } from 'react'

type InfiniteSliderProps = {
  children: React.ReactNode
  gap?: number
  duration?: number
  durationOnHover?: number
  direction?: 'horizontal' | 'vertical'
  reverse?: boolean
  className?: string
}

export function InfiniteSlider({
  children,
  gap = 16,
  duration = 25,
  durationOnHover,
  direction = 'horizontal',
  reverse = false,
  className,
}: InfiniteSliderProps) {
  useEffect(() => {
    // Create CSS animation that moves continuously
    const keyframes = `
      @keyframes infiniteScrolling {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-100%);
        }
      }
    `

    // Remove any existing style element
    const existingStyle = document.getElementById('infinite-slider-style')
    if (existingStyle) {
      existingStyle.remove()
    }

    // Add new style element
    const style = document.createElement('style')
    style.id = 'infinite-slider-style'
    style.textContent = keyframes
    document.head.appendChild(style)

    return () => {
      if (style.parentNode) {
        style.parentNode.removeChild(style)
      }
    }
  }, [])

  const groupStyle = {
    display: 'flex',
    gap: `${gap}px`,
    willChange: 'transform',
    animation: `infiniteScrolling ${duration}s linear infinite`,
    paddingRight: `${gap}px`,
  }

  return (
    <div className={cn('overflow-hidden flex', className)}>
      <div style={groupStyle}>
        {children}
      </div>
      <div style={groupStyle} aria-hidden="true">
        {children}
      </div>
    </div>
  )
}