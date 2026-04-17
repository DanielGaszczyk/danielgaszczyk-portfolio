'use client'

import { motion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'
import { useIsMobile, usePrefersReducedMotion } from '@/lib/hooks'

export function FloatingParticles() {
  const isMobile = useIsMobile()
  const prefersReducedMotion = usePrefersReducedMotion()
  // Particles use Math.random() for positions, which would cause a
  // hydration mismatch if rendered during SSR. Gate only this component
  // behind a mount flag — the rest of the page (Hero included) must
  // render server-side so the user sees content on first paint.
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])

  const particleCount = isMobile ? 3 : 6

  const particles = useMemo(() => {
    return Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 2,
      duration: Math.random() * 25 + 20,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.4 + 0.1,
    }))
  }, [particleCount])

  if (!mounted) return null
  if (prefersReducedMotion) return null

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white/20"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            opacity: particle.opacity,
            filter: 'blur(1px)',
            willChange: 'transform',
          }}
          animate={{
            y: [0, -80, 0],
            x: [0, Math.sin(particle.id) * 30, 0],
            scale: [1, 1.3, 1],
            opacity: [particle.opacity, particle.opacity * 0.4, particle.opacity],
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
