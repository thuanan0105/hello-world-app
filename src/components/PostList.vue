<template>
  <div class="container">
    <div class="post-list">
      <slot />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.post-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
}
</style>
