// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // GitHub Pages 静态导出
  ssr: true,

  // 路由基础路径（GitHub Pages 需要）
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/Portfolio/' : '/',
  },
})
