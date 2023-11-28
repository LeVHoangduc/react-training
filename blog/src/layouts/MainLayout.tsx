import SideBar from './SideBar'

import useTheme from '../hooks/useTheme'

interface Props {
  children?: React.ReactNode
}

export default function MainLayout({ children }: Props) {
  const { isDark } = useTheme()

  return (
    <div className={`main-layout ${isDark ? '' : 'light'}`}>
      <SideBar />
      <main className='content-wrapper'>
        <div className='content'>{children}</div>
      </main>
    </div>
  )
}
