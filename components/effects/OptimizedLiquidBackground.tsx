'use client'

import { motion } from 'framer-motion'
import { useIsMobile, usePrefersReducedMotion } from '@/lib/hooks'

const ease = [0.22, 1, 0.36, 1] as const

export function OptimizedLiquidBackground() {
  const isMobile = useIsMobile()
  const prefersReducedMotion = usePrefersReducedMotion()

  const blurClass = isMobile ? 'blur-[90px]' : 'blur-[140px]'

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className={`absolute -left-24 top-[-8rem] h-[28rem] w-[28rem] rounded-full ${blurClass}`}
        style={{ background: 'rgba(72, 181, 177, 0.16)' }}
        animate={prefersReducedMotion ? undefined : { x: [0, 40, -20, 0], y: [0, -30, 20, 0], scale: [1, 1.08, 0.96, 1] }}
        transition={{ duration: 28, repeat: Infinity, ease }}
      />
      <motion.div
        className={`absolute right-[-10rem] top-[10%] h-[24rem] w-[24rem] rounded-full ${blurClass}`}
        style={{ background: 'rgba(190, 167, 109, 0.11)' }}
        animate={prefersReducedMotion ? undefined : { x: [0, -35, 25, 0], y: [0, 30, -20, 0], scale: [1, 0.94, 1.05, 1] }}
        transition={{ duration: 30, repeat: Infinity, ease }}
      />
      <motion.div
        className={`absolute bottom-[-8rem] left-1/3 h-[26rem] w-[26rem] rounded-full ${blurClass}`}
        style={{ background: 'rgba(88, 114, 170, 0.12)' }}
        animate={prefersReducedMotion ? undefined : { x: [0, -20, 30, 0], y: [0, 24, -18, 0], scale: [1, 1.04, 0.98, 1] }}
        transition={{ duration: 34, repeat: Infinity, ease }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,transparent,rgba(7,12,22,0.34)_68%,rgba(7,12,22,0.74))]" />
    </div>
  )
}
