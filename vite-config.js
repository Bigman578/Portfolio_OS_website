import { defineConfig } from "vite";
import react from '@vitejs/plugin-react'

export default defineConfig({
    base: '/Operator-System',
    plugins: [react()],
})