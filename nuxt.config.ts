// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ['@nuxtjs/tailwindcss', '@nuxt/eslint', '@nuxtjs/fontaine'],
    plugins: ['~/plugins/preline.client.ts'],
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            htmlAttrs: {
                lang: 'th',
            },
            meta: [
                { name: 'msapplication-TileColor', content: '#da532c' },
                { name: 'theme-color', content: '#3c0412' },
            ],
            link: [
                { rel: 'icon', type: 'image/png', href: '/favicon.ico' },
                {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: '16x16',
                    href: '/favicon-16x16.png',
                },
                {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: '32x32',
                    href: '/favicon-32x32.png',
                },
                {
                    rel: 'apple-touch-icon',
                    type: 'image/png',
                    sizes: '180x180',
                    href: '/apple-touch-icon.png',
                },
                { rel: 'manifest', href: '/site.webmanifest' },
                {
                    rel: 'mask-icon',
                    color: '#5bbad5',
                    href: '/safari-pinned-tab.svg',
                },
            ],
        },
    },
    runtimeConfig: {
        public: {
            apiBaseUrl: 'http://learnlab-asg-lb-2050546808.us-east-1.elb.amazonaws.com',
          }
    },
      fontMetrics: {
        fonts: [{ family: 'Bai Jamjuree' }, { family: 'Noto Sans Thai' }],
    },
    // nitro: {
    //     routeRules: {
    //         '/api/**': {
    //             proxy: process.env.BACKEND_URL
    //                 ? `http://${process.env.BACKEND_URL}/api/**`
    //                 : 'http://localhost:8000/api/**',
    //         }, // For dev
    //     },
    // },
    experimental: {
        payloadExtraction: false
    },
    routeRules: {
        '/': { prerender: true },
        '/**': { ssr: false },
    },
    compatibilityDate: '2024-09-28',
})
