import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Forçando o reinício do Vite para que ele leia o Tailwind CSS
export default defineConfig({
  plugins: [react()],
})
