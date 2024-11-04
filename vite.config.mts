import { defineConfig } from "vite";

export default defineConfig({
  appType: "mpa",
  plugins: [],
  server: {
    open: true,
  },
  build: {
    assetsInlineLimit: 0,
    target: "esnext",
    emptyOutDir: true,
  },
  optimizeDeps: {
    exclude: ["lit-html"],
  },
});
