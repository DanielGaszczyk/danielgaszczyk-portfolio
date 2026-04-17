import { ImageResponse } from 'next/og'

/**
 * Default Open Graph image (1200x630) served at /opengraph-image. Used
 * as fallback share card across every page that doesn't override it.
 * Kept intentionally simple — no external fonts, no network fetches
 * (OpenNext/Cloudflare doesn't love runtime network in ImageResponse).
 */
export const alt = 'Daniel Gaszczyk — AI × Biznes × Technologia'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          background: '#0a0a0f',
          backgroundImage:
            'radial-gradient(circle at 20% 20%, rgba(99,102,241,0.35) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(139,92,246,0.30) 0%, transparent 55%)',
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 40,
              fontWeight: 700,
            }}
          >
            D
          </div>
          <div style={{ fontSize: 28, opacity: 0.7, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            danielgaszczyk.com
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ fontSize: 84, fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>
            Daniel Gaszczyk
          </div>
          <div style={{ fontSize: 44, opacity: 0.85, lineHeight: 1.2, letterSpacing: '-0.02em' }}>
            AI × Biznes × Technologia
          </div>
        </div>

        <div style={{ display: 'flex', gap: 40, fontSize: 24, opacity: 0.75 }}>
          <div>TeamFeedback CTO</div>
          <div style={{ opacity: 0.4 }}>·</div>
          <div>5+ lat w AI</div>
          <div style={{ opacity: 0.4 }}>·</div>
          <div>20+ projektów</div>
        </div>
      </div>
    ),
    { ...size },
  )
}
