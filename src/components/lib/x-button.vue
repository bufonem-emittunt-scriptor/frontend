<template>
  <div class="button-container" :style="containerStyles">
    <div
      class="x-button"
      :style="computedStyle"
      @click.stop="action"
      v-ripple="rippleColor"
    >
      <slot/>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['ma', 'width', 'color', 'dark'],
    methods: {
      action() {
        setTimeout(() => this.$emit('click'), 200);
      }
    },
    computed: {
      rippleColor() {
        return this.dark == null ? this.color : 'white';
      },
      containerStyles() {
        let style = {};
        this.ma && (style.margin = this.ma);
        if (this.width == 'min') {
          // nope
        } else {
          style.width = this.width;
        }
        return style;
      },
      computedStyle() {
        let style = {};

        if (this.color && this.dark == null) {
          style.color = this.color;
          style.border = `1px solid ${this.color}`;
        }
        if (this.color && this.dark != null) {
          style.backgroundColor = this.color;
          style.border = `1px solid ${this.color}`;
          style.color = 'white';
          style.boxShadow = this.elevator(3);
        }
        return style;
      }
    }
  }
</script>

<style scoped lang="scss">
  .button-container {
    .x-button {
      width: calc(100% - 34px);
      outline: none;
      user-select: none;
      cursor: pointer;
      border-radius: 5px;
      padding: 8px 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 0.1s;
      position: relative;
      font-size: 16px;
    }
  }

  @media only screen and (max-width: 420px) {
    .button-container {
      .x-button {
        font-size: 12px;
        padding: 4px 8px;
        width: calc(100% - 18px);
      }
    }
  }

</style>
