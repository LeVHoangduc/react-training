import { useParams, Navigate } from 'react-router-dom'
import Post from '@components/Post'

export default function PostDetail() {
  const { id } = useParams()

  if (!id) return <Navigate to='about' />

  return <Post postId={id} />
}
