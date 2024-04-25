import { defineConfig } from "vite";
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: "./Portfolio_OS_website/", 
    esbuild: {
        loader: 'jsx',
      },
      resolve: {
        alias: {
          './runtimeConfig': './runtimeConfig.browser',
        },
      },
      optimizeDeps: {
        esbuildOptions: {
          loader: {
            '.js': 'jsx',
          },
        },
      },
})