import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslintPlugin from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslintPlugin({
      cache: false,
      include: ["./src/**/*.ts", "./src/**/*.tsx"],
      exclude: [],
    }),
  ],
  server: {
    host: true,
    open: process.env.IS_DOCKER ? false : true,
    port: 3000,
  },
});
