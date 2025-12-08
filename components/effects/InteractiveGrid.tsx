'use client'

import { useEffect, useRef, useState } from 'react'

interface GridPoint {
  x: number
  y: number
  baseOpacity: number
}

export function InteractiveGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: -1000, y: -1000 })
  const pointsRef = useRef<GridPoint[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    // Setup canvas size
    const updateCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()

      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr

      // Reset transform matrix before scaling to prevent cumulative scaling
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.scale(dpr, dpr)

      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`

      initializePoints()
    }

    // Initialize grid points
    const initializePoints = () => {
      const points: GridPoint[] = []
      const rect = canvas.getBoundingClientRect()
      const spacing = 60 // Grid spacing in pixels (increased for better performance)
      const cols = Math.ceil(rect.width / spacing)
      const rows = Math.ceil(rect.height / spacing)

      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          points.push({
            x: i * spacing,
            y: j * spacing,
            baseOpacity: 0.15 + Math.random() * 0.1, // Slight variation
          })
        }
      }

      pointsRef.current = points
    }

    // Mouse move handler with throttling
    let rafId: number | null = null
    const handleMouseMove = (e: MouseEvent) => {
      if (rafId !== null) return // Throttle to one update per frame

      rafId = requestAnimationFrame(() => {
        const rect = canvas.getBoundingClientRect()
        mouseRef.current = {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        }
        rafId = null
      })
    }

    // Mouse leave handler
    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 }
    }

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return

      const rect = canvas.getBoundingClientRect()
      ctx.clearRect(0, 0, rect.width, rect.height)

      const mouse = mouseRef.current
      const points = pointsRef.current
      const liftRadius = 150 // Radius of mouse influence
      const maxLiftHeight = 15 // Max scale/opacity boost

      points.forEach((point) => {
        // Calculate distance from mouse
        const dx = point.x - mouse.x
        const dy = point.y - mouse.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        // Calculate influence (inverse square falloff for smooth effect)
        let influence = 0
        if (distance < liftRadius) {
          influence = 1 - (distance / liftRadius)
          influence = influence * influence // Square for smoother falloff
        }

        // Calculate final opacity and size
        const opacity = point.baseOpacity + (influence * 0.5)
        const size = 1.5 + (influence * maxLiftHeight)

        // Draw point with gradient for softer look
        const gradient = ctx.createRadialGradient(
          point.x, point.y, 0,
          point.x, point.y, size
        )

        // Color shifts based on influence (blue to purple gradient)
        if (influence > 0) {
          gradient.addColorStop(0, `rgba(147, 197, 253, ${opacity})`) // Light blue
          gradient.addColorStop(0.5, `rgba(167, 139, 250, ${opacity * 0.8})`) // Purple
          gradient.addColorStop(1, `rgba(59, 130, 246, 0)`) // Transparent blue
        } else {
          gradient.addColorStop(0, `rgba(255, 255, 255, ${opacity})`)
          gradient.addColorStop(1, `rgba(255, 255, 255, 0)`)
        }

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(point.x, point.y, size, 0, Math.PI * 2)
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    updateCanvasSize()
    window.addEventListener('resize', updateCanvasSize)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)

    const animationId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('resize', updateCanvasSize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
      cancelAnimationFrame(animationId)
      if (rafId !== null) cancelAnimationFrame(rafId)
    }
  }, [mounted])

  if (!mounted) return null

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none -z-10"
      style={{
        mixBlendMode: 'screen',
        opacity: 0.4,
      }}
    />
  )
}
