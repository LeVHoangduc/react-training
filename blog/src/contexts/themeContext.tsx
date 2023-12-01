import { createContext, useEffect, useState } from 'react'

export interface ThemeContextData {
  isDark: boolean
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>
}

interface ThemeProviderProps {
  children: React.ReactNode
}

export const ThemeContext = createContext<ThemeContextData | null>(null)

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [isDark, setIsDark] = useState(true)

  const contextData = {
    isDark,
    setIsDark
  }

  useEffect(() => {
    document.body.classList.toggle('dark-theme', isDark)
  }, [isDark])

  return <ThemeContext.Provider value={contextData}>{children}</ThemeContext.Provider>
}

export default ThemeProvider
