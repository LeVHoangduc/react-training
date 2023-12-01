import { useContext } from 'react'
import { ThemeContext } from '@contexts/themeContext'

const useThemeContext = () => {
  const context = useContext(ThemeContext)

  if (!context) throw Error('no theme data')

  return context
}

export default useThemeContext
