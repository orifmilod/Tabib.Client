"use client"
import './globals.css'
import theme from '../theme'
import { ThemeProvider } from '@emotion/react'

import { Provider } from 'react-redux'
import { reduxStore } from 'src/redux/store'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider theme={theme}>
        <Provider store={reduxStore}>
          <html lang="en">
            <body >{children}</body>
          </html>
        </Provider>
      </ThemeProvider>
  )
}
