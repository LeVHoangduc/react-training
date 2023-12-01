import { useLocation } from 'react-router-dom'
import Posts from '@components/Posts'

interface PostListProps {
  filter?: string
}

export default function PostList({ filter }: PostListProps) {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)

  const tag = searchParams.get('tag')

  return <Posts tag={tag} filter={filter} />
}
