import reactRefresh from '@vitejs/plugin-react-refresh';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

function removeUseClientPlugin() {
  return {
    name: 'remove-use-client',
    transform(code, id) {
      if (id.includes('@tanstack/react-query') || id.includes('@tanstack/react-query-devtools')) {
        return {
          code: code.replace(/^['"]use client['"];?\s*$/m, ''),
          map: null,
        };
      }
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: ['@tanstack/react-query', '@tanstack/react-query-devtools'],
  },
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' },
  },
  server: {
    port: 3002,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'build',
  },
  plugins: [react(), reactRefresh(), removeUseClientPlugin()],
});
