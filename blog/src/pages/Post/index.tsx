import { useContext, useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { createPortal } from 'react-dom'

import { MarkdownData } from 'App'
import PostContext from '../../contexts/postContext'
import ThemeContext from '../../contexts/themeContext'
import CodeBlock from '../../components/CodeBlock'
import TOC from '../../components/TOC'

interface PostProps {
  postId: string
}

export default function Post({ postId }: PostProps) {
  const postContext = useContext(PostContext)
  const themeContext = useContext(ThemeContext)

  const [loading, setLoading] = useState<boolean>(true)
  const [postContent, setPostContent] = useState<MarkdownData | null>(null)

  const classContainer = '.main-layout'

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
  const components = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    code: ({ children, ...props }: any) => {
      // Use your CodeBlock component here
      return <CodeBlock {...props}>{children}</CodeBlock>
    }
  }

  return (
    <>
      <p className={`mb-2 text-[2rem] ${themeContext?.isDark ? 'text-custom-white' : 'text-custom-black'}`}>
        {postContent.title}
      </p>
      <div className='flex flex-row items-center justify-between mb-4'>
        <p className='text-custom-light-gray'>{postContent.date}</p>
        <ul>
          {postContent.tags.map((tag, i) => (
            <li key={i} className='inline-block ml-3 px-[0.7rem] bg-custom-gray rounded-[0.2rem] cursor-pointer'>
              <Link to={`/posts?tag=${tag}`} className='text-[0.7rem] text-custom-black text-center'>
                {tag}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <ReactMarkdown className={`custom-markdown ${themeContext?.isDark ? '' : 'light'}`} components={components}>
        {postContent.content}
      </ReactMarkdown>
      {createPortal(<TOC selector='.content' />, document.querySelector(classContainer) as HTMLElement)}
    </>
  )
}
