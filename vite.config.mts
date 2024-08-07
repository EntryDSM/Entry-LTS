import reactRefresh from '@vitejs/plugin-react-refresh';
import path from 'path';
import { defineConfig } from 'vite';
import envCompatible from 'vite-plugin-env-compatible';

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
      '@': path.resolve(process.cwd(), './src'),
    },
  },
  build: {
    outDir: 'build',
    chunkSizeWarningLimit: 3500,
    // rollupOptions: {
    //   output: {
    //     manualChunks(id) {
    //       if (id.includes('node_modules')) {
    //         return id.toString().split('node_modules/')[1].split('/')[0].toString();
    //       }
    //     },
    //   },
    // },
  },
  plugins: [reactRefresh(), removeUseClientPlugin(), envCompatible()],
});
