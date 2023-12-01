import { Link, NavLink } from 'react-router-dom'

export default function SideBarNavigation() {
  return (
    <>
      <nav>
        <ul className='my-8'>
          <li className='mt-4 font-normal text-custom-white hover:underline '>
            <Link to='/about/'>About</Link>
          </li>

          <li className='mt-4 font-normal text-custom-white hover:underline '>
            <Link to='/posts/'>Posts</Link>
          </li>

          <li className='font-normal text-custom-medium-gray hover:underline laptop:ml-4'>
            <NavLink to='/recent' className={({ isActive }) => (isActive ? 'text-custom-gray' : 'text-custom-white')}>
              Recent
            </NavLink>
          </li>
          <li className=' text-custom-white hover:underline laptop:ml-4'>
            <NavLink to='/' className={({ isActive }) => (isActive ? 'text-custom-gray' : 'text-custom-white')}>
              Introducing Le
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
}
