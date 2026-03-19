'use client'

import { motion } from 'framer-motion'
import { useIsMobile, usePrefersReducedMotion } from '@/lib/hooks'

export function OptimizedLiquidBackground() {
  const isMobile = useIsMobile()
  const prefersReducedMotion = usePrefersReducedMotion()

  const blurClass = isMobile ? 'blur-2xl' : 'blur-3xl'
  const blobs = isMobile ? [0, 1] : [0, 1, 2]

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {blobs.includes(0) && (
        <motion.div
          className={`absolute -top-20 -left-20 w-[600px] h-[600px] rounded-full opacity-25 ${blurClass}`}
          style={{
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.35) 0%, rgba(139, 92, 246, 0.25) 50%, transparent 70%)',
            willChange: 'transform',
          }}
          animate={!prefersReducedMotion ? {
            x: [0, 80, -40, 0],
            y: [0, -80, 40, 0],
            scale: [1, 1.15, 0.95, 1],
          } : {}}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )}

      {blobs.includes(1) && (
        <motion.div
          className={`absolute top-1/4 -right-40 w-[650px] h-[650px] rounded-full opacity-20 ${blurClass}`}
          style={{
            background: 'radial-gradient(circle, rgba(192, 132, 252, 0.35) 0%, rgba(99, 102, 241, 0.25) 50%, transparent 70%)',
            willChange: 'transform',
          }}
          animate={!prefersReducedMotion ? {
            x: [0, -60, 80, 0],
            y: [0, 80, -60, 0],
            scale: [1, 0.92, 1.08, 1],
          } : {}}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )}

      {blobs.includes(2) && (
        <motion.div
          className={`absolute bottom-20 left-1/4 w-[500px] h-[500px] rounded-full opacity-20 ${blurClass}`}
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, rgba(192, 132, 252, 0.2) 50%, transparent 70%)',
            willChange: 'transform',
          }}
          animate={!prefersReducedMotion ? {
            x: [0, -50, 60, 0],
            y: [0, 60, -50, 0],
            scale: [1, 1.08, 0.95, 1],
          } : {}}
          transition={{
            duration: 32,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />
    </div>
  )
}
