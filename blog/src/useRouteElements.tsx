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
      path: '/post/:id',
      element: <PostWrapper />
    }
  ])

  return elements
}
