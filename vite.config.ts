import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mkcert from "vite-plugin-mkcert"

// https://vitejs.dev/config/ 
export default defineConfig({
  server: {
    host: true,
    //https: true,
    // https: {
    //   cert: './ssl/catlcert.pem',
    //   key: './ssl/catlkey.key',
    // },
    proxy: { '/api': {
      target: 'https://catlapi.onrender.com'
    }}
  },
  plugins: [react()]
})
