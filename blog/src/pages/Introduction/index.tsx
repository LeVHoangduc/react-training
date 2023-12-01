import useTheme from '@hooks/useTheme'

export default function Introduction() {
  const { isDark } = useTheme()

  return (
    <div className={`custom-markdown ${isDark ? '' : 'light'}`}>
      <h1 className={`mb-2 text-[2rem] ${isDark ? 'text-custom-white' : 'text-custom-black'}`}>
        Welcome to Our Technology Blog
      </h1>
      <hr />
      <p>
        <em>
          In the vast realm of technology, where innovation is the heartbeat, we invite you to explore a world of
          ideas—where words aren't just expressions, but catalysts for understanding the digital landscape.
        </em>
      </p>
      <p>
        <em>— Embrace the Future with Us</em>
      </p>
      <hr />
      <p>
        Here at our technology blog, we present <strong>insightful</strong>, <strong>engaging</strong>, and{' '}
        <strong>forward-thinking</strong> content designed to keep you on the pulse of the ever-evolving tech sphere.
      </p>
      <p>
        Our commitment goes beyond the surface. We deliver <strong>in-depth analyses</strong> of the latest trends,{' '}
        <strong>explorations</strong> of cutting-edge technologies, and <strong>inspiring narratives</strong> that
        showcase the transformative power of innovation.
      </p>
      <p>
        What sets us apart? We prioritize <strong>clarity</strong> and <strong>simplicity</strong>, making complex
        topics accessible to tech enthusiasts at every level. No jargon-heavy monologues—just a seamless blend of
        knowledge and readability.
      </p>
      <p>
        In a digital landscape cluttered with complexities, we stand as your <strong>trusted guide</strong>. No matter
        whether you're a seasoned developer, a curious newcomer, or someone simply fascinated by the tech universe,
        there's something here for you.
      </p>
      <p>
        Dive into our articles, tutorials, and reviews to embark on a journey where technology isn't just a tool; it's a
        narrative that shapes our present and charts our future. Curious minds, welcome aboard!
      </p>
    </div>
  )
}
