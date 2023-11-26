import { useShare } from 'react-facebook'

export default function About() {
  const { share, isLoading } = useShare()

  async function handleShare() {
    await share({
      href: 'https://blogtechnologique.netlify.app/',
      display: 'iframe'
    })
  }

  return (
    <button type='button' disabled={isLoading} onClick={handleShare}>
      Share
    </button>
  )
}
