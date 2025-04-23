import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/malaysia-i-genomics/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
