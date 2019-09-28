<template>
  <div class="snack-bar">
    <transition-group name="list">
      <div
        class="snack"
        v-for="(item, index) in snacks"
        :key="index"
        :style="`backgroundColor: ${item.color}`"
        @click="() => removeSnack(item.unique)"
      >
        <x-icon :name="item.icon" ir />
        <span>{{ item.text }}</span>
      </div>
    </transition-group>
  </div>
</template>

<script>
  export default {
    computed: {
      snacks() {
        return this.$store.state.core.notifications;
      }
    },
    methods: {
      removeSnack(key) {
        this.$store.commit('removeSnack', key);
      }
    }
  }
</script>

<style scoped lang="scss">

  .list-enter-active, .list-leave-active {
    transition: all 0.9s;
    opacity: 1;
  }
  .list-enter, .list-leave-to {
    opacity: 0;
    transform: translateX(50px);
  }

  .snack-bar {
    min-width: 320px;
    z-index: 95;
    position: fixed;
    top: 64px;
    right: 0px;
    padding: 10px;
    .snack {
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      border-radius: 5px;
      color: white;
      padding: 20px;
      width: calc(100% - 40px);
      box-shadow: 0 3px 4px 0 rgba(0, 0, 0, .14), 0 3px 3px -2px rgba(0, 0, 0, .12), 0 1px 8px 0 rgba(0, 0, 0, .20);
    }
  }

  @media only screen and (max-width: 420px) {
    .snack-bar {
      min-width: 0px;
      position: fixed;
      top: auto;
      bottom: 0px !important;
      left: 0px !important;
      padding: 10px;
      width: 100%;
      .snack {
        border-radius: 5px;
        color: white;
        padding: 20px;
        width: calc(100% - 60px);
        box-shadow: 0 3px 4px 0 rgba(0, 0, 0, .14), 0 3px 3px -2px rgba(0, 0, 0, .12), 0 1px 8px 0 rgba(0, 0, 0, .20);
      }
    }
    .list-enter, .list-leave-to {
      opacity: 0;
      transform: translateY(-50px);
    }
  }

</style>
