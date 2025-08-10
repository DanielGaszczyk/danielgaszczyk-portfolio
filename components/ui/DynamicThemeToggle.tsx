'use client'

import dynamic from 'next/dynamic'

export const DynamicThemeToggle = dynamic(
  () => import('@/components/ui/ThemeToggle').then((mod) => mod.ThemeToggle),
  { 
    ssr: false,
    loading: () => <div className="w-10 h-10" />
  }
)