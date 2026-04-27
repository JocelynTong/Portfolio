<script setup lang="ts">
</script>

<template>
  <div class="layout">
    <slot />
  </div>
</template>

<style>
:root {
  --primary: #7c66ff;
  --bg-1: #ffffff;
  --text-1: #000000;
  --text-2: rgba(0,0,0,0.6);
}

* { box-sizing: border-box; margin: 0; padding: 0; }

html, body {
  height: 100%;
  overflow-x: hidden;
}

body {
  font-family: 'PingFang SC', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background: var(--bg-1);
  color: var(--text-1);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

a { color: inherit; text-decoration: none; }

.layout {
  min-height: 100vh;
}
</style>