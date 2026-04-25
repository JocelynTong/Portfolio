<script setup lang="ts">
// 动态自我介绍打字机效果
const tagline = '一切热爱，来自通用解决方案的驱动力'
const displayedText = ref('')
const typing = ref(true)

// 呼吸动画状态
const breathing = ref(false)

onMounted(() => {
  // 启动打字机
  let i = 0
  const type = () => {
    if (i <= tagline.length) {
      displayedText.value = tagline.slice(0, i)
      i++
      setTimeout(type, 80)
    } else {
      typing.value = false
    }
  }
  type()

  // 延迟启动呼吸动画
  setTimeout(() => {
    breathing.value = true
  }, 500)
})
</script>

<template>
  <header class="hero-header">
    <!-- 头像区域 -->
    <div class="avatar-wrapper">
      <div class="avatar-ring" :class="{ breathing }"></div>
      <div class="avatar-glow" :class="{ breathing }"></div>
      <img
        src="/avatar.jpg"
        alt="童佩佩"
        class="avatar-img"
        :class="{ breathing }"
      />
    </div>

    <!-- 简介区域 -->
    <div class="intro-area">
      <h1 class="name">童佩佩</h1>
      <p class="role">11年 · 产品设计</p>
      <p class="tagline">
        <span class="typing-text">{{ displayedText }}</span>
        <span class="cursor" :class="{ hidden: !typing }">|</span>
      </p>
    </div>
  </header>
</template>

<style scoped>
.hero-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--sp-xl, 32px);
  padding: var(--sp-2xl, 48px) var(--sp-md, 16px);
  text-align: center;
}

/* 头像 */
.avatar-wrapper {
  position: relative;
  width: 160px;
  height: 160px;
}

.avatar-ring {
  position: absolute;
  inset: -4px;
  border-radius: 50%;
  background: conic-gradient(
    from 0deg,
    var(--primary, #7c66ff) 0%,
    var(--primary-light, rgba(124,102,255,0.3)) 25%,
    var(--primary, #7c66ff) 50%,
    var(--primary-light, rgba(124,102,255,0.3)) 75%,
    var(--primary, #7c66ff) 100%
  );
  opacity: 0;
  transition: opacity 0.5s ease;
}

.avatar-ring.breathing {
  opacity: 1;
  animation: ring-rotate 8s linear infinite;
}

.avatar-glow {
  position: absolute;
  inset: -20px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(124, 102, 255, 0.15) 0%,
    transparent 70%
  );
  opacity: 0;
  transition: opacity 0.5s ease;
}

.avatar-glow.breathing {
  opacity: 1;
  animation: glow-pulse 4s ease-in-out infinite;
}

.avatar-img {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.5s ease, transform 0.3s ease;
}

.avatar-img.breathing {
  opacity: 1;
  animation: breathing 4s ease-in-out infinite;
}

/* 简介 */
.intro-area {
  display: flex;
  flex-direction: column;
  gap: var(--sp-sm, 8px);
}

.name {
  font-size: var(--font-h2, 32px);
  font-weight: 600;
  color: var(--text-1, #000);
}

.role {
  font-size: var(--font-body, 16px);
  color: var(--text-2, rgba(0,0,0,0.64));
}

.tagline {
  font-size: var(--font-body, 16px);
  color: var(--primary, #7c66ff);
  font-family: var(--font-mono, monospace);
  min-height: 1.5em;
}

.typing-text {
  display: inline;
}

.cursor {
  display: inline-block;
  margin-left: 2px;
  animation: blink 1s step-end infinite;
}

.cursor.hidden {
  opacity: 0;
}

/* 动画 */
@keyframes ring-rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes glow-pulse {
  0%, 100% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.1); opacity: 0.8; }
}

@keyframes breathing {
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(124, 102, 255, 0.4);
  }
  50% {
    transform: scale(1.02);
    box-shadow: 0 0 30px 10px rgba(124, 102, 255, 0.2);
  }
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}
</style>