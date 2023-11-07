import Posts from './pages/Posts/Posts'
import About from './pages/About/About'
import { useRoutes } from 'react-router-dom'

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
      element: <Posts />,
      children: [
        {
          path: 'introduction',
          element: (
            <>
              <h1>Introduction</h1>
            </>
          )
        },
        {
          path: 'recent',
          element: <></>
        }
      ]
    }
  ])

  return elements
}
