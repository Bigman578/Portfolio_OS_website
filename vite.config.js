import { defineConfig } from "vite";
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    base: "/Portfolio_OS_website/", 
    resolve: {
        extensions: [
            '.js',
            '.json',
            '.jsx'
        ],
    },
})