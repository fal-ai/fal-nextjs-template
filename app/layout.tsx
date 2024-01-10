import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Nav } from '@/components/nav'
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Model Playground',
  description: 'Full stack framework for building with ready-to-use model APIs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} style={{ display: 'flex', flex:1, flexDirection:'column', height: '100vh'}}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Nav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
