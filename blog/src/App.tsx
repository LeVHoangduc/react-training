import './App.css'
import postList from '../data/jsons/posts.json'

import { useEffect, useState } from 'react'
import useRouteElements from './useRouteElements'

import MainLayout from './layouts/MainLayout'

import PostContext, { PostContextData } from './contexts/postContext'
import ThemeContext from './contexts/themeContext'
import { FacebookProvider } from 'react-facebook'

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
  const [isDark, setIsDark] = useState(true)

  console.log(isDark)

  const value = {
    isDark,
    setIsDark
  }

  useEffect(() => {
    const handleData = () => {
      setPosts(postList as MarkdownData[])
    }
    handleData()
  }, [])

  useEffect(() => {
    document.body.classList.toggle('dark-theme', isDark)
  }, [isDark])

  const contextValue: PostContextData = {
    posts
  }

  return (
    <ThemeContext.Provider value={value}>
      <PostContext.Provider value={contextValue}>
        <FacebookProvider appId='1302726233707586'>
          <MainLayout>{routeElements}</MainLayout>
        </FacebookProvider>
      </PostContext.Provider>
    </ThemeContext.Provider>
  )
}

export default App
