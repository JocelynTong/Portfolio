# Portfolio · AI 使用说明

本文件供 AI 自动读取。作品集使用 Nuxt 4 + Vue 3 构建。

## 技术栈
- Nuxt 4（ssr + server routes）
- Vue 3 Composition API
- Nuxt Content（Markdown 博客）
- 部署：GitHub Pages + Vercel（server routes 走 Vercel serverless）

## 目录结构
```
app/
├── pages/
│   ├── index.vue          # 首页（Hero + 简介）
│   ├── blog/
│   │   ├── index.vue      # 博客列表
│   │   └── [slug].vue     # 博客详情
│   └── links/
│       └── index.vue      # 外链内容展示（公众号/小红书）
├── components/
│   └── HeroHeader.vue     # 动态 header（照片 + 简介）
└── layouts/
    └── default.vue

content/
├── blog/                  # Markdown 博客
└── links/                 # 外链元数据

server/
└── api/
    ├── fetch-article.ts   # 公众号文章抓取
    └── fetch-note.ts      # 小红书笔记抓取

public/
└── avatar.jpg             # 头像
```

## 个人信息
- 姓名：童佩佩
- 年限：11年
- 方向：产品设计
- Tagline：一切热爱，来自通用解决方案的驱动力

## 开发命令
- `pnpm dev` — 本地开发
- `pnpm generate` — 静态导出
- `pnpm build` — 生产构建