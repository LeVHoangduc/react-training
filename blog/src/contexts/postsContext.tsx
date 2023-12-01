import postList from '../../data/jsons/posts.json'

import { createContext } from 'react'

export interface MarkdownData {
  title: string
  author: string
  date: string
  image: string
  tags: string[]
  content: string
  id: number
}

interface PostContextData {
  posts: MarkdownData[]
  id?: number
}

interface PostProviderProps {
  children: React.ReactNode
}

export const PostContext = createContext<PostContextData | null>(null)

const PostProvider = ({ children }: PostProviderProps) => {
  if (!postList) throw Error('no post data ')

  const contextValue: PostContextData = {
    posts: postList as MarkdownData[]
  }
  return <PostContext.Provider value={contextValue}>{children}</PostContext.Provider>
}

export default PostProvider
