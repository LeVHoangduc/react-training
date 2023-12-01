---
title: How to create TOC with React and Typescript
author: Duc Le
date: 2024-11-28
tags: TOC
---
​

## What is this?

I will create a Table of contents with each table of contents as the title of the article. With this table of contents you can click to go to content based on title and track what content you are reading.

## Step 1: Component Functionality

- currentHeadingID: State variable to store the ID of the currently intersecting heading.
- headings: State variable to store an array of heading elements.

```typescript
const [currentHeadingID, setCurrentHeadingID] = useState<string | undefined>()
const [headings, setHeadings] = useState<HTMLHeadElement[]>([])
```

- useTheme: Custom hook to get the current theme information.

```typescript
const { isDark } = useTheme()
```

- content: Select the parent element of the specified selector.

```typescript
const content = document.querySelector(selector)?.parentElement
```

## Step 2: Collect All Headings (useEffect #1)

- Use useEffect to collect all heading elements of types h2 to h6 within the specified selector.

```typescript
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
```

- Assign a random ID to each heading element and update the headings state.

## Step 3: Find Current Heading (useEffect #2)

- Use useEffect to observe heading elements for intersection with the viewport.
- When a heading is fully intersecting, update the currentHeadingID state with its ID.
- Cleanup by disconnecting the observer when the component unmounts or when headings change.

A basic hello world:

```typescript
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
        rootMargin: '0% 0% -85% 0%',
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
```

- You can search more information about to IntersectionObserver here

## Step 3: Render

- Render a div containing the table of contents (TOC).
- Map through the headings array to create buttons for each heading.
- Adjust the button style based on the current heading and theme.
- Scroll to the selected heading when a button is clicked.

```typescript
 return (
    <div className='extraDesktop:block hidden mt-20 '>
      <div className='p-4 h-full overflow-scroll'>
        <p className={`text-2xl font-normal ${isDark ? 'text-custom-light' : 'text-custom-black'}`}>Contents</p>
        {headings.map((heading) => {
          const tagLevel = heading.tagName.match(/(\d+)/)?.[0] || '1'

          return (
            <button
              key={heading.dataset.id}
              data-id={heading.dataset.id}
              style={{ paddingLeft: +tagLevel * 7 + 'px' }}
              onClick={() => {
                content?.scrollTo({
                  top: heading.getBoundingClientRect().top + content.scrollTop,
                  behavior: 'smooth'
                })
              }}
              className={`flex my-1 py-2 pr-2 text-[0.9rem] rounded-lg cursor-pointer hover:font-bold text-left ${
                currentHeadingID === heading.dataset.id ? 'font-bold' : 'font-light'
              } ${isDark ? 'text-custom-light' : 'text-custom-black'}`}
            >
              {heading.innerHTML}
            </button>
          )
        })}
      </div>
    </div>
  )
```

## Results

![Demo GIF](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2w1eXNxYWpsZDFudDRqeHBzYmh6OWVmNzRqbWRnd2x2aHdlbmp6NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/CtAwNqSC3NV1ctg3jz/giphy.gif)

```typescript
import { useEffect, useState } from 'react'
import useTheme from '@hooks/useTheme'

interface TOCprops {
  selector: string
}

export default function TOC({ selector }: TOCprops) {
  const [currentHeadingID, setCurrentHeadingID] = useState<string | undefined>()
  const [headings, setHeadings] = useState<HTMLHeadElement[]>([])

  const { isDark } = useTheme()

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
        rootMargin: '0% 0% -85% 0%',
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
        <p className={`text-2xl font-normal ${isDark ? 'text-custom-light' : 'text-custom-black'}`}>Contents</p>
        {headings.map((heading) => {
          const tagLevel = heading.tagName.match(/(\d+)/)?.[0] || '1'

          return (
            <button
              key={heading.dataset.id}
              data-id={heading.dataset.id}
              style={{ paddingLeft: +tagLevel * 7 + 'px' }}
              onClick={() => {
                content?.scrollTo({
                  top: heading.getBoundingClientRect().top + content.scrollTop,
                  behavior: 'smooth'
                })
              }}
              className={`flex my-1 py-2 pr-2 text-[0.9rem] rounded-lg cursor-pointer hover:font-bold text-left ${
                currentHeadingID === heading.dataset.id ? 'font-bold' : 'font-light'
              } ${isDark ? 'text-custom-light' : 'text-custom-black'}`}
            >
              {heading.innerHTML}
            </button>
          )
        })}
      </div>
    </div>
  )
}
```
