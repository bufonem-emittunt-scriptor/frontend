<template>
  <div id="app">
    <app-nav />
    <div class="content-view">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
  .content-view {
    margin-top: 64px;
  }
</style>

<script>
  import AppNav from '@/components/navbar/app-nav.vue';
  import AppContainer from '@/components/app-container.vue';

  export default {
    data: () => ({
      pick: null
    }),
    computed: {
      userType() {
        return this.$store.state.gate.userType;
      }
    },
    components: {
      AppContainer,
      AppNav
    }
  }
</script>
