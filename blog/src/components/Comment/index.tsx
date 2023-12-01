import { Comments } from 'react-facebook'

interface CommentProps {
  href: string
}
export default function FacebookComment({ href }: CommentProps) {
  return (
    <div>
      <Comments href={href} />
    </div>
  )
}
