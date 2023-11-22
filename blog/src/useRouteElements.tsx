import { useRoutes } from 'react-router-dom'

import PostWrapper from './components/PostWrapper'

import Posts from './pages/Posts/Posts'
import About from './pages/About/About'

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
      element: <Posts />
    },
    {
      path: '/post/:id',
      element: <PostWrapper />
    }
  ])

  return elements
}
