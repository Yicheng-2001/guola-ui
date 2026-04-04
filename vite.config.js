import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://api.guolaya.com",
        changeOrigin: true,
        secure: false,
        ws: false,
        timeout: 60000,
        proxyTimeout: 60000,
      },
      "/v1": {
        target: "http://api.guolaya.com",
        changeOrigin: true,
        secure: false,
        ws: false,
        timeout: 60000,
        proxyTimeout: 60000,
        rewrite: (path) => `/api${path}`,
      },
      "/oss-proxy": {
        target: "http://guolaya.oss-ap-southeast-1.aliyuncs.com",
        changeOrigin: true,
        secure: false,
        ws: false,
        timeout: 60000,
        proxyTimeout: 60000,
        rewrite: (path) => path.replace(/^\/oss-proxy/, ""),
      },
    },
  },
});
