import type { Metadata } from 'next'
import { Inter } from 'next/font/google';
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI',
  description: 'Welcome to VidNexus, your premier platform for creating AI-driven videos.',
  keywords: ['technology', 'AI', 'video creation', 'modern'],
  authors: [{ name: 'AI' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function