import { defineConfig, loadEnv } from 'vite'
import { resolve } from 'path'
import createReactRefreshPlugin from '@vitejs/plugin-react-refresh'

const baseConfig = defineConfig({
  plugins: [
    createReactRefreshPlugin(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
})

export default (mode) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }
  return defineConfig({
    ...baseConfig,
    base: '/',
    server: {
      proxy: {
        '/pricing': {
          target: process.env.VITE_URL,
          changeOrigin: true,
        },
      },
    },
  })
}
