'use client'

import { cn } from '@/lib/utils'
import { useEffect, useRef } from 'react'

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
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const firstChild = container.firstElementChild as HTMLElement
    if (!firstChild) return

    // Create CSS animation that moves continuously
    const keyframes = `
      @keyframes infiniteSlide {
        from {
          transform: translateX(0);
        }
        to {
          transform: translateX(-33.333%);
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

    // Apply animation to the container
    firstChild.style.animation = `infiniteSlide ${duration}s linear infinite`
    firstChild.style.display = 'flex'
    firstChild.style.gap = `${gap}px`

    return () => {
      if (style.parentNode) {
        style.parentNode.removeChild(style)
      }
    }
  }, [duration, gap])

  return (
    <div className={cn('overflow-hidden', className)}>
      <div ref={containerRef}>
        <div className={cn('flex', direction === 'vertical' ? 'flex-col' : 'flex-row')}>
          {children}
          {children}
          {children}
        </div>
      </div>
    </div>
  )
}