This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install all packages:

```bash
npm install
# or
yarn
# or
pnpm install
# or
bun install
```

Next, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Hosting details

This project was host on Vercel(https://vercel.com) which higly recomended to deploy next js app.

## Styling

For styling there is used Panda CSS(https://panda-css.com/) and component library Material UI(https://mui.com/)

## SEO

Next js provides some syntactic sugar when writing meta tags. In our case site includes:

- title constructor;
- description;
- author;
- creator;
- generator;
- applicationName;
- keywords;
- formatDetection.

## Performance strategies

For media player optimization is used react-player package, it loads a little bit fatster then a single iframe tag.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize Google Fonts.

## Assumptions made

Also project has a good scalability because of folders structure, so you can easily make this app larger without any proplems.
It includes "shared" folder that contains: components, constants and services directories. Each directory has some files and "index.ts" file that inside exports that files, so your imports look like:

```bash
import { CardWrapper, Intro, Less } from "@/shared/components"
```

instead of

```bash
import { CardWrapper} from "@/shared/components/CardWrapper"
import { Intro} from "@/shared/components/Intro"
import { Less} from "@/shared/components/Less"
```

All files are named in kebab case, global constants are in snake and upper cases, components are in pascal case, variables and simple functions are in camel case.

Also Next js provides favicon integrations, app includes custom favicon in site color palette.
