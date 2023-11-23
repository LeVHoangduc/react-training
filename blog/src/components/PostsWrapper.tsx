import { useLocation } from 'react-router-dom'

import Posts from '../pages/Posts/Posts'

export default function PostWrapper() {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)

  const tag = searchParams.get('tag')

  return <Posts tag={tag} />
}
