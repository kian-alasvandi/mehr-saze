import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'
import viteConfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  base: './',
  build: {
    reportCompressedSize: false,
    commonjsOptions: { transformMixedEsModules: true },
  },
  plugins: [
    viteConfigPaths(),
    react(),
    process.env.INLINE ? viteSingleFile() : null,
  ].filter(Boolean),
})
