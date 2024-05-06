import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { RES_CARD_API } from './src/utils/constants'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {RES_CARD_API}

    }
  },
  plugins: [react()],
})
