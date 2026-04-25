<script setup lang="ts">
useSeoMeta({ title: '外链 · 童佩佩' })

const articleUrl = ref('')
const noteUrl = ref('')
const result = ref<{ type: 'article' | 'note', title: string, content: string, date?: string } | null>(null)
const loading = ref(false)
const error = ref('')

// TODO: 实现公众号/小红书抓取 API
const handleFetch = async () => {
  if (!articleUrl.value && !noteUrl.value) return
  loading.value = true
  error.value = ''
  result.value = null

  try {
    const url = articleUrl.value || noteUrl.value
    const type = url.includes('mp.weixin') ? 'article' : 'note'
    const res = await $fetch(`/api/fetch-${type}`, {
      query: { url }
    })
    result.value = res as any
  } catch (e) {
    error.value = '抓取失败，请检查链接是否有效'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="links-page">
    <h1 class="page-title">外链内容</h1>
    <p class="page-desc">输入公众号文章或小红书笔记链接，获取内容展示</p>

    <!-- 输入区 -->
    <div class="input-area">
      <div class="input-group">
        <label>公众号文章链接</label>
        <input v-model="articleUrl" type="url" placeholder="https://mp.weixin.qq.com/s/..." />
      </div>
      <div class="divider">或</div>
      <div class="input-group">
        <label>小红书笔记链接</label>
        <input v-model="noteUrl" type="url" placeholder="https://www.xiaohongshu.com/explore/..." />
      </div>
      <button @click="handleFetch" :disabled="loading" class="fetch-btn">
        {{ loading ? '抓取中...' : '抓取内容' }}
      </button>
    </div>

    <!-- 错误提示 -->
    <div v-if="error" class="error-msg">{{ error }}</div>

    <!-- 结果展示 -->
    <div v-if="result" class="result-area">
      <h2>{{ result.title }}</h2>
      <p v-if="result.date" class="result-date">{{ result.date }}</p>
      <div class="result-content" v-html="result.content"></div>
    </div>
  </div>
</template>

<style scoped>
.links-page {
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

.input-area {
  display: flex;
  flex-direction: column;
  gap: var(--sp-md, 16px);
  padding: var(--sp-lg, 24px);
  background: var(--bg-2, #f5f5fa);
  border-radius: var(--r-md, 12px);
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: var(--sp-xs, 4px);
}

.input-group label {
  font-size: 14px;
  font-weight: 500;
}

.input-group input {
  padding: var(--sp-sm) var(--sp-md);
  border: 1px solid var(--border-1, rgba(0,0,0,0.12));
  border-radius: var(--r-sm, 8px);
  font-size: 14px;
}

.divider {
  text-align: center;
  color: var(--text-3, rgba(0,0,0,0.40));
  font-size: 12px;
}

.fetch-btn {
  padding: var(--sp-sm) var(--sp-lg);
  background: var(--primary, #7c66ff);
  color: white;
  border: none;
  border-radius: var(--r-sm, 8px);
  font-weight: 500;
  cursor: pointer;
  transition: opacity 0.2s;
}

.fetch-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.error-msg {
  padding: var(--sp-md);
  background: #fee;
  color: #c00;
  border-radius: var(--r-sm, 8px);
  font-size: 14px;
}

.result-area {
  padding: var(--sp-lg, 24px);
  background: white;
  border: 1px solid var(--border-1, rgba(0,0,0,0.12));
  border-radius: var(--r-md, 12px);
}

.result-date {
  font-size: 12px;
  color: var(--text-3, rgba(0,0,0,0.40));
  margin: var(--sp-xs) 0 var(--sp-md);
}

.result-content {
  line-height: 1.8;
}
</style>