import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  // Check if pathname is missing locale
  const pathnameIsMissingLocale = ['pl', 'en'].every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  // Redirect to /pl if accessing root
  if (pathnameIsMissingLocale) {
    return NextResponse.redirect(new URL('/pl', request.url))
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, api, assets)
    '/((?!_next|api|favicon.ico|.*\\..*).*)',
  ],
}