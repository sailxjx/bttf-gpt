import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Back to the Future as Interpreted by ChatGPT',
  description: 'The classic film "Back to the Future" has left us with many memorable scenes and characters, but it also contains a number of inconsistencies in its timeline. When appreciating it as a work of art, these details can be overlooked. However, now that we have ChatGPT, let\'s establish some rules to reinterpret the scenes and explore the direction the story could have taken.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
