'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ReactNode, useRef, MouseEvent } from 'react'
import { cn } from '@/lib/utils'

interface GlassCardProps {
  children: ReactNode
  className?: string
  hoverEffect?: boolean
  tilt?: boolean
}

export function GlassCard({ children, className, hoverEffect = true, tilt = true }: GlassCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const rafId = useRef<number | null>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 })
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7.5deg', '-7.5deg'])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7.5deg', '7.5deg'])

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current || !tilt) return

    // Throttle with requestAnimationFrame for optimal performance
    if (rafId.current !== null) return

    rafId.current = requestAnimationFrame(() => {
      if (!ref.current) return

      const rect = ref.current.getBoundingClientRect()
      const width = rect.width
      const height = rect.height
      const mouseX = e.clientX - rect.left
      const mouseY = e.clientY - rect.top

      const xPct = mouseX / width - 0.5
      const yPct = mouseY / height - 0.5

      x.set(xPct)
      y.set(yPct)

      rafId.current = null
    })
  }

  const handleMouseLeave = () => {
    if (rafId.current !== null) {
      cancelAnimationFrame(rafId.current)
      rafId.current = null
    }
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={tilt ? {
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      } : {}}
      whileHover={hoverEffect ? { scale: 1.02, y: -5 } : {}}
      className={cn(
        "glass-card noise-texture relative overflow-hidden p-6",
        className
      )}
    >
      {/* Spotlight effect following mouse */}
      <motion.div
        className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${useTransform(mouseXSpring, [-0.5, 0.5], ['0%', '100%'])} ${useTransform(mouseYSpring, [-0.5, 0.5], ['0%', '100%'])}, rgba(255, 255, 255, 0.1), transparent 40%)`,
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-500 hover:opacity-100" />

      {/* Refraction line */}
      <div className="absolute inset-0 z-0 opacity-0 hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-1000" />
      </div>

      <div className="relative z-10" style={{ transform: 'translateZ(20px)' }}>
        {children}
      </div>
    </motion.div>
  )
}
