import reactRefresh from '@vitejs/plugin-react-refresh';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import fs from 'fs';

function ignoreUseClientPlugin() {
  return {
    name: 'ignore-use-client',
    transform(code, id) {
      if (id.includes('node_modules/@tanstack/react-query-devtools')) {
        return code.replace(/'use client';?/g, '');
      }
    },
  };
}

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
  plugins: [react(), reactRefresh(), ignoreUseClientPlugin()],
});
