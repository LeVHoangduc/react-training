import { useContext, useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import ReactMarkdown, { Components } from 'react-markdown'

import PostContext from '../../contexts/postContext'
import { MarkdownData } from 'App'
import CodeBlock from '../../components/CodeBlock'

interface PostProps {
  postId: string
}

export default function Post({ postId }: PostProps) {
  const postContext = useContext(PostContext)
  const [loading, setLoading] = useState<boolean>(true)
  const [postContent, setPostContent] = useState<MarkdownData | null>(null)

  useEffect(() => {
    if (postContext) {
      const { posts } = postContext
      const data = posts?.find((post) => post.id === Number(postId))

      if (data) {
        setPostContent(data)
      }

      setTimeout(() => {
        setLoading(false)
      }, 200)
    }
  }, [postContext, postId])

  if (loading) {
    return <>Loading....</>
  }

  if (!postContent) {
    return <Navigate to='/404' />
  }
  const components: Components = {
    code: CodeBlock
  }

  return (
    <>
      <p className='mb-2 text-custom-white text-[2rem]'>{postContent.title}</p>
      <div className='flex flex-row items-center justify-between mb-4'>
        <p className='text-custom-light-gray'>{postContent.date}</p>
        <ul>
          {postContent.tags.map((tag, i) => (
            <li key={i} className='inline-block ml-3 px-[0.7rem] bg-custom-gray rounded-[0.2rem] cursor-pointer'>
              <Link to='/about' className='text-[0.7rem] text-custom-black text-center'>
                {tag}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <ReactMarkdown className='custom-markdown' components={components}>
        {postContent.content}
      </ReactMarkdown>
    </>
  )
}
