<template>
  <div class="x-card" :style="computedStyle">
    <slot />
  </div>
</template>

<script>
  export default {
    props: ['pa', 'ma', 'outlined', 'rounded', 'elev', 'color', 'text-color', 'fd', 'customround'],
    computed: {
      computedElev() {
        return this.elev == null ? 0 : this.elev;
      },
      computedStyle() {
        let style = {};
        this.pa && (style.padding = this.pa);
        this.ma && (style.margin = this.ma);
        this.color && (style.backgroundColor = this.color);
        this.textColor && (style.color = this.textColor);
        this.fd && (style.flexDirection = this.fd);
        if (this.outlined != null) {
          style.border = `1px solid ${this.sty.borderColor}`;
        }
        style.boxShadow = this.elevator(this.computedElev);
        if (this.rounded != null) {
          style.borderRadius = '5px';
        }
        this.customround && (style.borderRadius = this.customround);
        return style;
      }
    }
  }
</script>

<style scoped lang="scss">
  .x-card {
    position: relative;
    display: flex;
    overflow: hidden;
  }
</style>
