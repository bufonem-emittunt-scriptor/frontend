<template>
  <div class="x-text" :style="computedStyle">
    <div class="loader" v-if="!ready" />
    <div class="content" v-else>
      <slot />
    </div>
  </div>
</template>

<script>
  export default {
    props: ['pa', 'ma', 'width', 'ready'],
    computed: {
      computedStyle() {
        let style = {};
        this.pa && (style.padding = this.pa);
        this.ma && (style.margin = this.ma);
        if (!this.ready) {
          style.width = '200px';
        }
        this.width && (style.width = this.width);
        return style;
      }
    }
  }
</script>

<style scoped lang="scss">
  .x-text {
    display: flex;
    .loader {
      width: 100%;
      max-width: 200px;
      background-size: cover;
      border-radius: 16px;
      height: 16px;
      background: linear-gradient(127deg, rgba(201,201,201,1) 0%, rgba(201,201,201,1) 37%, rgba(227,227,227,1) 47%, rgba(201,201,201,1) 56%, rgba(201,201,201,1) 100%);
      display: inline-block;
      animation: loader 4.5s linear infinite;
      background-position: -400px;
      background-repeat: no-repeat;
      background-color: #c9c9c9;
      opacity: 0.5;
    }
  }
  @keyframes loader {
    from {
      background-position: -400px;
    }
    to {
      background-position: 400px;
    }
  }
</style>
