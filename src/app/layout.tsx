"use client"
import { Inter } from 'next/font/google'
import './globals.css'
import theme from '../theme'
import { ThemeProvider } from '@emotion/react'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider theme={theme}>
    <html lang="en">
      <body >{children}</body>
    </html>
    </ThemeProvider>
  )
}
