import { useContext } from 'react'

import ThemeContext from '../../contexts/themeContext'

export default function About() {
  const themeContext = useContext(ThemeContext)

  return (
    <div className={`custom-markdown ${themeContext?.isDark ? '' : 'light'}`}>
      <h1 className={`mb-2 text-[2rem] ${themeContext?.isDark ? 'text-custom-white' : 'text-custom-black'}`}>About</h1>
      <hr />
      <p>
        <em>
          Words kill, words give life; they’re either <strong>poison</strong> or fruit—you choose.
        </em>
      </p>
      <p>
        <em>— Proverbs 18:21</em>
      </p>
      <hr />
      <p>
        <em>Poison</em> is a <strong>clean</strong>, <strong>professional</strong> Hugo theme designed to{' '}
        <strong>captivate</strong> your readers.
      </p>
      <p>
        It’s also <strong>tiny</strong> and <strong>privacy conscious</strong> with <em>no external dependencies</em>.
        That’s right—no JavaScript frameworks, icon packs, or Google fonts. No ads or trackers polluting your console
        window (try it out and take a look). <strong>We kept things simple</strong>. A little vanilla JavaScript, a dash
        of CSS, and the power of Hugo.
      </p>
      <p>
        All of the static assets for the site (JS files, CSS, and fonts) are located within the theme’s{' '}
        <em>/static/</em> directory.{' '}
        <strong>
          That way you know <em>exactly</em> what’s going on your site
        </strong>
        .
      </p>
      <p>
        To get started, I recommend reading through my introductory post{' '}
        <a href='https://poison.lukeorth.com/posts/introducing-poison/'>here</a>. I use this theme on my personal site
        at{' '}
        <a href='https://lukeorth.com' target='_blank'>
          https://lukeorth.com
        </a>
        , so check it out if you want to see <em>Poison</em> in action.
      </p>
    </div>
  )
}
