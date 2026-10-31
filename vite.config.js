import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from '@svgr/rollup';

export default defineConfig({
  plugins: [react(), svgr()],
  base: '/curso-react-intro/',
  build: {
    outDir: 'dist',
  },
  server: {
    port: 3000,
    open: true,
  },
});