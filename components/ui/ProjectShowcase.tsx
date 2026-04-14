'use client'

import { motion } from 'framer-motion'
import { GlassCard } from '@/components/ui/GlassCard'
import { TrendingUp, Sparkles, Users, Award } from 'lucide-react'

export function ProjectShowcase() {
  return (
    <div className="relative w-full aspect-square max-w-[500px] mx-auto">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-indigo-500/15 to-violet-500/15 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.25, 0.4, 0.25],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Main Card - TeamFeedback */}
      <motion.div
        className="absolute top-[10%] left-[5%] w-[65%] z-30"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <GlassCard className="relative p-6 hover:border-indigo-400/40 transition-colors duration-300 group">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-400 to-violet-500 flex items-center justify-center shadow-lg">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold text-white">TeamFeedback</h3>
                <p className="text-sm text-indigo-300">AI-powered 360° feedback</p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-green-400" />
              <span className="text-sm text-white/80">1M+ PLN funding</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-violet-400" />
              <span className="text-sm text-white/80">AI assessment engine</span>
            </div>
          </div>

          {/* Progress bars */}
          <div className="mt-4 space-y-2">
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-indigo-400 to-violet-500"
                initial={{ width: 0 }}
                animate={{ width: "85%" }}
                transition={{ delay: 0.8, duration: 1 }}
              />
            </div>
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-violet-400 to-purple-400"
                initial={{ width: 0 }}
                animate={{ width: "70%" }}
                transition={{ delay: 0.9, duration: 1 }}
              />
            </div>
          </div>
        </GlassCard>
      </motion.div>

      {/* Second Card - DailySpark */}
      <motion.div
        className="absolute bottom-[20%] right-[5%] w-[55%] z-20"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <GlassCard className="relative p-5 hover:border-pink-400/40 transition-colors duration-300 group">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-400 to-orange-500 flex items-center justify-center shadow-md">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-heading font-bold text-white">DailySpark</h3>
              <p className="text-xs text-pink-300">AI Journal & Insights</p>
            </div>
          </div>

          <div className="flex gap-2 flex-wrap">
            <span className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/80">AI Analysis</span>
            <span className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/80">Daily Habits</span>
          </div>
        </GlassCard>
      </motion.div>

      {/* Third Card - Metrics */}
      <motion.div
        className="absolute top-[45%] left-[10%] w-[45%] z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <GlassCard className="relative p-5 hover:border-green-400/40 transition-colors duration-300 group">
          <div className="flex items-center gap-2 mb-4">
            <Award className="w-5 h-5 text-yellow-400" />
            <h3 className="text-base font-heading font-bold text-white">Metrics</h3>
          </div>

          <div className="space-y-3">
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-heading font-bold gradient-text">20+</span>
                <span className="text-sm text-white/60">projects</span>
              </div>
            </div>
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-heading font-bold gradient-text">8+</span>
                <span className="text-sm text-white/60">years</span>
              </div>
            </div>
          </div>

          {/* Tech stack icons */}
          <div className="mt-4 flex gap-2">
            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-xs font-bold text-white/70">AI</div>
            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-xs font-bold text-white/70">SaaS</div>
            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-xs font-bold text-white/70">Dev</div>
          </div>
        </GlassCard>
      </motion.div>

      {/* Floating orb */}
      <motion.div
        className="absolute top-[20%] right-[15%] w-16 h-16 rounded-full bg-gradient-to-br from-indigo-400/20 to-transparent blur-2xl"
        animate={{
          y: [0, -15, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  )
}
