'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface GlassCardProps {
  children: ReactNode
  className?: string
  hoverEffect?: boolean
}

export function GlassCard({ children, className, hoverEffect = true }: GlassCardProps) {
  return (
    <motion.div
      whileHover={hoverEffect ? { scale: 1.02, y: -5 } : {}}
      className={cn(
        "glass-card noise-texture relative overflow-hidden p-6",
        className
      )}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-500 hover:opacity-100" />

      {/* Refraction line */}
      <div className="absolute inset-0 z-0 opacity-0 hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-1000" />
      </div>

      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  )
}
