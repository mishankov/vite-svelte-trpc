# Vite + Svelte + tRPC

This template should help get you started developing with Vite, Svelte and tRPC combo

## How to work with this template?

### Fork and clone this repo

Run `npm i` to install dependencies

### Start server and client

```bash
npm run dev:client
npm run dev:server # in separate terminal
```

For HMR support use link from `dev:client` command

### Create and rin production build

```bash
npm run build
npm run start
```

## Important points of file structure

- `dist` - client and server build directory
- `src`
  - `lib`
    - `trpc.ts` - tRPC client setup to use in browser code
  - `server`
    - `index.ts` - setup for ExpressJS server which combines static files serving and tRPC server
    - `trpc.ts` - setup for tRPC server
    - `test_data.ts` - test data to showcase basic capabilities of this setup

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Svelte](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode).




