import { useContext, useEffect, useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import { materialDark, materialLight } from 'react-syntax-highlighter/dist/esm/styles/prism'

import ThemeContext from '../../contexts/themeContext'
import { copyIcon, pasteIcon } from '../../constants/assets'
interface CodeProps {
  children: string
}

export default function CodeBlock({ children }: CodeProps) {
  const [copied, setCopied] = useState(false)
  const themeContext = useContext(ThemeContext)

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [copied])

  return (
    <div className='relative'>
      <>
        <CopyToClipboard text={children.toString()} onCopy={() => setCopied(true)}>
          <img src={`${copied ? pasteIcon : copyIcon}`} alt='icon' className='w-6 absolute top-4 right-4 z-10' />
        </CopyToClipboard>
        <SyntaxHighlighter language='Javascript' style={themeContext?.isDark ? materialDark : materialLight}>
          {children}
        </SyntaxHighlighter>
      </>
    </div>
  )
}
