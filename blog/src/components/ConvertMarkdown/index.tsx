import CodeBlock from '@components/CodeBlock'

import ReactMarkdown from 'react-markdown'

import useThemeContext from '@hooks/useThemeContext'

import { MarkdownData } from '@contexts/postsContext'

interface ConvertMarkdownProps {
  postContent: MarkdownData
}

/**
 * ConvertMarkdown component renders markdown content using ReactMarkdown,
 * with custom styling and a CodeBlock component for rendering code snippets.
 *
 * @param {ConvertMarkdownProps} postContent - The Markdown data to be rendered.
 * @returns {JSX.Element} - React element representing the converted Markdown content.
 */
export default function ConvertMarkdown({ postContent }: ConvertMarkdownProps) {
  const { isDark } = useThemeContext()

  const components = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    code: ({ children, className }: any) => {
      // Use your CodeBlock component here
      return <CodeBlock className={className}>{children}</CodeBlock>
    }
  }
  return (
    <ReactMarkdown className={`custom-markdown ${isDark ? '' : 'light'}`} components={components}>
      {postContent.content}
    </ReactMarkdown>
  )
}
