import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue';
import graphql from '@rollup/plugin-graphql';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue({
        template: {
            compilerOptions: {
                // treat all tags with a dash as custom elements
                isCustomElement: (tag) => tag.includes('-')
            }
        }
    }), graphql()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    build: {
        outDir: "../app/templates/frontend/static/frontend/src/jvf/dist/",
        manifest: true,
        emptyOutDir: true,
        lib: {
            entry: './src/components/web-comp.js',
            formats: ['es', 'cjs'],
            name: "vue-web-comp",
            fileName: format => (format === "es" ? "index.js" : "index.cjs.js")
        },
        sourcemap: true,
        target: 'esnext',
        minify: false
    },
    define: {
        'process.env': {}
    }
})
