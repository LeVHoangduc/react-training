import { Link } from 'react-router-dom'

import useThemeContext from '@hooks/useThemeContext'
import { MOON, SUN } from '@constants/assets'
import SideBarFooter from './SideBarFooter'
import SideBarNavigation from './SideBarNavigation'

export default function SideBar() {
  const { isDark, setIsDark } = useThemeContext()

  const handleSetDark = () => {
    setIsDark(!isDark)
  }

  return (
    <aside className='sidebar'>
      <div className='max-w-38rem px-4 laptop:w-64'>
        <div className='flex justify-end'>
          <button
            onClick={handleSetDark}
            className='m-4 p-0 w-10 h-10 bg-custom-light-black border-none rounded-full text-center cursor-pointer float-right'
          >
            <img src={`${isDark ? SUN : MOON}`} alt='sun' className='block m-auto w-5 h-5' />
          </button>
        </div>
        <div className='text-center'>
          <Link to='https://blogtechnologique.netlify.app/'>
            <img
              src='/assets/images/avatar.jpg'
              alt='brand'
              className='w-[180px] h-[180px] ml-auto mr-auto mb-4 border-2 border-custom-light-black rounded-full text-center object-cover cursor-pointer'
            />
          </Link>
          <Link to='https://blogtechnologique.netlify.app/'>
            <h1 className='mb-2 text-4xl leading-tight font-light font-abril text-custom-white'>Le Vu Hoang Duc</h1>
          </Link>
          <p className='mb-4 font-light font-fira text-xl text-custom-medium-gray'>
            Hi 👋 I have a great motivation to learn about new technologies and scientific research o.o
          </p>
        </div>
        <SideBarNavigation />
        <SideBarFooter />
      </div>
    </aside>
  )
}
