[![CI](https://github.com/mishankov/vite-svelte-trpc/actions/workflows/ci.yml/badge.svg)](https://github.com/mishankov/vite-svelte-trpc/actions/workflows/ci.yml)

# Vite + Svelte + tRPC

This template should help get you started developing with Vite, Svelte and tRPC combo

## Features

- HMR for client code with Vite and automatic build and restart for server with tcx on file changes
- Playwright setup for E2E tests
- GitHub Actions workflow with build, lint and test steps
- Dependabot setup to keep dependencies updated
- Express server to serve SPA and handle tRPC API calls

## How to work with this template?

### Create repo from this template with "Use this template" button above and clone it

Run `npm i` to install dependencies

### Start server and client

```bash
npm run dev
```

For HMR support use http://localhost:5173/ link by default. tRPC endpoint is http://localhost:5000/

You can also start client and server separately. Use `npm run dev:server` to start server and `npm run dev:client` to start client

### Create and run production build

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
