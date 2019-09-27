<template>
  <div class="x-row" :style="computedStyle">
    <slot />
  </div>
</template>

<script>
  export default {
    props: ['pa', 'ma', 'dir', 'ai', 'jc'],
    computed: {
      computedStyle() {
        let style = {};
        this.pa && (style.padding = this.pa);
        this.ma && (style.margin = this.ma);
        this.dir && (style.flexDirection = this.dir);
        this.ai && (style.alignItems = this.ai);
        this.jc && (style.justifyContent = this.jc);
        return style;
      }
    }
  }
</script>

<style scoped lang="scss">
  .x-row {
    position: relative;
    display: flex;
    width: 100%;
  }
</style>
