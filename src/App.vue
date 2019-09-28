<template>
  <div id="app">
    <app-nav />
    <app-loader v-if="appLoading" />
    <app-snacks />
    <div class="content-view">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
  .content-view {
    margin-top: 64px;
    z-index: 91;
    position: relative;
  }
</style>

<script>
  import AppNav from '@/components/navbar/app-nav.vue';
  import AppContainer from '@/components/app-container.vue';
  import AppLoader from '@/components/app-loader.vue';
  import AppSnacks from '@/components/app-snacks.vue';

  export default {
    data: () => ({
      pick: null
    }),
    computed: {
      userType() {
        return this.$store.state.gate.userType;
      },
      appLoading() {
        return this.$store.state.core.appLoading;
      }
    },
    components: {
      AppContainer,
      AppNav,
      AppLoader,
      AppSnacks
    }
  }
</script>
