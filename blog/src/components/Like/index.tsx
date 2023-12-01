import { Like } from 'react-facebook'

interface FacebookLikeProps {
  className: string
  href: string
}

export default function FacebookLike({ className, href }: FacebookLikeProps) {
  return (
    <>
      <div className={className}>
        <Like href={href} colorScheme='dark' showFaces share />
      </div>
    </>
  )
}
