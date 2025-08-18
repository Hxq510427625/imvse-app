import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/imvse-app/',
  plugins: [react()],
  server: {   
    open: "/home"            
  }
})
