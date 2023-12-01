import { PostContext } from '@contexts/postsContext'
import { useContext } from 'react'

const usePostsContext = () => {
  const context = useContext(PostContext)

  if (!context) throw Error('no posts data')

  return context
}

export default usePostsContext
