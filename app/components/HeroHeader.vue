<script setup lang="ts">
const loaded = ref(false)
const currentSlide = ref(0)
const progress = ref(0)
const activeSection = ref('home')
const images = ['/avatar_hq.jpg', '/avatar2_hq.jpg']
const INTERVAL = 3500

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
  }
}

onMounted(() => {
  setTimeout(() => {
    loaded.value = true
  }, 300)
  startTimer()

  // Scroll spy
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id
        }
      })
    },
    { threshold: 0.3 }
  )

  nextTick(() => {
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
  })
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>

<template>
  <section class="hero">
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
    <nav class="hero-nav">
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

    <!-- 右侧文字 -->
    <div class="hero-content" :class="{ loaded }">
      <div class="hero-text" :class="{ loaded }">
        <p class="hero-label">产品设计 · 11年</p>
        <div class="hero-name-wrap">
          <h1 class="hero-name">
            <span class="name-line1">一切热爱</span><span class="name-line2">来自通用解决方案的驱动力</span>
          </h1>
        </div>
        <!-- 横条进度指示器 -->
        <div class="slide-indicator">
          <div class="slide-bars">
            <div
              v-for="(img, i) in images"
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
    <div class="scroll-hint-center">
      <span>向下滚动</span>
      <div class="scroll-arrow"></div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
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
  transition: opacity 1.2s ease;
}

.slide-img.active {
  opacity: 1;
}

.hero-bg.loaded .slide-img.active {
  animation: slow-zoom 8s ease-out forwards;
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
    rgba(0,0,0,0.3) 0%,
    rgba(0,0,0,0.1) 40%,
    rgba(0,0,0,0.4) 100%
  );
}

/* 导航 */
.hero-nav {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 28px 8vw;
}

.nav-logo {
  font-size: 18px;
  font-weight: 700;
  color: white;
  letter-spacing: -0.02em;
}

.nav-links {
  display: flex;
  gap: 40px;
}

.nav-links a {
  font-size: 13px;
  color: rgba(255,255,255,0.85);
  letter-spacing: 0.05em;
  transition: color 0.2s;
}

.nav-links a:hover {
  color: white;
}

.nav-links a.active {
  color: white;
  opacity: 1;
}

/* 右侧文字 */
.hero-content {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 8vw;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 48px;
  opacity: 0;
  transform: translateX(20px);
  transition: opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s;
}

.hero-content.loaded {
  opacity: 1;
  transform: translateX(0);
}

.hero-text {
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-end;
}

.hero-name-wrap {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-end;
}

.hero-label {
  font-size: clamp(11px, 1.2vw, 13px);
  color: rgba(255,255,255,0.7);
  letter-spacing: 0.2em;
  text-transform: uppercase;
  font-weight: 500;
  text-align: right;
}

.hero-name {
  font-size: clamp(36px, 6.5vw, 80px);
  font-weight: 400;
  line-height: 1;
  color: white;
  text-shadow: 0 4px 32px rgba(0,0,0,0.5);
  text-align: right;
}

.name-line1 {
  font-size: clamp(40px, 7vw, 88px);
  font-weight: 600;
  display: block;
  line-height: 1.1;
}

.name-line2 {
  font-size: clamp(18px, 3vw, 42px);
  font-weight: 500;
  opacity: 0.85;
  display: block;
  line-height: 2;
}

/* 横条进度 */
.slide-indicator {
  width: 100%;
  opacity: 0;
  transition: opacity 0.8s ease 0.3s;
}

.hero-text.loaded .slide-indicator {
  opacity: 1;
}

.slide-bars {
  display: flex;
  flex-direction: row;
  gap: 8px;
  cursor: pointer;
}

.slide-bar-wrap {
  position: relative;
  height: 2px;
  border-radius: 1px;
  overflow: hidden;
  flex: 1;
}

.slide-bar-bg {
  position: absolute;
  inset: 0;
  background: rgba(255,255,255,0.3);
}

.slide-bar-fill {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 0%;
  background: white;
}

.slide-bar-fill.active {
  background: white;
}

/* 向下滚动 */
.scroll-hint-center {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  z-index: 10;
}

.scroll-hint-center span {
  font-size: 11px;
  color: rgba(255,255,255,0.5);
  letter-spacing: 0.15em;
  text-transform: uppercase;
}

.scroll-arrow {
  width: 1px;
  height: 48px;
  background: linear-gradient(to bottom, rgba(255,255,255,0.5), transparent);
  animation: scroll-pulse 2s ease-in-out infinite;
}

@keyframes scroll-pulse {
  0%, 100% { opacity: 0.5; transform: scaleY(1); }
  50% { opacity: 1; transform: scaleY(1.1); }
}

/* 响应式 */
@media (max-width: 768px) {
  .hero-nav {
    padding: 20px 6vw;
  }

  .hero-content {
    top: auto;
    bottom: 0;
    right: 0;
    left: 0;
    padding: 0 6vw 15vh;
    gap: 24px;
    align-items: center;
    transform: translateY(20px);
  }

  .hero-content.loaded {
    transform: translateY(0);
  }

  .hero-label,
  .hero-name {
    text-align: center;
  }

  .name-line1,
  .name-line2 {
    text-align: center;
  }

  .nav-links {
    gap: 24px;
  }

  .hero-bg img {
    object-position: center 10%;
  }

  .slide-bars {
    align-items: center;
  }
}
</style>