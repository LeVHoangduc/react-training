import usePostsContext from '@hooks/usePostsContext'

import Posts from '@components/Posts'

export default function PostList() {
  const { posts } = usePostsContext()

  return <Posts postsData={posts} titlePage='Posts' />
}
