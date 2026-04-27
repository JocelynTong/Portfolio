<script setup lang="ts">
useSeoMeta({
  title: '童佩佩 · 产品设计师',
  description: '11年产品设计，专注通用解决方案',
})
</script>

<template>
  <HeroHeader />

  <!-- 关于我 -->
  <section id="about" class="section">
    <div class="container">
      <h2 class="section-title">关于我</h2>

      <div class="intro-block">
        <span class="tag">INFP</span>
        <p class="intro-text">诚挚、求真、创新不止、关注客户、敢于负责</p>
      </div>

      <div class="stats-row">
        <div class="stat">
          <span class="stat-num">4</span>
          <span class="stat-label">工作年份</span>
        </div>
        <div class="stat">
          <span class="stat-num">11</span>
          <span class="stat-label">项目经历</span>
        </div>
      </div>

      <div class="timeline">
        <div class="timeline-item">
          <span class="timeline-date">10.2021 — 至今</span>
          <h4 class="timeline-role">产品设计 — 回响科技</h4>
          <p class="timeline-desc">千岛 / 临界 APP / 设计系统 / 品牌</p>
        </div>
        <div class="timeline-item">
          <span class="timeline-date">04.2021 — 10.2021</span>
          <h4 class="timeline-role">UI / UX 设计 — 比心</h4>
          <p class="timeline-desc">鱼耳直播 APP / 后台</p>
        </div>
        <div class="timeline-item">
          <span class="timeline-date">04.2023 — 12.2023</span>
          <h4 class="timeline-role">UI — 钱咖</h4>
          <p class="timeline-desc">钱咖 / 有练 APP</p>
        </div>
      </div>
    </div>
  </section>

  <!-- 作品集 -->
  <section id="portfolio" class="section section-dark">
    <div class="container">
      <h2 class="section-title">作品集</h2>

      <div class="projects-grid">
        <article class="project-card">
          <div class="project-img" style="background: linear-gradient(135deg, #1a1a1a 0%, #333 100%);"></div>
          <div class="project-info">
            <h3 class="project-title">千岛 SaaS Design System</h3>
            <p class="project-meta">APP · 2021 — 2025</p>
          </div>
        </article>
        <article class="project-card">
          <div class="project-img" style="background: linear-gradient(135deg, #2a2a2a 0%, #444 100%);"></div>
          <div class="project-info">
            <h3 class="project-title">Mexxis Design System</h3>
            <p class="project-meta">Web · 2023</p>
          </div>
        </article>
        <article class="project-card">
          <div class="project-img" style="background: linear-gradient(135deg, #3a3a3a 0%, #555 100%);"></div>
          <div class="project-info">
            <h3 class="project-title">Tricamarum UI Kit</h3>
            <p class="project-meta">Mobile · 2024</p>
          </div>
        </article>
        <article class="project-card">
          <div class="project-img" style="background: linear-gradient(135deg, #4a4a4a 0%, #666 100%);"></div>
          <div class="project-info">
            <h3 class="project-title">Cammel Design</h3>
            <p class="project-meta">Web/Mobile · 2023</p>
          </div>
        </article>
      </div>
    </div>
  </section>

  <!-- 文章 -->
  <section id="notes" class="section">
    <div class="container">
      <h2 class="section-title">文章</h2>

      <div class="notes-intro">
        <p class="notes-quote">看见</p>
        <p class="notes-quote-sub">哪怕再不起眼，再渺小，哪怕看到的人很少</p>
        <p class="notes-quote-sub">只要看到了，就可能是机会</p>
      </div>

      <div class="social-links">
        <NuxtLink to="/links" class="social-link">公众号</NuxtLink>
        <NuxtLink to="/links" class="social-link">小红书</NuxtLink>
        <NuxtLink to="/links" class="social-link">知乎</NuxtLink>
      </div>
    </div>
  </section>

  <!-- 联系 -->
  <section id="contact" class="section section-dark">
    <div class="container">
      <h2 class="section-title-large">很高兴能与你共事</h2>

      <div class="contact-grid">
        <div class="contact-item">
          <span class="contact-label">微信</span>
          <span class="contact-value">Jocelyn_0319</span>
        </div>
        <div class="contact-item">
          <span class="contact-label">坐标</span>
          <span class="contact-value">上海，中国</span>
        </div>
        <div class="contact-item">
          <span class="contact-label">经验</span>
          <span class="contact-value">产品设计</span>
        </div>
      </div>
    </div>
  </section>

  <!-- 页脚 -->
  <footer class="footer">
    <p>© 2025 Jocelyn Tong</p>
  </footer>
</template>

<style scoped>
/* 通用 */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--page-padding-x);
}

.section {
  padding: var(--section-padding-y) 0;
  background: var(--bg-primary);
  min-height: 100vh;
}

.section-dark {
  background: var(--color-black);
  color: var(--color-white);
}

/* 标题 */
.section-title {
  font-size: var(--text-xs);
  font-weight: var(--font-medium);
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--text-tertiary);
  margin-bottom: var(--space-16);
}

.section-title-large {
  font-size: clamp(var(--text-2xl), 5vw, var(--text-4xl));
  font-weight: var(--font-semibold);
  letter-spacing: var(--tracking-tight);
  margin-bottom: var(--space-16);
}

/* 关于我 */
.intro-block {
  text-align: center;
  margin-bottom: var(--space-16);
}

.tag {
  display: inline-block;
  font-size: var(--text-xs);
  font-weight: var(--font-semibold);
  letter-spacing: var(--tracking-wider);
  text-transform: uppercase;
  padding: var(--space-2) var(--space-4);
  border: 1px solid var(--color-gray-300);
  border-radius: var(--radius-sm);
  margin-bottom: var(--space-6);
  color: var(--text-secondary);
}

.intro-text {
  font-size: clamp(var(--text-base), 2vw, var(--text-lg));
  color: var(--text-secondary);
  line-height: var(--leading-relaxed);
}

.stats-row {
  display: flex;
  justify-content: center;
  gap: var(--space-20);
  margin-bottom: var(--space-16);
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-2);
}

.stat-num {
  font-size: clamp(var(--text-3xl), 8vw, var(--text-5xl));
  font-weight: var(--font-bold);
  letter-spacing: var(--tracking-tight);
  line-height: 1;
}

.stat-label {
  font-size: var(--text-xs);
  letter-spacing: var(--tracking-wider);
  text-transform: uppercase;
  color: var(--text-tertiary);
}

/* 时间线 */
.timeline {
  max-width: 600px;
  margin: 0 auto;
  border-left: 1px solid var(--color-gray-200);
  padding-left: var(--space-8);
}

.section-dark .timeline {
  border-color: var(--color-gray-700);
}

.timeline-item {
  position: relative;
  padding-bottom: var(--space-10);
}

.timeline-item:last-child {
  padding-bottom: 0;
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: calc(-1 * var(--space-8) - 4px);
  top: 6px;
  width: 8px;
  height: 8px;
  background: var(--color-black);
  border-radius: 50%;
}

.section-dark .timeline-item::before {
  background: var(--color-white);
}

.timeline-date {
  font-size: var(--text-xs);
  color: var(--text-tertiary);
  letter-spacing: var(--tracking-wide);
}

.timeline-role {
  font-size: var(--text-base);
  font-weight: var(--font-semibold);
  margin: var(--space-2) 0;
}

.timeline-desc {
  font-size: var(--text-sm);
  color: var(--text-secondary);
}

/* 作品集 */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-6);
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}

.project-card {
  overflow: hidden;
  cursor: pointer;
}

.project-img {
  width: 100%;
  aspect-ratio: 4/3;
  transition: transform var(--duration-slow) var(--ease-out-expo);
}

.project-card:hover .project-img {
  transform: scale(1.02);
}

.project-info {
  padding: var(--space-5) 0;
}

.project-title {
  font-size: var(--text-base);
  font-weight: var(--font-medium);
  margin-bottom: var(--space-1);
}

.section-dark .project-title {
  color: var(--color-white);
}

.project-meta {
  font-size: var(--text-xs);
  color: var(--text-tertiary);
  letter-spacing: var(--tracking-wide);
}

/* 文章 */
.notes-intro {
  text-align: center;
  margin-bottom: var(--space-12);
}

.notes-quote {
  font-size: clamp(var(--text-xl), 4vw, var(--text-3xl));
  font-weight: var(--font-light);
  letter-spacing: var(--tracking-tight);
  margin-bottom: var(--space-4);
}

.notes-quote-sub {
  font-size: var(--text-sm);
  color: var(--text-tertiary);
  line-height: var(--leading-relaxed);
}

.social-links {
  display: flex;
  justify-content: center;
  gap: var(--space-4);
  flex-wrap: wrap;
}

.social-link {
  font-size: var(--text-xs);
  font-weight: var(--font-medium);
  letter-spacing: var(--tracking-wider);
  text-transform: uppercase;
  padding: var(--space-3) var(--space-6);
  border: 1px solid var(--color-black);
  border-radius: var(--radius-sm);
  transition: all var(--duration-fast) var(--ease-out-expo);
}

.section-dark .social-link {
  border-color: var(--color-white);
}

.social-link:hover {
  background: var(--color-black);
  color: var(--color-white);
}

.section-dark .social-link:hover {
  background: var(--color-white);
  color: var(--color-black);
}

/* 联系 */
.contact-grid {
  display: flex;
  justify-content: center;
  gap: var(--space-16);
  flex-wrap: wrap;
}

.contact-item {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  text-align: center;
}

.contact-label {
  font-size: var(--text-xs);
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gray-500);
}

.contact-value {
  font-size: var(--text-base);
  font-weight: var(--font-medium);
}

/* 页脚 */
.footer {
  padding: var(--space-8);
  text-align: center;
  background: var(--bg-primary);
  border-top: 1px solid var(--color-gray-100);
}

.footer p {
  font-size: var(--text-xs);
  color: var(--text-tertiary);
  letter-spacing: var(--tracking-wide);
}

/* 响应式 */
@media (max-width: 768px) {
  .stats-row {
    gap: var(--space-12);
  }

  .contact-grid {
    gap: var(--space-10);
  }
}
</style>
