import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import process from 'process';

// https://vitejs.dev/config/
export default defineConfig({
  // base: "/CPGRAMS-Project/",
  base: process.env.NODE_ENV === 'production' ? '/CPGRAMS-Project/' : '/',
  plugins: [react()],
})
