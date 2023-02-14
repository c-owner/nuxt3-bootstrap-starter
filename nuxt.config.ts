import eslintPlugin from 'vite-plugin-eslint';

export default defineNuxtConfig({
    vite: {
        plugins: [eslintPlugin()],
    },
    modules: [],

    css: [],
    plugins: [],
    app: {
        head: {
            title: 'Corner - Nuxt3 Template',
            htmlAttrs: {
                lang: 'ko'
            },
            meta: [
                {charset: 'utf-8'},
                {name: 'viewport', content: 'width=device-width, initial-scale=1'},
                {hid: 'description', name: 'description', content: 'Corner Nuxt3 Template Typescript and prettier'},
                {name: 'format-detection', content: 'telephone=no'},
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=0.7, maximum-scale=0.7, user-scalable=no, min-scale='
                },
                {name: 'description', content: 'Corner Nuxt3 Template Typescript and prettier'},
                {name: 'author', content: 'corner'},
                {property: 'og:image:width', content: '1024'},
                {property: 'og:image:height', content: '768'},
                {property: 'og:image:alt', content: 'corner image'},
                {
                    property: 'og:image',
                    content: 'https://github.com/c-owner/c-owner.site/blob/master/public/img/logo_clear_fsj.png?raw=true'
                },
                {property: 'og:title', content: 'LIVE24'},
                {property: 'og:url', content: 'https://github.com/c-owner'},
                {property: 'og:description', content: 'Corner Github'}
            ],
            link: [],
            script: []
        },
    },
});

