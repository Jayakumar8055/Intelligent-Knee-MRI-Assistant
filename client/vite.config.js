import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: '0.0.0.0', 
    proxy: {
      '/api': {
        target: 'http://lt-server:5000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})

// server: {
//   proxy: {
//     "/api": {
//       target: "http://localhost:8000",
//       secure: false,
//     },
//   },
// },
// plugins: [react()],
