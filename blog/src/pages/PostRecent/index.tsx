import Posts from '@components/Posts'
import usePostsContext from '@hooks/usePostsContext'

export default function PostRecent() {
  const { posts } = usePostsContext()

  const postsData = posts.slice(0, 5)

  return <Posts postsData={postsData} titlePage='Recent post' />
}
