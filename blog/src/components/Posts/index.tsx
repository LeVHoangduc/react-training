import useThemeContext from '@hooks/useThemeContext'

import { MarkdownData } from '@contexts/postsContext'
import PostsItem from './PostsItem'

interface PostsProps {
  postsData: MarkdownData[]
  titlePage: string
}

/**
 * Functional component representing a list of posts.
 * @param {PostsProps} param - Destructured props containing postsData and titlePage.
 * @returns {JSX.Element} - The rendered component.
 */
export default function Posts({ postsData, titlePage }: PostsProps): JSX.Element {
  const { isDark } = useThemeContext()

  return (
    <div>
      <p className={`mt-5 mb-2 text-[2rem] ${isDark ? 'text-custom-white' : 'text-custom-dark'}`}>{titlePage}</p>

      <ul className='tablet:pl-8'>
        <PostsItem postsData={postsData} />
      </ul>
    </div>
  )
}
