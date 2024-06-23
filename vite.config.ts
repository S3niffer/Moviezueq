import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            "/auth": {
                target: "https://moviesapi.ir",
                changeOrigin: true,
                rewrite: path => path.replace(/^\/auth/, ""),
            },
        },
    },
})
