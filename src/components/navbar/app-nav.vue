<template>
  <div class="app-nav" :style="computedStyle">
    <div class="back-button" v-ripple @click="$router.back()">
      <i class="material-icons" style="margin-left: 4px;">
        arrow_back_ios
      </i>
    </div>
    <h2 style="cursor: pointer" @click="() => $router.push('/')">Müseer</h2>
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
    .back-button {
      font-size: 18pt;
      position: fixed;
      color: white;
      top: 15px;
      left: 14px;
      z-index: 63;
      padding: 4px;
      padding-right: 0px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      border-radius: 8px;
      background-color: rgba(255, 255, 255, 0.05);
      cursor: pointer;
    }
  }
</style>
