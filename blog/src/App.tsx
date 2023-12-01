import FacebookContextProvider from '@contexts/facebookContext'
import './App.css'

import useRouteElements from './hooks/useRouteElements'

import PostProvider from '@contexts/postsContext'
import ThemeProvider from '@contexts/themeContext'

import MainLayout from './layouts/MainLayout'

function App() {
  const routeElements = useRouteElements()

  return (
    <ThemeProvider>
      <PostProvider>
        <FacebookContextProvider>
          <MainLayout>{routeElements}</MainLayout>
        </FacebookContextProvider>
      </PostProvider>
    </ThemeProvider>
  )
}

export default App
