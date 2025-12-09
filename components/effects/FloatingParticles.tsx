'use client'

import { motion } from 'framer-motion'
import { useMemo } from 'react'
import { useIsMobile, usePrefersReducedMotion } from '@/lib/hooks'

export function FloatingParticles() {
  const isMobile = useIsMobile()
  const prefersReducedMotion = usePrefersReducedMotion()

  // Mobile: 5 particles, Desktop: 10 particles
  const particleCount = isMobile ? 5 : 10

  const particles = useMemo(() => {
    return Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.6 + 0.2,
    }))
  }, [particleCount])

  // Don't render if user prefers reduced motion
  if (prefersReducedMotion) return null

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white/30"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            opacity: particle.opacity,
            filter: 'blur(1px)',
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.sin(particle.id) * 50, 0],
            scale: [1, 1.5, 1],
            opacity: [particle.opacity, particle.opacity * 0.3, particle.opacity],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}
