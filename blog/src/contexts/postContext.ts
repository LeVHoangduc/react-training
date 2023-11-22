import { MarkdownData } from 'App'
import { createContext } from 'react'

export interface PostContextData {
  posts: MarkdownData[] | null
  id?: number
}
const PostContext = createContext<PostContextData | null>(null)

export default PostContext
