import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/trpc': 'http://localhost:5000/'
    }
  },
  build: {outDir: 'dist/client'},
  plugins: [svelte()],
})
