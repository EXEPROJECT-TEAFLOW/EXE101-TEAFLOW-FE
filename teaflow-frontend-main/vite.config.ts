import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],

  base: "/", // 🔥 BẮT BUỘC CHO VERCEL

  build: {
    outDir: "dist", // 🔥 ĐẢM BẢO OUTPUT
  },

  server: {
    host: "0.0.0.0",
    port: 5173,
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
