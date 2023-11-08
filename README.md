This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

```
amazonaff,
├─ .env.local,
├─ .eslintrc.json,
├─ .git,
│  ├─ COMMIT_EDITMSG,
│  ├─ config,
│  ├─ description,
│  ├─ FETCH_HEAD,
│  ├─ HEAD,
│  ├─ hooks,
│  │  ├─ applypatch-msg.sample,
│  │  ├─ commit-msg.sample,
│  │  ├─ fsmonitor-watchman.sample,
│  │  ├─ post-update.sample,
│  │  ├─ pre-applypatch.sample,
│  │  ├─ pre-commit.sample,
│  │  ├─ pre-merge-commit.sample,
│  │  ├─ pre-push.sample,
│  │  ├─ pre-rebase.sample,
│  │  ├─ pre-receive.sample,
│  │  ├─ prepare-commit-msg.sample,
│  │  ├─ push-to-checkout.sample,
│  │  ├─ sendemail-validate.sample,
│  │  └─ update.sample,
│  ├─ index,
│  ├─ info,
│  │  └─ exclude,
│  ├─ logs,
│  │  ├─ HEAD,
│  │  └─ refs,
│  │     ├─ heads,
│  │     │  └─ master,
│  │     └─ remotes,
│  │        └─ origin,
│  │           ├─ HEAD,
│  │           └─ master,
│  ├─ objects,
│  │  ├─ 4c,
│  │  │  └─ 1c2bcb00cfaaeb63ef6689ca9bdb1b85543e03,
│  │  ├─ 75,
│  │  │  └─ 8fe8c8b5b881994a8b363a2188c8ffbcf7a950,
│  │  ├─ d6,
│  │  │  ├─ 0e7c68bc14d941478cf3787ea4704cc73395ce,
│  │  │  └─ addef97fa2151c55b275e438a84a5e78f1d495,
│  │  ├─ info,
│  │  └─ pack,
│  │     ├─ pack-6cc9876a66aab18f52267647b3929cb975dcd8e3.idx,
│  │     ├─ pack-6cc9876a66aab18f52267647b3929cb975dcd8e3.pack,
│  │     └─ pack-6cc9876a66aab18f52267647b3929cb975dcd8e3.rev,
│  ├─ ORIG_HEAD,
│  ├─ packed-refs,
│  └─ refs,
│     ├─ heads,
│     │  └─ master,
│     ├─ remotes,
│     │  └─ origin,
│     │     ├─ HEAD,
│     │     └─ master,
│     └─ tags,
├─ .gitignore,
├─ next.config.js,
├─ package-lock.json,
├─ package.json,
├─ postcss.config.js,
├─ public,
│  ├─ favicon.ico,
│  ├─ next.svg,
│  └─ vercel.svg,
├─ README.md,
├─ src,
│  ├─ components,
│  │  ├─ Banner.tsx,
│  │  ├─ CartPayment.tsx,
│  │  ├─ CartProduct.tsx,
│  │  ├─ FavoriteProduct.tsx,
│  │  ├─ Footer.tsx,
│  │  ├─ FormattedPrice.tsx,
│  │  ├─ header,
│  │  │  ├─ BottomHeader.tsx,
│  │  │  └─ Header.tsx,
│  │  ├─ Products.tsx,
│  │  ├─ ResetCart.tsx,
│  │  ├─ ResetFavoriteItems.tsx,
│  │  ├─ RootLayout.tsx,
│  │  └─ SearchProducts.tsx,
│  ├─ images,
│  │  ├─ cartIcon.png,
│  │  ├─ logo.png,
│  │  └─ slider,
│  │     ├─ sliderImg_1.jpg,
│  │     ├─ sliderImg_2.jpg,
│  │     ├─ sliderImg_3.jpg,
│  │     └─ sliderImg_4.jpg,
│  ├─ pages,
│  │  ├─ api,
│  │  │  ├─ auth,
│  │  │  │  └─ [...nextauth].ts,
│  │  │  ├─ checkout.ts,
│  │  │  └─ hello.ts,
│  │  ├─ cart.tsx,
│  │  ├─ favorite.tsx,
│  │  ├─ index.tsx,
│  │  ├─ success.tsx,
│  │  ├─ [_id].tsx,
│  │  ├─ _app.tsx,
│  │  └─ _document.tsx,
│  ├─ store,
│  │  ├─ nextSlice.ts,
│  │  └─ store.ts,
│  └─ styles,
│     └─ globals.css,
├─ tailwind.config.js,
├─ tsconfig.json,
└─ type.d.ts,

```