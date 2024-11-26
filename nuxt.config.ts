export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt'],
  app: {
    head: {
        bodyAttrs: {
            style: 'background-color: #030712;'
        },
    }
  }
})
