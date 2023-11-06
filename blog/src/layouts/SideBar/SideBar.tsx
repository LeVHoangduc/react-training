import React from 'react'

export default function SideBar() {
  return (
    <aside className='px-4 py-8 bg-custom-dark-gray text-center md:w-72 lg:w-custom-xl md:overflow-y-auto'>
      <div className='max-w-38rem px-4 sm:max-w-full sm:px-5 md:px-4'>
        <div className='flex justify-end'>
          <button className='m-4 p-0 w-10 h-10 bg-custom-light-black border-none rounded-full text-center cursor-pointer float-right'>
            <img src='/assets/icons/sun.svg' alt='sun' className='block m-auto w-5 h-5' />
          </button>
        </div>
        <div>
          <a href='https://poison.lukeorth.com/'>
            <img
              src='/assets/images/brand_image.jpg'
              alt='brand'
              className='w-180x h-180x ml-auto mr-auto mb-4 border-2 border-custom-light-black rounded-full text-center cursor-pointer'
            />
          </a>
          <a href='https://poison.lukeorth.com/'>
            <h1 className=' mb-2 text-4xl leading-tight font-light font-abril text-custom-white'>Poison</h1>
          </a>
          <p className='mb-4 font-light font-fira text-xl text-custom-medium-gray sm:text-2xl sm:mb-5 md:text-xl lg:text-2xl'>
            A pragmatic Hugo theme for bloggers. Based on the classic{' '}
            <a href='https://github.com/poole/hyde' className='text-custom-white hover:underline'>
              Hyde
            </a>{' '}
            design by{' '}
            <a href='https://github.com/mdo' className='text-custom-white hover:underline'>
              @mdo
            </a>
          </p>
        </div>
        <div className='md:text-left'>
          <nav>
            <ul className='my-8'>
              <li className='mt-4 font-normal text-custom-white hover:underline lg:text-xl'>
                <a href='/about/'>About</a>
              </li>

              <li className='mt-4 font-normal text-custom-white hover:underline lg:text-xl'>
                <a href='/posts/'>Posts</a>
              </li>

              <li className='font-normal text-custom-medium-gray hover:underline lg:text-xl lg:ml-5'>Recent</li>

              <li className=' text-custom-white hover:underline lg:text-xl lg:ml-5'>
                <a href='https://poison.lukeorth.com/posts/introducing-poison/'>Introducing Poison</a>
              </li>
            </ul>
          </nav>

          <a title='GitHub' href='https://github.com' className='inline-block mr-2 lg:w-6'>
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
          <a title='RSS Feed' href='https://poison.lukeorth.com/' className='inline-block mr-2 lg:w-6'>
            <img src='/assets/icons/feed.svg' alt='feed' />
          </a>
          <a title='Email' href='mailto://user@domain' className='inline-block mr-2 lg:w-6'>
            <img src='/assets/icons/mail.svg' alt='mail' />
          </a>

          <p className='mt-2 mb-4 text-custom-xs text-custom-medium-gray font-fira sm:text-sm md:text-custom-xs lg:text-sm'>
            powered by{' '}
            <a href='https://gohugo.io' className='text-custom-white hover:underline'>
              Hugo
            </a>{' '}
            | themed with{' '}
            <a href='https://github.com/lukeorth/poison' className='text-custom-white hover:underline'>
              poison
            </a>
            <br />© 2023 Poison. All rights reserved.
          </p>
        </div>
      </div>
    </aside>
  )
}
