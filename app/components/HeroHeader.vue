<script setup lang="ts">
const loaded = ref(false)
const currentSlide = ref(0)
const progress = ref(0)
const activeSection = ref('home')
const isDarkSection = ref(true)
const images = ['/avatar_hq.jpg', '/avatar2_hq.jpg']
const INTERVAL = 4000

const navItems = [
  { id: 'home', label: '首页' },
  { id: 'about', label: '关于我' },
  { id: 'portfolio', label: '作品集' },
  { id: 'notes', label: '笔记集' },
  { id: 'contact', label: '联系我' },
]

let timer: ReturnType<typeof setInterval> | null = null

const goToSlide = (i: number) => {
  currentSlide.value = i
  progress.value = 0
}

const startTimer = () => {
  progress.value = 0
  const start = Date.now()
  timer = setInterval(() => {
    progress.value = ((Date.now() - start) % INTERVAL) / INTERVAL * 100
    if (progress.value >= 99) {
      currentSlide.value = (currentSlide.value + 1) % images.length
      progress.value = 0
    }
  }, 50)
}

const scrollToSection = (id: string) => {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
    activeSection.value = id
    isDarkSection.value = id === 'home'
  }
}

const handleScroll = () => {
  const scrollY = window.scrollY
  const heroHeight = window.innerHeight

  // Each section is 100vh, so active section = floor(scrollY / heroHeight) + 1 (skip hero)
  const sectionIndex = Math.floor(scrollY / heroHeight)

  if (sectionIndex === 0) {
    isDarkSection.value = true
    activeSection.value = 'home'
  } else {
    isDarkSection.value = false
    const targetIndex = sectionIndex - 1
    const targetItem = navItems[targetIndex]
    if (targetItem) {
      activeSection.value = targetItem.id
    }
  }
}

onMounted(() => {
  setTimeout(() => {
    loaded.value = true
  }, 300)
  startTimer()

  document.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
  document.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <section id="home" class="hero">
    <!-- 全屏背景照片轮播 -->
    <div class="hero-bg" :class="{ loaded }">
      <img
        v-for="(img, i) in images"
        :key="img"
        :src="img"
        :class="['slide-img', { active: currentSlide === i }]"
        alt=""
      />
      <div class="hero-overlay"></div>
    </div>

    <!-- 顶部导航 -->
    <nav class="hero-nav" :class="{ 'nav-light': !isDarkSection }" :style="{ background: !isDarkSection ? 'rgba(255,255,255,0.95)' : 'transparent' }">
      <span class="nav-logo">JocelynTong</span>
      <div class="nav-links">
        <a
          v-for="item in navItems"
          :key="item.id"
          :href="'#' + item.id"
          :class="{ active: activeSection === item.id }"
          @click.prevent="scrollToSection(item.id)"
        >
          {{ item.label }}
        </a>
      </div>
    </nav>

    <!-- 中央文字 -->
    <div class="hero-content" :class="{ loaded }">
      <div class="hero-text" :class="{ loaded }">
        <p class="hero-label">产品设计 · 11年</p>
        <h1 class="hero-name">
          <span class="name-line1">一切热爱</span>
          <span class="name-line2">来自通用解决方案的驱动力</span>
        </h1>

        <!-- 横条进度指示器 -->
        <div class="slide-indicator">
          <div class="slide-bars">
            <div
              v-for="(_, i) in images"
              :key="i"
              class="slide-bar-wrap"
              @click="goToSlide(i)"
            >
              <div class="slide-bar-bg"></div>
              <div
                class="slide-bar-fill"
                :class="{ active: currentSlide === i }"
                :style="currentSlide === i ? { width: progress + '%' } : {}"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 向下滚动 -->
    <div class="scroll-hint">
      <span>向下滚动</span>
      <div class="scroll-arrow"></div>
    </div>
  </section>
</template>

<style scoped>
/* Hero 全屏 */
.hero {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: var(--color-black);
}

/* 全屏背景 */
.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.slide-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  opacity: 0;
  transition: opacity 1.5s var(--ease-out-expo);
}

.slide-img.active {
  opacity: 1;
}

.hero-bg.loaded .slide-img.active {
  animation: slow-zoom 8s var(--ease-out-expo) forwards;
}

@keyframes slow-zoom {
  from { transform: scale(1.05); }
  to { transform: scale(1); }
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0,0,0,0.4) 0%,
    rgba(0,0,0,0.15) 50%,
    rgba(0,0,0,0.5) 100%
  );
}

/* 导航 */
.hero-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: var(--z-fixed);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-8) var(--page-padding-x);
  transition: background var(--duration-slow) var(--ease-out-expo),
              color var(--duration-slow) var(--ease-out-expo);
  background: transparent;
  color: var(--color-white);
}

.hero-nav.nav-light {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  color: var(--color-black);
}

.nav-logo {
  font-size: var(--text-sm);
  font-weight: var(--font-bold);
  letter-spacing: var(--tracking-tight);
  text-transform: uppercase;
}

.nav-links {
  display: flex;
  gap: var(--space-10);
}

.nav-links a {
  font-size: var(--text-xs);
  font-weight: var(--font-medium);
  letter-spacing: var(--tracking-wider);
  text-transform: uppercase;
  cursor: pointer;
  transition: opacity var(--duration-fast) ease;
  color: inherit;
  opacity: 0.7;
}

.nav-links a:hover {
  opacity: 1;
}

.nav-links a.active {
  opacity: 1;
  font-weight: var(--font-semibold);
}

.nav-links a.active::after {
  content: '';
  display: block;
  width: 100%;
  height: 1px;
  background: currentColor;
  margin-top: 2px;
}

/* 中央文字 */
.hero-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  text-align: center;
  color: var(--color-white);
  opacity: 0;
  transition: opacity var(--duration-slower) var(--ease-out-expo);
}

.hero-content.loaded {
  opacity: 1;
}

.hero-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-8);
}

.hero-label {
  font-size: var(--text-xs);
  font-weight: var(--font-medium);
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  opacity: 0.6;
}

.hero-name {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  font-weight: var(--font-normal);
  line-height: var(--leading-tight);
}

.name-line1 {
  font-size: clamp(48px, 10vw, 120px);
  font-weight: var(--font-semibold);
  letter-spacing: var(--tracking-tight);
}

.name-line2 {
  font-size: clamp(14px, 2.5vw, 24px);
  font-weight: var(--font-normal);
  letter-spacing: var(--tracking-normal);
  opacity: 0.7;
}

/* 横条进度 */
.slide-indicator {
  width: 100%;
  margin-top: var(--space-8);
  opacity: 0;
  transition: opacity var(--duration-slow) var(--ease-out-expo) 0.5s;
}

.hero-text.loaded .slide-indicator {
  opacity: 1;
}

.slide-bars {
  display: flex;
  gap: var(--space-2);
  justify-content: center;
}

.slide-bar-wrap {
  position: relative;
  width: 48px;
  height: 2px;
  overflow: hidden;
  cursor: pointer;
}

.slide-bar-bg {
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.3);
}

.slide-bar-fill {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 0%;
  background: var(--color-white);
  transition: width 0.1s linear;
}

/* 向下滚动 */
.scroll-hint {
  position: absolute;
  bottom: var(--space-12);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-3);
  z-index: 10;
}

.scroll-hint span {
  font-size: var(--text-xs);
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
}

.scroll-arrow {
  width: 1px;
  height: 48px;
  background: linear-gradient(to bottom, rgba(255,255,255,0.5), transparent);
  animation: scroll-pulse 2s var(--ease-in-out) infinite;
}

@keyframes scroll-pulse {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
}

/* 响应式 */
@media (max-width: 768px) {
  .hero-nav {
    padding: var(--space-6) 6vw;
  }

  .nav-links {
    gap: var(--space-6);
  }

  .nav-links a {
    font-size: 10px;
  }

  .hero-content {
    width: 90vw;
  }

  .name-line1 {
    font-size: clamp(36px, 12vw, 64px);
  }

  .name-line2 {
    font-size: clamp(12px, 3vw, 16px);
  }
}
</style>
