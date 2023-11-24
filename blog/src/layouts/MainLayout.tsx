import { useContext } from 'react'
import SideBar from './SideBar'

import ThemeContext from '../contexts/themeContext'

interface Props {
  children?: React.ReactNode
}

export default function MainLayout({ children }: Props) {
  const themeContext = useContext(ThemeContext)

  return (
    <div className={`main-layout ${themeContext?.isDark ? '' : 'light'}`}>
      <SideBar />
      <main className='content-wrapper'>
        <div className='content'>{children}</div>
      </main>
    </div>
  )
}
