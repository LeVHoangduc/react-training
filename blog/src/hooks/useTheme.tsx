import { useContext } from 'react'
import ThemeContext, { ThemeContextData } from '@contexts/themeContext'

export default function useTheme(): ThemeContextData {
  const themeContext = useContext(ThemeContext)

  // Handle cases where ThemeContext might be null or undefined
  const isDark = themeContext?.isDark ?? false
  const setIsDark = themeContext?.setIsDark ?? (() => {})

  return { isDark, setIsDark }
}
