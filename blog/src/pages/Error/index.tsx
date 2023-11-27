import { useContext } from 'react'

import ThemeContext from '../../contexts/themeContext'

export default function Error() {
  const themeContext = useContext(ThemeContext)

  return (
    <div
      className={`flex justify-center items-center flex-col ${
        themeContext?.isDark ? 'text-custom-white' : 'text-custom-black'
      }`}
    >
      <p className='text-6xl'>404</p>
      <p>Not Found! Please try again</p>
    </div>
  )
}
