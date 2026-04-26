<script setup lang="ts">
// 博客列表页
useSeoMeta({ title: '博客 · 童佩佩' })
</script>

<template>
  <div class="blog-list">
    <h1 class="page-title">博客文章</h1>
    <p class="page-desc">产品设计思考与技术实践</p>

    <div class="blog-grid">
      <div class="empty-state">
        作品整理中，即将上线...
      </div>
    </div>
  </div>
</template>

<style scoped>
.blog-list {
  display: flex;
  flex-direction: column;
  gap: var(--sp-lg, 24px);
}

.page-title {
  font-size: var(--font-h2, 32px);
  font-weight: 600;
}

.page-desc {
  color: var(--text-2, rgba(0,0,0,0.64));
  margin-top: calc(-1 * var(--sp-sm, 8px));
}

.blog-grid {
  display: flex;
  flex-direction: column;
  gap: var(--sp-md, 16px);
  margin-top: var(--sp-lg, 24px);
}

.blog-card {
  display: flex;
  flex-direction: column;
  gap: var(--sp-xs, 4px);
  padding: var(--sp-lg, 24px);
  background: var(--bg-2, #f5f5fa);
  border-radius: var(--r-md, 12px);
  transition: transform 0.2s, box-shadow 0.2s;
}

.blog-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(124, 102, 255, 0.1);
}

.blog-date {
  font-size: 12px;
  color: var(--text-3, rgba(0,0,0,0.40));
}

.blog-card h2 {
  font-size: 18px;
  font-weight: 600;
}

.blog-card p {
  color: var(--text-2, rgba(0,0,0,0.64));
  font-size: 14px;
}

.empty-state {
  padding: var(--sp-2xl);
  text-align: center;
  color: var(--text-3);
  background: var(--bg-2);
  border-radius: var(--r-md);
}
</style>