<template>
  <i class="material-icons x-icon" :style="computedStyle">
    {{ name }}
  </i>
</template>

<script>
  export default {
    props: ['pa', 'ma', 'name', 'color', 'il', 'ir', 'size'],
    computed: {
      computedStyle() {
        let style = {};
        this.pa && (style.padding = this.pa);
        this.ma && (style.margin = this.ma);
        this.color && (style.color = this.color);
        this.size && (style.fontSize = this.size);
        if (this.il != null) {
          style.marginLeft = '10px';
        }
        if (this.ir != null) {
          style.marginRight = '10px';
        }
        return style;
      }
    }
  }
</script>

<style scoped lang="scss">
  .x-icon {
    cursor: pointer;
    position: relative;
  }

  @media only screen and (max-width: 420px) {
    .x-icon {
      user-select: none;
      font-size: 24px;
    }
  }
</style>
