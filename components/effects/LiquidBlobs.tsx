'use client'

import { motion } from 'framer-motion'

export function LiquidBlobs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Large blob 1 */}
      <motion.div
        className="absolute -top-20 -left-20 w-[600px] h-[600px] rounded-full opacity-30 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, rgba(147, 51, 234, 0.3) 50%, transparent 70%)',
        }}
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -100, 50, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Large blob 2 */}
      <motion.div
        className="absolute top-1/4 -right-40 w-[700px] h-[700px] rounded-full opacity-25 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.4) 0%, rgba(59, 130, 246, 0.3) 50%, transparent 70%)',
        }}
        animate={{
          x: [0, -80, 100, 0],
          y: [0, 100, -80, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Medium blob 1 */}
      <motion.div
        className="absolute bottom-20 left-1/4 w-[500px] h-[500px] rounded-full opacity-30 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(147, 51, 234, 0.4) 0%, rgba(236, 72, 153, 0.3) 50%, transparent 70%)',
        }}
        animate={{
          x: [0, -60, 80, 0],
          y: [0, 80, -60, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Medium blob 2 */}
      <motion.div
        className="absolute top-1/2 right-1/4 w-[450px] h-[450px] rounded-full opacity-25 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(147, 197, 253, 0.3) 50%, transparent 70%)',
        }}
        animate={{
          x: [0, 70, -90, 0],
          y: [0, -70, 90, 0],
          scale: [1, 0.85, 1.15, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Small accent blobs */}
      <motion.div
        className="absolute bottom-1/3 right-1/3 w-[300px] h-[300px] rounded-full opacity-40 blur-2xl"
        style={{
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.5) 0%, transparent 70%)',
        }}
        animate={{
          x: [0, 50, -50, 0],
          y: [0, -50, 50, 0],
          scale: [1, 1.3, 0.8, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute top-2/3 left-1/3 w-[350px] h-[350px] rounded-full opacity-35 blur-2xl"
        style={{
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, rgba(59, 130, 246, 0.3) 50%, transparent 70%)',
        }}
        animate={{
          x: [0, -40, 60, 0],
          y: [0, 60, -40, 0],
          scale: [1, 0.9, 1.2, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />
    </div>
  )
}
