import { useParams, Navigate } from 'react-router-dom'

import Post from '../../pages/Post'

export default function PostWrapper() {
  const { id } = useParams()

  if (!id) return <Navigate to='about' />

  return <Post postId={id} />
}
