# React Practice

## Target

- Understand & apply knowledge of React/ TypeScript
- Understand and apply React Hooks
- Apply framework CSS to project
- Deploy to the hosting

## Design

[Ref](https://poison.lukeorth.com/)

- Only get ideas from the design of UI structure

## Information

- Time line: 2023/10/31 – 2023/11/27
- Editor: Visual Studio Code
- Supported browser: Chrome, MS Edge latest
- Supported screen: Screen width 608px (tablet), 768px (laptop), 928px (desktop) and 1600px (extraDesktop)

## Requirement

1. Frontend Implementation

The blog website shall be built using React, ensuring a responsive and user-friendly interface.

2. Content Creation

Users shall be able to write each blog post using Markdown syntax (.md file).

3. Content Storage

Write a script to convert all blog posts (.md files) into a JSON file format for easy retrieval and rendering.

4. Post Management

A Context API shall be implemented to manage and share blog posts across the application.

5. Facebook Integration

Facebook SDK shall be integrated to enable users to like, share, and comment on blog posts using their Facebook accounts.

6. Pages

The blog shall have the following pages:

- **"All Posts"**: Displaying a list of all blog posts.
- **"Recent"**: Displaying the most 5 recent blog posts.
- **"About"**: Providing information about the author or the blog itself.

7. Sorting Posts

All blog posts shall be sorted by year and month, enabling users to easily navigate and find content.

8. Table of Contents (TOC)

Each blog post shall include an automatically generated table of contents for long-form articles.

- The TOC shall provide clickable links to different sections or headings within the post.
- The TOC shall be generated based on the headings and subheadings within the blog post content, creating a logical and hierarchical structure.

9. Dark Mode and Light Mode

The website shall provide users with the option to toggle between dark and light modes for improved readability and user experience.

10. Navigation and User Experience

The blog shall include a user-friendly navigation system with a consistent header, footer, and intuitive menu options.

- Users shall have the ability to click on individual blog posts to view their full content.
- Responsive for mobile-first.

11. SEO Optimization (optional)

Implement SEO best practices, including meta tags, headings, and structured data, to enhance the blog's search engine visibility.

12. Deployment and Hosting

Host the blog on a reliable hosting platform, ensuring it is accessible to users.

## Techstack

- [react-markdown](https://www.npmjs.com/package/react-markdown)
- Tailwindcss
- React
- Typescript
- React router

## Team size

- 1 developer: Duc Le

## Develop Environment

- [Visual Studio Code](https://code.visualstudio.com/)
- React & Typescript & Vite
- [Github](https://github.com/LeVHoangduc/react-training/)

## Deployment

- [Blog](https://blogtechnologique.netlify.app/)

## Folder structure

```
├── data/
│   ├── jsons/
│   ├── markdowns/
│   ├── index.js
│   └── markdownToJson.js
├── public/
│   ├── assets/
│   │   ├── icons/
│   │   └── images/
├── src/
│   ├── components/
│   ├── constants/
│   ├── contexts/
│   ├── layouts/
│   ├── pages/
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
|   └── main.tsx
│   └── useRouteElements.tsx
└── .eslintignore
└── .eslintrc.cjs
└── .gitignore
└── .prettierignore
└── .prettierrc
└── index.html
└── package.json
└── README.md
└── tailwind.config.js
└── tsconfig.json
└── tsconfig.node.json
└── vite.config.ts
└── yarn.lock
```

## Getting started

- Step 01: Clone repository with HTTPS:

```bash
git clone https://github.com/LeVHoangduc/react-training/
```

- Step 02: Move to folder which just cloned in your computer:

```bash
cd react-training
```

- Step 03: Change to branch feature/practice:

```bash
git checkout feature/practice
```

- Step 04: Move to the "blog" folder:

```bash
cd blog
```

- Step 05: Install packages

```bash
yarn install
```

- Step 06: Run the application

```bash
yarn run dev
```

## Reference

- Pattern structure applies to styles folder [here](https://gist.github.com/rveitch/84cea9650092119527bc)

- MVC pattern applies to the application [here](https://www.carloscaballero.io/understanding-mvc-for-frontend-typescript/)
