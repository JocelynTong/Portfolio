<script setup lang="ts">
</script>

<template>
  <div class="layout">
    <slot />
  </div>
</template>

<style>
/* Import design tokens */
@import '../assets/tokens.css';

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html, body {
  height: 100%;
  overflow-x: hidden;
}

body {
  font-family: var(--font-sans);
  background: var(--bg-primary);
  color: var(--text-primary);
  line-height: var(--leading-normal);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  color: inherit;
  text-decoration: none;
}

.layout {
  min-height: 100vh;
}

/* 滚动淡入动画 */
@keyframes scroll-fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-in {
  animation: scroll-fade-in 0.8s var(--ease-out-expo) forwards;
}

/* 滚动条样式 */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: var(--bg-secondary);
}

::-webkit-scrollbar-thumb {
  background: var(--color-gray-400);
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--color-gray-500);
}
</style>
