import useThemeContext from '@hooks/useThemeContext'
import SideBar from './SideBar'

interface Props {
  children?: React.ReactNode
}

export default function MainLayout({ children }: Props) {
  const { isDark } = useThemeContext()

  return (
    <div className={`main-layout ${isDark ? '' : 'light'}`}>
      <SideBar />
      <main className='content-wrapper'>
        <div className='content'>{children}</div>
      </main>
    </div>
  )
}
