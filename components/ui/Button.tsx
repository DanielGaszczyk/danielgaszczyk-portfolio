import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        className={cn(
          'inline-flex items-center justify-center gap-2 rounded-[1.15rem] font-semibold tracking-[-0.02em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50',
          {
            'bg-primary text-primary-foreground shadow-[0_18px_40px_rgba(6,16,34,0.22)] hover:-translate-y-0.5 hover:brightness-105':
              variant === 'primary',
            'bg-secondary text-secondary-foreground hover:bg-secondary/80':
              variant === 'secondary',
            'text-foreground/80 hover:bg-white/[0.04] hover:text-foreground':
              variant === 'ghost',
            'border border-border bg-transparent text-foreground hover:border-primary/40 hover:bg-white/[0.04]':
              variant === 'outline',
          },
          {
            'h-9 px-3 text-sm': size === 'sm',
            'h-11 px-4 text-sm': size === 'md',
            'h-12 px-6 text-base': size === 'lg',
            'h-14 px-7 text-base': size === 'xl',
          },
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'

export { Button }
