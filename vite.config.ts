import { fileURLToPath, URL } from "url"
import vue from "@vitejs/plugin-vue"
import { defineConfig, type UserConfigExport } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
    test: {
        globals: true,
        environment: "happy-dom",
    },
} as UserConfigExport)
