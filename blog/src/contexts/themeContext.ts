import { createContext } from 'react'

export interface ThemeContextData {
  isDark: boolean
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>
}

const ThemeContext = createContext<ThemeContextData | undefined>(undefined)

export default ThemeContext
