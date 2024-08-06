import reactRefresh from '@vitejs/plugin-react-refresh';
import path from 'path';
import { defineConfig } from 'vite';
import fs from 'fs';

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    supported: {
      'top-level-await': true,
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: 'globalThis',
      },
      plugins: [
        {
          name: 'ignore-use-client-directive',
          setup(build) {
            build.onLoad({ filter: /.*/ }, async (args) => {
              if (args.path.includes('node_modules/@tanstack/react-query-devtools')) {
                return {
                  contents: (await fs.promises.readFile(args.path, 'utf8')).replace(/'use client';?/g, ''),
                };
              }
            });
          },
        },
      ],
    },
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
  plugins: [reactRefresh()],
});
