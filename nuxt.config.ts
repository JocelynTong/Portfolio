// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // GitHub Pages 静态导出到 docs 目录
  ssr: true,

  nitro: {
    prerender: {
      routes: ['/'],
    },
  },
})
