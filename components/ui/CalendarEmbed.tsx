'use client'

import { useState } from 'react'

export function CalendarEmbed() {
  const [loading, setLoading] = useState(true)

  return (
    <div className="relative w-full h-[700px] bg-black/40 rounded-xl overflow-hidden">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm">
          <div className="space-y-4 text-center">
            <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="text-sm text-white/70">Loading calendar...</p>
          </div>
        </div>
      )}
      <iframe
        src="https://calendar.app.google/xKCsZqPvkMwTyV1x9"
        className="w-full h-full border-0"
        style={{ filter: 'hue-rotate(10deg) saturate(0.9)' }}
        onLoad={() => setLoading(false)}
        title="Book a meeting"
      />
    </div>
  )
}
