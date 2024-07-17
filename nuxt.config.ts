// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
      title: 'SCU VGDC',
      meta: [
        { name: 'description', content: 'Santa Clara University\'s Video Game Development Club!' },
      ],
      htmlAttrs: {
        lang: 'en',
      },
    },
  },

  css: ['~/assets/styles.css'],

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  modules: [
    '@nuxt/image',
  ]
})