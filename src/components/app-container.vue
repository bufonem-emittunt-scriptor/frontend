<template>
  <div class="app-container">
    <slot />
  </div>
</template>

<script>

</script>

<style scoped lang="scss">
  .app-container {
    width: calc(100% - 24px);
    max-width: 720px;
    margin: auto;
    margin-top: 70px;
    padding: 12px;
  }
</style>
