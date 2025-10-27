// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(),
//     tailwindcss()
//   ],
// })



import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true // Mobile mein access karne ke liye
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      // Agar koi external dependencies hain
    }
  },
  // Important for SPA routing
  base: './',
})