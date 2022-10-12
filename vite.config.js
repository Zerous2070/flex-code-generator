import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from '@nabla/vite-plugin-eslint';

export default defineConfig(() => ({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html')
            }
        }
    },
    server: {
        host: '127.0.0.1',
        port: 5211
    },
    resolve: {
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
        alias: {
            '@': resolve(__dirname, 'src'),
            '@images': resolve(__dirname, 'src/assets/images')
        }
    },
    plugins: [
        eslintPlugin({
            eslintOptions: {
                cache: false
            }
        }),
        vue()
    ]
}));
