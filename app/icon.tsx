import { ImageResponse } from 'next/og'

/**
 * Dynamic favicon generated via next/og (Satori). Produces a 32x32 PNG
 * at /icon — Next handles the <link rel="icon"> tag automatically.
 * Replaces the previous favicon-16x16.png reference that pointed to a
 * nonexistent file.
 */
export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 22,
          background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 700,
          borderRadius: 6,
          letterSpacing: '-0.05em',
        }}
      >
        D
      </div>
    ),
    { ...size },
  )
}
