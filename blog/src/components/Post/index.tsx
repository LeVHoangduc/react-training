import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'

import useThemeContext from '@hooks/useThemeContext'
import usePostsContext from '@hooks/usePostsContext'

import { MarkdownData } from '@contexts/postsContext'

import TOC from '@components/TOC'
import Portal from '@components/Portal'
import ConvertMarkdown from '@components/ConvertMarkdown'

import PostTag from './PostTag'
import FacebookIntegration from '@components/FacebookIntegration'

interface PostProps {
  postId: string
}

export default function Post({ postId }: PostProps) {
  const { posts } = usePostsContext()
  const { isDark } = useThemeContext()

  const [loading, setLoading] = useState<boolean>(true)
  const [postContent, setPostContent] = useState<MarkdownData | null>(null)

  const classContainer = '.main-layout'

  useEffect(() => {
    const data = posts.find((post) => post.id === Number(postId))

    data && setPostContent(data)

    setTimeout(() => {
      setLoading(false)
    }, 200)
  }, [postId, posts])

  if (loading) return <>Loading....</>

  if (!postContent) return <Navigate to='/404' />

  return (
    <div>
      <p className={`mb-2 text-[2rem] ${isDark ? 'text-custom-white' : 'text-custom-black'}`}>{postContent.title}</p>
      <div className='flex flex-row items-center justify-between mb-4'>
        <p className='text-custom-light-gray'>{postContent.date}</p>
        <PostTag postContent={postContent} />
      </div>
      <ConvertMarkdown postContent={postContent} />
      <Portal component={<TOC selector='.content' />} className={classContainer} />
      <FacebookIntegration />
    </div>
  )
}
