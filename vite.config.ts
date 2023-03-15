import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path, {resolve} from 'path';
import { fileURLToPath, URL } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL("./src", import.meta.url)),
      '@c': path.resolve(__dirname, './src/components'),
      '@i': path.resolve(__dirname, './src/interfaces'),
      '@l': path.resolve(__dirname, './src/layouts'),
      '@p': path.resolve(__dirname, './src/pages'),
      '@r': path.resolve(__dirname, './src/router'),
      '@s': path.resolve(__dirname, './src/stores'),
    },
  },
})
