import { Link } from 'react-router-dom'
import { useContext } from 'react'

import PostContext from '../../contexts/postContext'
import { MarkdownData } from 'App'

interface PostsProps {
  tag: string | null
}

type yearCurrent = string | null

export default function Posts({ tag }: PostsProps) {
  const postContext = useContext(PostContext)

  if (!postContext) {
    return <>Not page</>
  }

  const { posts } = postContext

  let postsData: MarkdownData[] = []

  if (tag) {
    postsData = posts?.filter((post) => post.tags.some((postTag) => postTag === tag)) as MarkdownData[]
  } else {
    postsData = posts as MarkdownData[]
  }

  const postData: JSX.Element[] = []

  let yearCurrent: yearCurrent = null
  postsData?.map((post, i) => {
    // Your date string
    const dateString = post.date

    // Create a Date object by parsing the date string
    const dateObject = new Date(dateString)

    // Get the year from the Date object
    const year = dateObject.getFullYear()

    if (String(year) !== yearCurrent) {
      postData.push(
        <h3 key={year} className='laptop:text-xl desktop:text-2xl mt-6 mb-2 text-2xl text-custom-white text-center'>
          {year}
        </h3>
      )
    }

    yearCurrent = String(year)

    postData.push(
      <li key={i} className='flex'>
        <span className='order-1 text-custom-blue'>
          <Link to={`/post/${post.id}`}>{post.title}</Link>
        </span>
        <span className='custom-after'></span>
        <span className='order-3 text-custom-gray'>{post.date}</span>
      </li>
    )
  })

  return (
    <div>
      <p className='mt-5 mb-2 text-[2rem] text-custom-white'>{`${tag ? 'Related post with ' + tag : 'Posts'}`}</p>

      <ul className='tablet:pl-8'>{postData}</ul>
    </div>
  )
}
