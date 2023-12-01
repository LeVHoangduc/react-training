export default function SideBarFooter() {
  return (
    <>
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
    </>
  )
}
