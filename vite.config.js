import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  // base: "/CPGRAMS-Project/",
  base: process.env.VERCEL_ENV ? '/' : '/CPGRAMS-Project/',
  plugins: [react()],
})
