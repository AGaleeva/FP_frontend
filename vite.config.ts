import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'assets': path.resolve(__dirname, 'src/assets'),
      'components': path.resolve(__dirname, 'src/components'),
      'homeworks': path.resolve(__dirname, 'src/homeworks'),
      'store': path.resolve(__dirname, 'src/store'),
      'styles': path.resolve(__dirname, 'src/styles'),
      'fonts': path.resolve(__dirname, 'src/fonts'),
      'lessons': path.resolve(__dirname, 'src/lessons'),
      'pages': path.resolve(__dirname, 'src/pages')
    },
  },
  server: {
    open: true,
    proxy: {
      "/api": {
        target: "http://localhost:8080",
      },
    },
  },  
  build: {
    outDir: "build",
    sourcemap: true,
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "src/setupTests",
    mockReset: true,
  },
})

