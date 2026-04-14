import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface GlassCardProps {
  children: ReactNode
  className?: string
  hoverEffect?: boolean
}

export function GlassCard({ children, className, hoverEffect = true }: GlassCardProps) {
  return (
    <div
      className={cn(
        'surface-panel relative overflow-hidden',
        hoverEffect && 'surface-hover',
        className
      )}
    >
      <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-white/10" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(70,187,181,0.08),transparent_38%)]" />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
