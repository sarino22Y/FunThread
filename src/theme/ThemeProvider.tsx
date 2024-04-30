import React from 'react'
import { ThemeProviderProps } from "next-themes/dist/types"
import { ThemeProvider as NextThemesProvider } from 'next-themes'

const ThemeProvider = ({ children, ...props} : ThemeProviderProps) => {
  return (
   <NextThemesProvider {...props}>{children}</NextThemesProvider>
  )
}

export default ThemeProvider
