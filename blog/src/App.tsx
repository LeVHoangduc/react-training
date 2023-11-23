import './App.css'
import postList from '../data/jsons/posts.json'

import MainLayout from './layouts/MainLayout'
import useRouteElements from './useRouteElements'
import { useEffect, useState } from 'react'
import PostContext, { PostContextData } from './contexts/postContext'

export interface MarkdownData {
  title: string
  author: string
  date: string
  image: string
  tags: string[]
  content: string
  id: number
}

function App() {
  const routeElements = useRouteElements()

  const [posts, setPosts] = useState<MarkdownData[] | null>(null)

  useEffect(() => {
    const handleData = () => {
      setPosts(postList as MarkdownData[])
    }
    handleData()
  }, [])

  const contextValue: PostContextData = {
    posts
  }

  return (
    <PostContext.Provider value={contextValue}>
      <MainLayout>{routeElements}</MainLayout>
    </PostContext.Provider>
  )
}

export default App
