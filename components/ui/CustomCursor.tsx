'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)

      rafRef.current = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY })

        const target = e.target as HTMLElement
        const isClickable = !!target.closest('a, button, [role="button"], input, textarea, select, label[for]')
        setIsPointer(isClickable)
      })
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  if (isTouchDevice) return null

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[9999] will-change-transform"
      animate={{
        x: position.x - (isPointer ? 20 : 10),
        y: position.y - (isPointer ? 20 : 10),
        scale: isPointer ? 1.5 : 1,
      }}
      transition={{
        type: "spring",
        damping: 30,
        mass: 0.5,
        stiffness: 400
      }}
    >
      <div
        className={`rounded-full bg-primary/30 blur-md transition-all duration-200 ${
          isPointer ? 'h-10 w-10' : 'h-5 w-5'
        }`}
      />
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/50 transition-all duration-200 ${
          isPointer ? 'h-4 w-4 bg-white' : 'h-2 w-2 bg-transparent'
        }`}
      />
    </motion.div>
  )
}
