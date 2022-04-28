import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
const { resolve } = require('path');

export default defineConfig({
    base: './',
    plugins: [vue()],
    server: {
        host: '0.0.0.0',
        port: 8080,
        proxy: {
            '/api': 'http://localhost:3000',
        },
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
        },
    },
});
