import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import imports from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), imports({
    imports: ['vue'],
    dts: 'src/auto-imports.d.ts'
  })],
})
