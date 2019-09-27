<template>
  <div class="app-nav" :style="computedStyle">
    <h2>Müseer</h2>
  </div>
</template>

<script>
  export default {
    computed: {
      computedStyle() {
        return {
          boxShadow: this.elevator(4)
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .app-nav {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    background-color: #4A235A;
    z-index: 99;
  }
</style>
