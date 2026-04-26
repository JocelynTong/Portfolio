// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // 静态导出
  ssr: true,

  nitro: {
    prerender: {
      routes: ['/'],
    },
  },
})
