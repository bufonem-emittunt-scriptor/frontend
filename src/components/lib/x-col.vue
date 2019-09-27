<template>
  <div class="x-col" :style="computedStyle">
    <slot />
  </div>
</template>

<script>
  export default {
    props: ['pa', 'ma', 'width', 'col'],
    computed: {
      computedStyle() {
        let style = {};
        this.pa && (style.padding = this.pa);
        this.ma && (style.margin = this.ma);
        this.width && (style.width = this.width);
        this.col && (style.width = (100 / 12 * this.col) + '%');
        return style;
      }
    }
  }
</script>

<style scoped lang="scss">
  .x-col {
    position: relative;
    display: inline-block;
  }
</style>
