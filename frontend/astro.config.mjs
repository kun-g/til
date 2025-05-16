// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import os from 'os';
import dotenv from 'dotenv';

// 加载.env文件
dotenv.config();
console.log('Env', process.env.TIL_DIR)

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': new URL('./src', import.meta.url).pathname
      }
    },
    define: {
      'import.meta.env.TIL_DIR': JSON.stringify(process.env.TIL_DIR)
    }
  },

  integrations: [react()]
});