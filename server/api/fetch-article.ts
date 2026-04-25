// 公众号文章抓取 API
// 使用 RSSHub 作为代理服务获取微信公众号内容

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const url = query.url as string

  if (!url) {
    throw createError({ statusCode: 400, message: '缺少 url 参数' })
  }

  // 从微信文章 URL 中提取公众号 ID 和 biz 参数
  // 格式: https://mp.weixin.qq.com/s/xxxxxx 或带 biz 参数
  const bizMatch = url.match(/biz=([^&]+)/)
  const midMatch = url.match(/mid=([^&]+)/)

  if (!bizMatch && !midMatch) {
    throw createError({ statusCode: 400, message: '无效的微信文章链接' })
  }

  const biz = bizMatch?.[1]
  const mid = midMatch?.[1]

  try {
    // 使用 RSSHub 抓取
    // RSSHub 格式: https://rsshub.app/wechat/mp/:biz 或 /wechat/mp/:mid
    let rssUrl = biz
      ? `https://rsshub.app/wechat/mp/${biz}`
      : `https://rsshub.app/wechat/mp/${mid}`

    // 添加 cache buster 避免缓存
    rssUrl += `?t=${Date.now()}`

    const response = await $fetch(rssUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
      },
      parseResponse: (txt) => {
        // 尝试解析 RSS XML
        try {
          const titleMatch = txt.match(/<title><!\[CDATA\[([^\]]+)\]\]><\/title>/)
          const descMatch = txt.match(/<description><!\[CDATA\[([^\]]+)\]\]><\/description>/)
          const pubMatch = txt.match(/<pubDate>([^<]+)<\/pubDate>/)

          return {
            title: titleMatch?.[1] || '公众号文章',
            content: descMatch?.[1] || '',
            date: pubMatch?.[1] || new Date().toISOString(),
          }
        } catch {
          return { title: '公众号文章', content: txt.slice(0, 500), date: new Date().toISOString() }
        }
      }
    })

    return {
      type: 'article',
      title: response.title,
      date: response.date,
      content: response.content,
    }
  } catch (error) {
    // 如果 RSSHub 不可用，返回提示信息
    return {
      type: 'article',
      title: '公众号文章',
      date: new Date().toLocaleDateString('zh-CN'),
      content: `
        <p>无法直接获取文章内容（微信公众号有防爬限制）。</p>
        <p>建议解决方案：</p>
        <ol>
          <li>在公众号后台复制文章内容，粘贴为 Markdown</li>
          <li>或访问 RSSHub 部署实例获取</li>
        </ol>
        <p><a href="${url}" target="_blank">👉 点击这里打开原文</a></p>
      `
    }
  }
})