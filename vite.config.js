import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    assetsDir: '', // Assets na raiz do dist
    rollupOptions: {
      input: path.resolve(__dirname, 'index.html'), // Garante que index.html é a entrada
    },
  },
  publicDir: 'public',
  base: './',
});