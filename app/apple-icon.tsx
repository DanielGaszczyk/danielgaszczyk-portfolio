import { ImageResponse } from 'next/og'

/**
 * Apple touch icon (180x180). Emitted at /apple-icon and auto-wired by
 * Next into <link rel="apple-touch-icon"> — replaces the previous
 * broken reference to /apple-touch-icon.png.
 */
export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 700,
          letterSpacing: '-0.05em',
        }}
      >
        D
      </div>
    ),
    { ...size },
  )
}
