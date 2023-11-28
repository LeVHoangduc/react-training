import { useRoutes } from 'react-router-dom'

import PostsWrapper from '@components/PostsWrapper'
import PostWrapper from '@components/PostWrapper'
import Introduction from '@pages/Introduction'
import About from '@pages/About/About'
import ErrorPage from '@pages/Error'

export default function useRouteElements() {
  const elements = useRoutes([
    {
      path: '/',
      element: <Introduction />
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
    },
    {
      path: '/404',
      element: <ErrorPage />
    }
  ])

  return elements
}
