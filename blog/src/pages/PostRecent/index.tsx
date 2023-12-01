import { LIMIT_RECENT_POSTS } from '@constants/values'

import usePostsContext from '@hooks/usePostsContext'

import Posts from '@components/Posts'

export default function PostRecent() {
  const { posts } = usePostsContext()

  const postsData = posts.slice(0, LIMIT_RECENT_POSTS)

  return <Posts postsData={postsData} titlePage='Recent post' />
}
