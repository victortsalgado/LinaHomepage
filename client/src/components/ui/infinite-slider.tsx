'use client'

import { cn } from '@/lib/utils'
import { useMotionValue, animate, motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import useMeasure from 'react-use-measure'

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
  const [currentDuration, setCurrentDuration] = useState(duration)
  const [ref, { width, height }] = useMeasure()
  const translation = useMotionValue(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [key, setKey] = useState(0)

  useEffect(() => {
    if (width === 0 || height === 0) return

    let animationId: number
    let startTime: number | null = null
    let totalDistance = 0
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      
      const elapsed = timestamp - startTime
      const speed = width / (currentDuration * 1000) // pixels per millisecond
      
      totalDistance -= speed * 16.67 // approximately 60fps
      
      // Reset position seamlessly when we've moved enough to show the duplicate
      if (totalDistance <= -width / 3) {
        totalDistance += width / 3
      }
      
      translation.set(totalDistance)
      animationId = requestAnimationFrame(animate)
    }
    
    animationId = requestAnimationFrame(animate)
    
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [
    key,
    currentDuration,
    width,
    height,
    gap,
    translation,
    direction,
    reverse,
    isTransitioning,
  ])

  const hoverProps = durationOnHover
    ? {
        onMouseEnter: () => {
          setIsTransitioning(true)
          setCurrentDuration(durationOnHover)
        },
        onMouseLeave: () => {
          setIsTransitioning(true)
          setCurrentDuration(duration)
        },
      }
    : {}

  return (
    <div className={cn('overflow-hidden', className)} {...hoverProps}>
      <motion.div
        className={cn(
          'flex',
          direction === 'vertical' ? 'flex-col' : 'flex-row'
        )}
        style={{
          [direction === 'horizontal' ? 'x' : 'y']: translation,
          gap: `${gap}px`,
        }}
        ref={ref}
      >
        {children}
        {children}
        {children}
      </motion.div>
    </div>
  )
}