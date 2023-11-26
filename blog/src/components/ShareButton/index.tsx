import { useShare } from 'react-facebook'

export interface ShareButtonProps {
  children: string
}

export default function ShareButton({ children }: ShareButtonProps) {
  const { share, isLoading } = useShare()

  async function handleShare() {
    await share({
      href: 'https://blogtechnologique.netlify.app/',
      display: 'iframe'
    })
  }

  return (
    <button type='button' disabled={isLoading} onClick={handleShare}>
      {children}
    </button>
  )
}
