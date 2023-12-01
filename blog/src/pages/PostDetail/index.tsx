import { useParams, Navigate } from 'react-router-dom'
import Post from '@components/PostWrapper'

export default function PostWrapper() {
  const { id } = useParams()

  if (!id) return <Navigate to='about' />

  return <Post postId={id} />
}
