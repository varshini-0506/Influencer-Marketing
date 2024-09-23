import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Project/', // Replace 'your-repo-name' with your GitHub repository name
  plugins: [react()],
})
