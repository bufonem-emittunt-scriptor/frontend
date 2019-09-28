<template>
  <div>
    <transition name="to-opaque">
      <div v-if="value" class="x-shadow" @click="closeDialog" :style="cssVar">
        <div class="x-dialog" @click.stop>
          <x-card
            elev="3"
            :color="sty.bgColor"
            rounded
            pa="20px"
            class="card"
          >
            <slot />
          </x-card>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    props: ['value', 'maxWidth'],
    computed: {
      cssVar() {
        return {
          '--max-w': this.maxWidth || 'none'
        }
      }
    },
    methods: {
      closeDialog() {
        this.$emit('input', false);
      }
    }
  }
</script>

<style scoped lang="scss">
  .to-opaque-enter-active {
    transition: all .3s ease-in-out;
  }
  .to-opaque-leave-active {
    transition: all .3s ease-in-out;
  }
  .to-opaque-enter, .to-opaque-leave-to {
    opacity: 0;
  }

  .x-shadow {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 80;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    .x-dialog {
      width: calc(100% - 20px);
      margin: 10px;
      max-width: var(--max-w);
    }
  }

</style>
