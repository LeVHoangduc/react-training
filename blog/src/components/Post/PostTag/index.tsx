import { Link } from 'react-router-dom'

import { MarkdownData } from '@contexts/postsContext'

interface PostContentProps {
  postContent: MarkdownData
}

/**
 * PostTag component renders a list of tags for a given post, each linked to a corresponding tag page.
 *
 * @param {PostContentProps} param - Props containing postContent with tag information.
 * @returns {JSX.Element} - React element representing the list of tags for the post.
 */
export default function PostTag({ postContent }: PostContentProps): JSX.Element {
  return (
    <ul>
      {postContent.tags.map((tag, i) => (
        <li key={i} className='inline-block ml-3 px-[0.7rem] bg-custom-gray rounded-[0.2rem] cursor-pointer'>
          <Link to={`/related?tag=${tag}`} className='text-[0.7rem] text-custom-black text-center'>
            {tag}
          </Link>
        </li>
      ))}
    </ul>
  )
}
