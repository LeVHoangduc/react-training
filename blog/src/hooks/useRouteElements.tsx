import { useRoutes } from 'react-router-dom'

import Introduction from '@pages/Introduction'
import About from '@pages/About/About'
import ErrorPage from '@pages/Error'
import PostList from '@pages/PostList'
import PostDetail from '@pages/PostDetail'
import PostRecent from '@pages/PostRecent'
import PostRelated from '@pages/PostRelated'

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
      element: <PostList />
    },
    {
      path: '/recent',
      element: <PostRecent />
    },
    {
      path: '/related/',
      element: <PostRelated />
    },
    {
      path: '/post/:id',
      element: <PostDetail />
    },
    {
      path: '/404',
      element: <ErrorPage />
    }
  ])

  return elements
}
