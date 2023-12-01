import Posts from '@components/Posts'
import usePostsContext from '@hooks/usePostsContext'
import { useLocation } from 'react-router-dom'

export default function PostRelated() {
  const { posts } = usePostsContext()

  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)

  const tag = searchParams.get('tag')

  const titlePage = `Related post with ${tag}`

  const postsData = posts.filter((post) => post.tags.some((postTag) => postTag === tag))

  return <Posts postsData={postsData} titlePage={titlePage} />
}
