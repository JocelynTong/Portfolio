<script setup lang="ts">
useSeoMeta({
  title: '童佩佩 · 产品设计师',
  description: '11年产品设计，专注通用解决方案',
})
</script>

<template>
  <HeroHeader />

  <!-- 首页 (hero) -->
  <section id="home"></section>

  <!-- 关于我 -->
  <section id="about" class="about">
    <h2 class="section-title">关于我</h2>
    <div class="about-intro">
      <span class="personality-tag">INFP</span>
      <p class="about-desc">诚挚、求真、创新不止、关注客户、敢于负责</p>
    </div>
    <div class="stats-row">
      <div class="stat-item">
        <div class="stat-num">4</div>
        <div class="stat-label">工作年份</div>
      </div>
      <div class="stat-item">
        <div class="stat-num">11</div>
        <div class="stat-label">项目经历</div>
      </div>
    </div>
    <div class="timeline">
      <div class="timeline-item">
        <div class="timeline-date">10.2021 - 至今</div>
        <div class="timeline-role">产品设计 - 回响科技</div>
        <div class="timeline-company">千岛 / 临界 APP / 设计系统 / 品牌</div>
      </div>
      <div class="timeline-item">
        <div class="timeline-date">04.2021 - 10.2021</div>
        <div class="timeline-role">UI / UX 设计 - 比心</div>
        <div class="timeline-company">鱼耳直播 APP / 后台</div>
      </div>
      <div class="timeline-item">
        <div class="timeline-date">04.2023 - 12.2023</div>
        <div class="timeline-role">UI - 钱咖</div>
        <div class="timeline-company">钱咖 / 有练 APP</div>
      </div>
    </div>
  </section>

  <!-- 作品集 -->
  <section class="portfolio">
    <h2 class="section-title">作品集</h2>
    <div class="projects-grid">
      <article class="project-card">
        <div class="project-img" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);"></div>
        <div class="project-info">
          <h3 class="project-title">千岛 SaaS Design System</h3>
          <p class="project-meta">APP | 2021 - 2025</p>
        </div>
      </article>
      <article class="project-card">
        <div class="project-img" style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);"></div>
        <div class="project-info">
          <h3 class="project-title">Mexxis Design System</h3>
          <p class="project-meta">Web | 2023</p>
        </div>
      </article>
      <article class="project-card">
        <div class="project-img" style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);"></div>
        <div class="project-info">
          <h3 class="project-title">Tricamarum UI Kit</h3>
          <p class="project-meta">Mobile | 2024</p>
        </div>
      </article>
      <article class="project-card">
        <div class="project-img" style="background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);"></div>
        <div class="project-info">
          <h3 class="project-title">Cammel Design</h3>
          <p class="project-meta">Web/Mobile | 2023</p>
        </div>
      </article>
    </div>
  </section>

  <!-- 文章 -->
  <section class="notes">
    <h2 class="section-title">文章</h2>
    <div class="notes-intro">
      <p>看见</p>
      <p>哪怕再不起眼，再渺小，哪怕看到的人很少</p>
      <p>只要看到了，就可能是机会</p>
      <div class="social-links">
        <NuxtLink to="/links" class="social-link">公众号</NuxtLink>
        <NuxtLink to="/links" class="social-link">小红书</NuxtLink>
        <NuxtLink to="/links" class="social-link">知乎</NuxtLink>
      </div>
    </div>
  </section>

  <!-- 联系 -->
  <section class="contact">
    <h2 class="contact-title">很高兴能与你共事</h2>
    <div class="contact-info">
      <div class="contact-item">
        <div class="contact-label">微信</div>
        <div class="contact-value">Jocelyn_0319</div>
      </div>
      <div class="contact-item">
        <div class="contact-label">坐标</div>
        <div class="contact-value">上海，中国</div>
      </div>
      <div class="contact-item">
        <div class="contact-label">经验</div>
        <div class="contact-value">产品设计</div>
      </div>
    </div>
  </section>

  <!-- 页脚 -->
  <footer class="footer">
    <p>©2025 Jocelyn Tong</p>
  </footer>
</template>

<style scoped>
.section-title {
  font-size: clamp(24px, 4vw, 48px);
  font-weight: 600;
  text-align: center;
  margin-bottom: 48px;
}

/* 关于我 */
.about {
  padding: 120px 8vw;
  background: #fff;
}

.about-intro {
  text-align: center;
  margin-bottom: 64px;
}

.personality-tag {
  display: inline-block;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: var(--primary);
  background: rgba(124, 102, 255, 0.1);
  padding: 6px 16px;
  border-radius: 20px;
  margin-bottom: 16px;
}

.about-desc {
  font-size: clamp(15px, 2vw, 18px);
  color: rgba(0,0,0,0.7);
  line-height: 1.8;
}

.stats-row {
  display: flex;
  justify-content: center;
  gap: 80px;
  margin-bottom: 80px;
}

.stat-item {
  text-align: center;
}

.stat-num {
  font-size: clamp(48px, 8vw, 80px);
  font-weight: 700;
  color: var(--primary);
  line-height: 1;
}

.stat-label {
  font-size: 14px;
  color: rgba(0,0,0,0.5);
  margin-top: 8px;
}

.timeline {
  max-width: 600px;
  margin: 0 auto;
  border-left: 1px solid rgba(0,0,0,0.1);
  padding-left: 32px;
}

.timeline-item {
  position: relative;
  padding-bottom: 48px;
}

.timeline-item:last-child {
  padding-bottom: 0;
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: -38px;
  top: 8px;
  width: 12px;
  height: 12px;
  background: var(--primary);
  border-radius: 50%;
}

.timeline-date {
  font-size: 12px;
  color: rgba(0,0,0,0.4);
  margin-bottom: 4px;
}

.timeline-role {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 4px;
}

.timeline-company {
  font-size: 14px;
  color: rgba(0,0,0,0.6);
}

/* 作品集 */
.portfolio {
  padding: 120px 8vw;
  background: #fafafa;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto;
}

.project-card {
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0,0,0,0.1);
}

.project-img {
  width: 100%;
  aspect-ratio: 4/3;
  object-fit: cover;
}

.project-info {
  padding: 20px;
}

.project-title {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 4px;
}

.project-meta {
  font-size: 13px;
  color: rgba(0,0,0,0.5);
}

/* 文章 */
.notes {
  padding: 120px 8vw;
  background: #fff;
}

.notes-intro {
  text-align: center;
  margin-bottom: 48px;
}

.notes-intro p {
  font-size: 15px;
  color: rgba(0,0,0,0.6);
  line-height: 1.8;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-top: 32px;
  flex-wrap: wrap;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: var(--primary);
  color: #fff;
  border-radius: 30px;
  font-size: 14px;
  font-weight: 500;
  transition: transform 0.2s, box-shadow 0.2s;
}

.social-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 20px rgba(124, 102, 255, 0.3);
}

/* 联系 */
.contact {
  padding: 120px 8vw;
  background: #fafafa;
  text-align: center;
}

.contact-title {
  font-size: clamp(28px, 5vw, 48px);
  font-weight: 600;
  margin-bottom: 48px;
}

.contact-info {
  display: flex;
  justify-content: center;
  gap: 64px;
  flex-wrap: wrap;
}

.contact-item {
  text-align: center;
}

.contact-label {
  font-size: 12px;
  color: rgba(0,0,0,0.4);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 8px;
}

.contact-value {
  font-size: 18px;
  font-weight: 500;
}

/* 页脚 */
.footer {
  padding: 32px;
  text-align: center;
  background: #fff;
  font-size: 13px;
  color: rgba(0,0,0,0.4);
}

/* 响应式 */
@media (max-width: 768px) {
  .stats-row {
    gap: 40px;
  }

  .contact-info {
    gap: 32px;
  }
}
</style>
