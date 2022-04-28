export default {
    //target: 'static',

    /*
   ** Set ssr to false to see the loading indicator - https://nuxtjs.org/docs/2.x/features/rendering-modes
   */
    ssr: true,

    /*
   ** Global CSS - https://nuxtjs.org/docs/2.x/features/configuration#pre-processors
   */
    css: ['~/assets/main.scss', '~/assets/main.css'],

    /*
     ** Global style resources - https://www.npmjs.com/package/@nuxtjs/style-resources
     */
    styleResources: {
        scss: ['~/assets/variables.scss']
    },

    /*
    ** Activate components - https://nuxtjs.org/docs/2.x/directory-structure/components#components-module
    */
    components: true,

    /*
   ** Head Property - https://nuxtjs.org/docs/2.x/features/meta-tags-seo
   */
    head: {
        title: 'Nuxt',
        titleTemplate: 'Test | %s',
        htmlAttrs: {
            lang: 'en',
            amp: true
        },
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content:
                    'The amazing Nuxt application that teaches me all the cool features of Nuxt'
            },


            // Twitter
            // Test on: https://cards-dev.twitter.com/validator
            {
                hid: 'twitter:card',
                name: 'twitter:card',
                content: 'summary_large_image'
            },
            { hid: 'twitter:site', name: 'twitter:site', content: '@nuxt_js' },
            {
                hid: 'twitter:url',
                name: 'twitter:url',
                content: 'https://nuxtjs.org'
            },
            {
                hid: 'twitter:title',
                name: 'twitter:title',
                content: 'My amazing Nuxt application'
            },
            {
                hid: 'twitter:description',
                name: 'twitter:description',
                content:
                    'The amazing Nuxt application that teaches me all the cool features of Nuxt'
            },
            {
                hid: 'twitter:image',
                name: 'twitter:image',
                content: 'https://nuxtjs.org/nuxt-card.png'
            },

            // Open Graph
            // Test on: https://developers.facebook.com/tools/debug/
            { hid: 'og:site_name', property: 'og:site_name', content: 'Nuxt' },
            { hid: 'og:type', property: 'og:type', content: 'website' },
            {
                hid: 'og:url',
                property: 'og:url',
                content: 'https://nuxtjs.org'
            },
            {
                hid: 'og:title',
                property: 'og:title',
                content: 'My amazing Nuxt application'
            },
            {
                hid: 'og:description',
                property: 'og:description',
                content:
                    'The amazing Nuxt application that teaches me all the cool features of Nuxt'
            },
            {
                hid: 'og:image',
                property: 'og:image',
                content: 'https://nuxtjs.org/nuxt-card.png'
            },
            {
                hid: 'og:image:secure_url',
                property: 'og:image:secure_url',
                content: 'https://nuxtjs.org/nuxt-card.png'
            },
            {
                hid: 'og:image:alt',
                property: 'og:image:alt',
                content: 'NuxtJS'
            }


        ],
        link: [
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css?family=Nunito&display=swap'
            },
            // canonical
            {
                hid: 'canonical',
                rel: 'canonical',
                href: `https://nuxtjs.org/examples`
            }
        ],
        script: [
            {
                src: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.js',
                async: true,
                defer: true
            }
        ]
    },

    /*
     ** modifying the loading indicator for spa  - https://nuxtjs.org/docs/2.x/features/loading
     */
    //loadingIndicator: {
    //    name: 'chasing-dots',
    //    color: 'purple',
    //    background: 'green'
    //},

    /*
   ** importing a custom loader. this will overwrite the default loader
   */
    loading: '~/components/LoadingBar.vue',

    /*
   ** Router property -  https://nuxtjs.org/docs/2.x/features/file-system-routing#the-router-property
   */
    router: {
        middleware: ['class']
    },

    /*
    ** Modules - https://nuxtjs.org/docs/2.x/directory-structure/modules
    */
    modules: ['@nuxt/http', '@nuxtjs/style-resources', '@nuxtjs/axios'],

    /*
    ** Plugins - https://nuxtjs.org/docs/2.x/directory-structure/plugins
    */
    plugins: [
        'plugins/nuxt-ready.client.js',
        { src: '~/plugins/client-only.client.js' },
        '~/plugins/hello.js',
        '~/plugins/nuxt-api.js',
        '~/plugins/axios.js'
    ],

    /*
    ** Runtime Config
    */
    publicRuntimeConfig: {
        axios: {
            baseURL: 'https://api.nuxtjs.dev'
        }
    },
}