import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-plugin-tsconfig-paths'

export default defineConfig({
    base: '/repo-search',
    plugins: [react(), tsconfigPaths()],
})
