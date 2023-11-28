---
title: How to use react-markdown with React and Typescript
author: Duc Le
date: 2024-11-10
tags: React, react-markdown
---
​

## What is this?

This package is a React component that can be given a string of markdown that it'll safely render to React elements. You can pass plugins to change how markdown is transformed and pass components that will be used instead of normal HTML elements.

To learn markdown, see this [cheatsheet and tutorial](<cheatsheet_and_tutorial_link>).

To try out `react-markdown`, see our [demo](<demo_link>).

## When should I use this?

There are other ways to use markdown in React out there, so why use this one? The three main reasons are that they often rely on `dangerouslySetInnerHTML`, have bugs with how they handle markdown, or don't let you swap elements for components. `react-markdown` builds a virtual DOM, so React only replaces what changed, from a syntax tree. That’s supported because we use unified, specifically remark for markdown and rehype for HTML, which are popular tools to transform content with plugins.

This package focuses on making it easy for beginners to safely use markdown in React. When you're familiar with unified, you can use a modern hooks-based alternative `react-remark` or `rehype-react` manually. If you instead want to use JavaScript and JSX inside markdown files, use MDX.

## Install

This package is ESM only. In Node.js (version 16+), install with npm:

```bash
npm install react-markdown
```

In Deno with esm.sh:

```javascript
import Markdown from 'https://esm.sh/react-markdown@9'
```

In browsers with esm.sh:

```javascript
<script type="module">
  import Markdown from 'https://esm.sh/react-markdown@9?bundle'
</script>
```

## Use

A basic hello world:

```javascript
import React from 'react'
import {createRoot} from 'react-dom/client'
import Markdown from 'react-markdown'

const markdown = '# Hi, *Pluto*!'

createRoot(document.body).render(<Markdown>{markdown}</Markdown>)
```

### Some problems with Typescript

When you're using react-markdown and have a CodeBlock component. The error is indicating that your components object is not matching the expected type for react-markdown components.

The components prop in react-markdown expects an object where keys are the names of the components to override, and values are the React components you want to use for those elements.

In your case, it seems like you're trying to override the default code component. However, the react-markdown type definitions expect a function that returns a JSX element for each component.

```javascript
const components = {
  code: ({ node, inline, className, children, ...props }: any) => {
    // Use your CodeBlock component here
    return <CodeBlock {...props}>{children}</CodeBlock>;
  },
};
```
