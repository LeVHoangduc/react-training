import { MarkdownData } from '@contexts/postsContext'
import useThemeContext from '@hooks/useThemeContext'

import { Link } from 'react-router-dom'

interface PostsItemProps {
  postsData: MarkdownData[]
}

type yearCurrent = string | null

/**
 * Component responsible for rendering a list of posts grouped by year.
 * @param {PostsItemProps} param - Destructured props containing postsData.
 * @returns {JSX.Element} - The rendered component.
 */
export default function PostsItem({ postsData }: PostsItemProps): JSX.Element {
  const { isDark } = useThemeContext()

  let yearCurrent: yearCurrent = null

  const posts: JSX.Element[] = []

  postsData.forEach((post, i) => {
    const dateString = post.date

    // Create a Date object by parsing the date string
    const dateObject = new Date(dateString)

    // Get the year from the Date object
    const year = dateObject.getFullYear()

    if (String(year) !== yearCurrent) {
      posts.push(
        <h3
          key={year}
          className={`laptop:text-xl desktop:text-2xl mt-6 mb-2 text-2xl text-center ${
            isDark ? 'text-custom-white' : 'text-custom-dark'
          } `}
        >
          {year}
        </h3>
      )
    }

    yearCurrent = String(year)

    posts.push(
      <li key={i} className='flex'>
        <span className='order-1 text-custom-blue'>
          <Link to={`/post/${post.id}`}>{post.title}</Link>
        </span>
        <span className='custom-after'></span>
        <span className='order-3 text-custom-gray'>{post.date}</span>
      </li>
    )
  })

  return <>{posts}</>
}
