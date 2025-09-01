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
    let controls
    const size = direction === 'horizontal' ? width : height
    const contentSize = size + gap
    const from = reverse ? -contentSize / 2 : 0
    const to = reverse ? 0 : -contentSize / 2

    if (isTransitioning) {
      controls = animate(translation, [translation.get(), to], {
        ease: 'linear',
        duration:
          currentDuration * Math.abs((translation.get() - to) / contentSize),
        onComplete: () => {
          setIsTransitioning(false)
          setKey((prevKey) => prevKey + 1)
        },
      })
    } else {
      // Create truly infinite loop without jumping back
      controls = animate(translation, -contentSize, {
        ease: 'linear',
        duration: currentDuration,
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 0,
        onRepeat: () => {
          translation.set(0)
        },
      })
    }

    return controls?.stop
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