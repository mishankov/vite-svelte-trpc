[![CI](https://github.com/mishankov/vite-svelte-trpc/actions/workflows/ci.yml/badge.svg)](https://github.com/mishankov/vite-svelte-trpc/actions/workflows/ci.yml)
[![MadeWithSvelte.com shield](https://madewithsvelte.com/storage/repo-shields/4184-shield.svg)](https://madewithsvelte.com/p/vite-svelte-trpc-template/shield-link)

# Vite + Svelte + tRPC

This template should help get you started developing with Vite, Svelte and tRPC combo

## Features

- HMR for client code with Vite and automatic build and restart for server with tcx on file changes
- Vitest for unit tests
- Playwright for E2E tests
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

### Testing

Unit test are living in `tests` directory. To execute them, run: 

```bash
npm run test
```

E2E UI tests are livind in `e2e` directory. To execute them, run: 

```bash
npm run e2e
```

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
