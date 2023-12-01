import useThemeContext from '@hooks/useThemeContext'

import FacebookComment from '@components/Comment'
import FacebookLike from '@components/Like'
import { useLocation } from 'react-router-dom'
import { PATH } from '@constants/url'

export default function FacebookIntegration() {
  const { isDark } = useThemeContext()

  const { pathname } = useLocation()

  const href = PATH + pathname

  return (
    <div className={`p-4 rounded-md ${isDark ? 'bg-white' : ''}`}>
      <div className='flex gap-4'>
        <FacebookLike className={'flex'} href={href} />
      </div>
      <FacebookComment href={href} />
    </div>
  )
}
