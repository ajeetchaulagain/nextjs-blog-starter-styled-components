![Vercel](https://therealsujitk-vercel-badge.vercel.app/?app=nextjs-blog-styled)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/ajeetchaulagain/nextjs-blog-starter-styled-components/issues)

# Next.js Blog Starter Kit with styled-components

This is a Blog starter kit built using [Next.js ](https://nextjs.org/) 14 (with [app router](https://nextjs.org/docs/app)), [styled-components](https://styled-components.com/) and typescript.

**Live Demo:** https://nextjs-blog-styled.vercel.app/

## Features

- [styled-components](https://styled-components.com/) configuration with server-side rendering
- Data sourcing for a blog post through Markdown files
- Styling through Reusable components
- Typescript and Eslint configuration
- Uses Next.js latest [App Router](https://nextjs.org/docs/app) paradigm

## How to use

> [!IMPORTANT]
> This application requires **Node.js v18.17+.**

### Installation & running project

Execute [create-next-app](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with npm or yarn to bootstrap this template or clone this repo:

```bash
npx create-next-app --example https://github.com/ajeetchaulagain/nextjs-blog-starter-styled-components my-blog
```

OR

```bash
git clone https://github.com/ajeetchaulagain/nextjs-blog-starter-styled-components.git my-blog
```

Install `node_modules` and run dev server:

```bash
cd my-blog
npm install
npm run dev
```

Your dev server should be up and running at [http://localhost:3000](http://localhost:3000)

### Usage Guide/Note

- To add a blog post, add the new markdown file in `/posts` directory

  > **Note**: To create a blog post [remark](https://github.com/remarkjs/remark) and [remark-html](https://github.com/remarkjs/remark-html) is used to convert the markdown files into HTML string, which is then passed to page as the props. And for the metadata, [gray-matter](https://github.com/jonschlinkert/gray-matter) is used.

- For styling markdown post, base styles are setup in `styles/MarkdownStyles.tsx`. For styling other pages, a minimal set of re-usable components created in this project are used.

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
