import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // base: '/malaysia-i-genomics/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});