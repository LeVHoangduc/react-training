import { Like } from 'react-facebook'

interface LikeButtonProps {
  className: string
  href: string
}

export default function LikeButton({ className, href }: LikeButtonProps) {
  return (
    <>
      <div className={className}>
        <Like href={href} colorScheme='dark' showFaces share />
      </div>
    </>
  )
}
