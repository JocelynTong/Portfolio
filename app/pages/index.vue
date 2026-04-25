<script setup lang="ts">
// 首页：使用 HeroHeader 展示头像 + 简介
</script>

<template>
  <div class="home">
    <HeroHeader />

    <!-- 作品列表 -->
    <section class="works-section">
      <h2 class="section-title">精选作品</h2>
      <div class="works-grid">
        <NuxtLink to="/blog" class="work-card">
          <div class="work-icon">📝</div>
          <h3>博客文章</h3>
          <p>产品设计思考与技术实践</p>
        </NuxtLink>
        <NuxtLink to="/links" class="work-card">
          <div class="work-icon">🔗</div>
          <h3>外链内容</h3>
          <p>公众号 · 小红书笔记</p>
        </NuxtLink>
      </div>
    </section>

    <!-- 关于 -->
    <section class="about-section">
      <h2 class="section-title">关于我</h2>
      <p class="about-text">
        11年产品设计经验，专注通用解决方案。<br />
        热爱从复杂需求中提炼本质，用设计驱动业务增长。
      </p>
      <div class="contact-row">
        <a href="mailto:your@email.com" class="contact-link">📧 联系我</a>
        <a href="https://github.com/yourgithub" target="_blank" class="contact-link">🐙 GitHub</a>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  gap: var(--sp-2xl, 48px);
}

.section-title {
  font-size: 20px;
  font-weight: 600;
  color: var(--text-1, #000);
  margin-bottom: var(--sp-lg, 24px);
}

/* 作品卡片 */
.works-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--sp-lg, 24px);
}

.work-card {
  display: flex;
  flex-direction: column;
  gap: var(--sp-sm, 8px);
  padding: var(--sp-lg, 24px);
  background: var(--bg-2, #f5f5fa);
  border-radius: var(--r-md, 12px);
  transition: transform 0.2s, box-shadow 0.2s;
}

.work-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(124, 102, 255, 0.15);
}

.work-icon {
  font-size: 32px;
}

.work-card h3 {
  font-size: 18px;
  font-weight: 600;
}

.work-card p {
  color: var(--text-2, rgba(0,0,0,0.64));
  font-size: 14px;
}

/* 关于 */
.about-text {
  color: var(--text-2, rgba(0,0,0,0.64));
  line-height: 1.8;
}

.contact-row {
  display: flex;
  gap: var(--sp-lg, 24px);
  margin-top: var(--sp-md, 16px);
}

.contact-link {
  display: inline-flex;
  align-items: center;
  gap: var(--sp-xs, 4px);
  color: var(--primary, #7c66ff);
  font-weight: 500;
  transition: opacity 0.2s;
}

.contact-link:hover {
  opacity: 0.7;
}
</style>