import { useRoutes } from 'react-router-dom'

import About from './pages/About/About'
import PostsWrapper from './components/PostsWrapper'
import PostWrapper from './components/PostWrapper'

export default function useRouteElements() {
  const elements = useRoutes([
    {
      path: '/',
      element: <></>
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '/posts',
      element: <PostsWrapper />
    },
    {
      path: '/recent',
      element: <PostsWrapper filter='recent' />
    },
    {
      path: '/post/:id',
      element: <PostWrapper />
    }
  ])

  return elements
}
