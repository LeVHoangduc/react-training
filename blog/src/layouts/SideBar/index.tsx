import { useContext } from 'react'
import { Link } from 'react-router-dom'

import ThemeContext from '../../contexts/themeContext'
import { sun, moon } from '../../constants/assets'

export default function SideBar() {
  const themContext = useContext(ThemeContext)

  const handleSetDark = () => {
    themContext?.setIsDark(!themContext.isDark)
  }

  return (
    <aside className='sidebar'>
      <div className='max-w-38rem px-4 laptop:w-64'>
        <div className='flex justify-end'>
          <button
            onClick={handleSetDark}
            className='m-4 p-0 w-10 h-10 bg-custom-light-black border-none rounded-full text-center cursor-pointer float-right'
          >
            <img src={`${themContext?.isDark ? sun : moon}`} alt='sun' className='block m-auto w-5 h-5' />
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

        <nav>
          <ul className='my-8'>
            <li className='mt-4 font-normal text-custom-white hover:underline '>
              <Link to='/about/'>About</Link>
            </li>

            <li className='mt-4 font-normal text-custom-white hover:underline '>
              <Link to='/posts/'>Posts</Link>
            </li>

            <li className='font-normal text-custom-medium-gray hover:underline laptop:ml-4'>
              <Link to='/recent'>Recent</Link>
            </li>

            <li className=' text-custom-white hover:underline laptop:ml-4'>
              <Link to='/'>Introducing Le</Link>
            </li>
          </ul>
        </nav>

        <a title='GitHub' href='https://github.com/LeVHoangduc/' className='inline-block mr-2 lg:w-6'>
          <img src='/assets/icons/github.svg' alt='github' />
        </a>
        <a title='LinkedIn' href='https://linkedin.com' className='inline-block mr-2 lg:w-6'>
          <img src='/assets/icons/linkedin.svg' alt='linkedin' />
        </a>
        <a title='Twitter' href='https://twitter.com' className='inline-block mr-2 lg:w-6'>
          <img src='/assets/icons/twitter.svg' alt='twitter' />
        </a>
        <a title='Discord' href='https://discord.com' className='inline-block mr-2 lg:w-6'>
          <img src='/assets/icons/discord.svg' alt='discord' />
        </a>
        <a title='YouTube' href='https://youtube.com' className='inline-block mr-2 lg:w-6'>
          <img src='/assets/icons/youtube.svg' alt='youtube' />
        </a>
        <a title='RSS Feed' href='https://blogtechnologique.netlify.app/' className='inline-block mr-2 lg:w-6'>
          <img src='/assets/icons/feed.svg' alt='feed' />
        </a>
        <a title='Email' href='mailto://levhoangduc@gmail.com' className='inline-block mr-2 lg:w-6'>
          <img src='/assets/icons/mail.svg' alt='mail' />
        </a>

        <p className='mt-2 mb-4 text-[0.7rem] text-custom-medium-gray font-fira'>
          powered by{' '}
          <a href='https://blogtechnologique.netlify.app/' className='text-custom-white hover:underline'>
            Le
          </a>{' '}
          | themed with{' '}
          <a href='https://blogtechnologique.netlify.app/' className='text-custom-white hover:underline'>
            Alexandre
          </a>
          <br />© 2023 Alexandre. All rights reserved.
        </p>
      </div>
    </aside>
  )
}
