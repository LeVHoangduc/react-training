import useTheme from '@hooks/useTheme'

export default function About() {
  const { isDark } = useTheme()

  return (
    <div className={`custom-markdown ${isDark ? '' : 'light'}`}>
      <h1 className={`mb-2 text-[2rem] ${isDark ? 'text-custom-white' : 'text-custom-black'}`}>About my blog</h1>
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
        Here at our technology blog, we pride ourselves on being at the intersection of two dynamic realms:{' '}
        <strong>Web Application Development</strong> and <strong>Signal Processing</strong>. Our mission is to unravel
        the intricacies of these domains and illuminate the path forward.
      </p>
      <p>
        <strong>Web Applications:</strong> Step into the world where user interfaces meet functionality, and where the
        web becomes a canvas for innovation. Our articles delve into the latest frameworks, tools, and design principles
        that shape modern web applications. Whether you're a developer seeking practical insights or a business owner
        navigating the digital landscape, we have you covered.
      </p>
      <p>
        <strong>Signal Processing:</strong> Venture into the fascinating realm where data transforms into meaningful
        insights. Signal processing is the backbone of technologies that power communication, audio processing, and
        beyond. From fundamental concepts to advanced applications, our content demystifies signal processing, making it
        accessible to both beginners and experts.
      </p>
      <p>
        But this blog is more than just insights; it's a community. We invite you to join the conversation, ask
        questions, and share your experiences. Together, let's explore how the fusion of web applications and signal
        processing is shaping the digital landscape.
      </p>
      <p>
        Whether you're passionate about creating seamless user experiences or intrigued by the magic happening behind
        the scenes, our blog is your go-to resource. From tutorials and case studies to thought-provoking analyses,
        embark on a journey where technology converges with creativity.
      </p>
    </div>
  )
}
