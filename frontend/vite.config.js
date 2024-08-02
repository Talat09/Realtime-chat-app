import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "https://chat-with-d.vercel.app",
      },
    },
  },
  build: {
    outDir: "dist", // This is the default, so you can omit this if it's already set to 'dist'
  },
});
