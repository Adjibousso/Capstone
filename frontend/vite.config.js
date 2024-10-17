import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    chunkSizeWarningLimit: 1600, 
  },
  plugins: [react()],
  server:{
    proxy:{
      '/api':{
        target:'http://localhost:3000',
        secure:false, 
      },
    },
  },
});
