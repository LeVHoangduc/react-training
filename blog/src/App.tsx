import './App.css'

import MainLayout from './layouts/MainLayout'
import useRouteElements from './useRouteElements'

function App() {
  const routeElements = useRouteElements()

  return <MainLayout>{routeElements}</MainLayout>
}

export default App
