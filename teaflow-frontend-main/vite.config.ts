import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  // Default to root (/) for deploys on platforms like Vercel.
  // You can still override this by setting VITE_BASE_PATH in the environment
  // (for example, when deploying to a sub-path).
  base: process.env.VITE_BASE_PATH || "/",
  build: {
    outDir: "dist",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
