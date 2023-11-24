import { useEffect, useState } from 'react'

interface TOCprops {
  selector: string
}

export default function TOC({ selector }: TOCprops) {
  const [currentHeadingID, setCurrentHeadingID] = useState<string | undefined>()
  const [headings, setHeadings] = useState<HTMLHeadElement[]>([])

  const content = document.querySelector(selector)?.parentElement

  // collect all heading
  useEffect(() => {
    const headingNodeList = document
      .querySelector(selector)!
      .querySelectorAll('h2,h3,h4,h5,h6') as NodeListOf<HTMLHeadElement>

    if (headingNodeList.length) {
      const headingArray = Array.from(headingNodeList)
      headingArray.forEach((el) => {
        el.dataset.id = Math.round(Math.random() * 1000).toString()
      })
      setHeadings(headingArray)
    }
  }, [])

  // find out what is the current heading
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 1) {
            setCurrentHeadingID((entry.target as HTMLHeadElement).dataset.id)
          }
        })
      },
      {
        rootMargin: '0% 0% -90% 0%',
        threshold: 1
      }
    )

    if (headings.length) {
      headings.forEach((s) => {
        observer.observe(s)
      })
    }

    return () => {
      return observer.disconnect()
    }
  }, [headings, headings.length])

  return (
    <div className='extraDesktop:block hidden mt-20 '>
      <div className='p-4 h-full overflow-scroll'>
        <p className='text-2xl font-normal text-custom-light'>Contents</p>
        {headings.map((heading) => {
          const tagLevel = heading.tagName.match(/(\d+)/)?.[0] || '1'

          return (
            <button
              key={heading.dataset.id}
              data-id={heading.dataset.id}
              style={{ paddingLeft: +tagLevel * 7 + 'px' }}
              onClick={() => {
                content?.scrollTo({
                  top: heading.getBoundingClientRect().top + window.scrollY,
                  behavior: 'smooth'
                })
                console.log(heading.getBoundingClientRect().top + window.scrollY)
              }}
              className={`flex my-1 py-2 pr-2 text-lg font-light text-custom-light-gray rounded-lg cursor-pointer ${
                currentHeadingID === heading.dataset.id
                  ? 'bg-custom-dark-blue text-custom-white'
                  : 'hover:bg-custom-dark-blue hover:text-custom-white'
              }`}
            >
              {heading.innerHTML}
            </button>
          )
        })}
      </div>
    </div>
  )
}
