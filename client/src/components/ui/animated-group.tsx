import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface AnimatedGroupProps {
  children: React.ReactNode
  variants?: any
  className?: string
  initial?: string
  animate?: string
  exit?: string
  delay?: number
}

const defaultVariants = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  },
  item: {
    hidden: {
      opacity: 0,
      y: 20,
      filter: 'blur(6px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        bounce: 0.3,
        duration: 0.8,
      },
    },
  },
}

export function AnimatedGroup({
  children,
  variants = defaultVariants,
  className,
  initial = 'hidden',
  animate = 'visible',
  exit = 'hidden',
  delay = 0,
  ...props
}: AnimatedGroupProps) {
  const mergedVariants = { ...defaultVariants, ...variants }

  return (
    <motion.div
      initial={initial}
      animate={animate}
      exit={exit}
      variants={mergedVariants.container}
      className={cn('', className)}
      style={{ animationDelay: `${delay}s` }}
      {...props}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div
          key={index}
          variants={mergedVariants.item}
          className="animated-group-item"
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  )
}

// Componente simples para itens individuais (quando você quer controle manual)
export function AnimatedItem({
  children,
  variants = defaultVariants.item,
  className,
  delay = 0,
  ...props
}: {
  children: React.ReactNode
  variants?: any
  className?: string
  delay?: number
} & React.ComponentProps<typeof motion.div>) {
  return (
    <motion.div
      variants={variants}
      className={cn('', className)}
      style={{ animationDelay: `${delay}s` }}
      {...props}
    >
      {children}
    </motion.div>
  )
}