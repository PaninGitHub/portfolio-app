import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      //PUT YOUR FUCKING PLUGINS HERE DUMBASS
      plugins: [tailwindcss()],
    },
  },
  define: {
  __WS_TOKEN__: JSON.stringify(''),
  }
})