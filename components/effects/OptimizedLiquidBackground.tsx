'use client'

import { motion } from 'framer-motion'
import { useIsMobile, usePrefersReducedMotion } from '@/lib/hooks'

export function OptimizedLiquidBackground() {
  const isMobile = useIsMobile()
  const prefersReducedMotion = usePrefersReducedMotion()

  // Responsive blur: blur-2xl on mobile, blur-3xl on desktop
  const blurClass = isMobile ? 'blur-2xl' : 'blur-3xl'

  // Mobile: 2 blobs, Desktop: 4 blobs
  const blobs = isMobile ? [0, 1] : [0, 1, 2, 3]

  // If user prefers reduced motion, disable animations
  const animationDuration = prefersReducedMotion ? 0 : 1

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Blob 0 - Blue/Purple */}
      {blobs.includes(0) && (
        <motion.div
          className={`absolute -top-20 -left-20 w-[600px] h-[600px] rounded-full opacity-30 ${blurClass}`}
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, rgba(147, 51, 234, 0.3) 50%, transparent 70%)',
          }}
          animate={!prefersReducedMotion ? {
            x: [0, 100, -50, 0],
            y: [0, -100, 50, 0],
            scale: [1, 1.2, 0.9, 1],
          } : {}}
          transition={{
            duration: 20 * animationDuration,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )}

      {/* Blob 1 - Pink/Blue */}
      {blobs.includes(1) && (
        <motion.div
          className={`absolute top-1/4 -right-40 w-[700px] h-[700px] rounded-full opacity-25 ${blurClass}`}
          style={{
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.4) 0%, rgba(59, 130, 246, 0.3) 50%, transparent 70%)',
          }}
          animate={!prefersReducedMotion ? {
            x: [0, -80, 100, 0],
            y: [0, 100, -80, 0],
            scale: [1, 0.9, 1.1, 1],
          } : {}}
          transition={{
            duration: 25 * animationDuration,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )}

      {/* Blob 2 - Purple/Pink (Desktop only) */}
      {blobs.includes(2) && (
        <motion.div
          className={`absolute bottom-20 left-1/4 w-[500px] h-[500px] rounded-full opacity-30 ${blurClass}`}
          style={{
            background: 'radial-gradient(circle, rgba(147, 51, 234, 0.4) 0%, rgba(236, 72, 153, 0.3) 50%, transparent 70%)',
          }}
          animate={!prefersReducedMotion ? {
            x: [0, -60, 80, 0],
            y: [0, 80, -60, 0],
            scale: [1, 1.1, 0.95, 1],
          } : {}}
          transition={{
            duration: 18 * animationDuration,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )}

      {/* Blob 3 - Blue accent (Desktop only) */}
      {blobs.includes(3) && (
        <motion.div
          className={`absolute top-1/2 right-1/4 w-[450px] h-[450px] rounded-full opacity-25 ${blurClass}`}
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(147, 197, 253, 0.3) 50%, transparent 70%)',
          }}
          animate={!prefersReducedMotion ? {
            x: [0, 70, -90, 0],
            y: [0, -70, 90, 0],
            scale: [1, 0.85, 1.15, 1],
          } : {}}
          transition={{
            duration: 22 * animationDuration,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )}

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />
    </div>
  )
}
