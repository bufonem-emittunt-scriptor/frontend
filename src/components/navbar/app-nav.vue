<template>
  <div class="app-nav" :style="computedStyle">
    <div class="back-button" v-ripple @click="$router.back()">
      <i class="material-icons" style="margin-left: 4px;">
        arrow_back_ios
      </i>
    </div>
    <div class="profile-button" v-ripple @click="goProfile">
      <i class="material-icons" style="margin-left: 2px; margin-right: 6px;">
        {{ authoized ? 'person' : 'lock' }}
      </i>
    </div>
    <img src="@/static/imgs/logo.png" class="logo" @click="$router.push('/')" />
  </div>
</template>

<script>
  export default {
    computed: {
      computedStyle() {
        return {
          boxShadow: this.elevator(4)
        }
      },
      authoized() {
        return this.$store.state.gate.authoized;
      }
    },
    methods: {
      goProfile() {
        this.authoized ? this.$router.push('/me') : this.$router.push('/auth');
      }
    }
  }
</script>

<style scoped lang="scss">
  .app-nav {
    .logo {
      height: 100%;
      cursor: pointer;
    }
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    background-color: $appColor;
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
      background-color: rgba(0, 0, 0, 0.12);
      cursor: pointer;
      user-select: none;
    }
    .profile-button {
      user-select: none;
      font-size: 18pt;
      position: fixed;
      color: white;
      top: 15px;
      right: 14px;
      z-index: 63;
      padding: 4px;
      padding-right: 0px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      border-radius: 8px;
      background-color: rgba(0, 0, 0, 0.12);
      cursor: pointer;
    }
  }
</style>
