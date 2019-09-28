<template>
  <div class="x-input-container" :style="containerStyles">
    <input
      :type="nativeType || ctype"
      v-model="tvalue"
      class="x-input"
      ref="input"
      @focus="isFocused = true"
      @blur="isFocused = false"
      :style="inputStyles"
    />
    <div class="vis-toggle" v-if="type === 'password'" @click="visibility = !visibility">
      <x-icon name="visibility" v-if="visibility" />
      <x-icon name="visibility_off" v-else />
    </div>
    <div
      @click="$refs.input.focus()"
      class="label"
      :style="labelStyles"
    >
      {{ caption || 'text' }}
    </div>
  </div>
</template>

<script>
  export default {
    props: ['type', 'value', 'caption', 'width', 'ma', 'color', 'nativeType'],
    data: () => ({
      isFocused: false,
      visibility: true
    }),
    computed: {
      ctype() {
        return this.visibility ? 'text' : 'password';
      },
      containerStyles() {
        let style = {};
        this.width && (style.width = this.width);
        this.ma && (style.margin = this.ma);
        return style;
      },
      inputStyles() {
        let style = {};
        if (this.isFocused) {
          style.border = `1px solid ${this.color || this.sty.borderColor}`
        } else {
          style.border = `1px solid ${this.sty.borderColor}`
        }
        return style;
      },
      labelStyles() {
        if (this.value || this.isFocused) {
          return {
            'font-size': '12px',
            'top': '-7px',
            'left': '6px',
            'color': this.isFocused ? (this.color || this.sty.borderColor) : this.sty.borderColor,
            'background-position': '0 0',
            'font-weight': 'bold'
          }
        }
        return {
          'font-size': '16px',
          'top': '13px',
          'left': '10px',
          'color': this.sty.borderColor,
          'background-position': '0 20px',
          'font-weight': 'normal'
        }
      },
      tvalue: {
        get() {
          return this.value;
        },
        set(val) {
          this.$emit('input', val);
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .x-input-container {
    height: 44px !important;
    display: inline-block;
    position: relative;
    .x-input {
      width: calc(100% - 18px);
      outline: none;
      padding: 4px;
      padding-left: 8px;
      padding-right: 8px;
      border-radius: 5px;
      font-size: 16px;
      height: calc(100% - 10px);
      background-color: white;
      transition: border 0.3s;
    }
    .label {
      transition: 0.3s;
      position: absolute;
      font-size: 16px;
      color: $borderColor;
      background-color: white;
      background: linear-gradient(180deg, rgba(237,238,240,1) 0%, rgba(237,238,240,1) 45%, rgba(237,238,240,1) 47%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 100%);
      background-repeat: no-repeat;
      user-select: none;
      padding-left: 2px;
      padding-right: 2px;
    }
    .vis-toggle {
      position: absolute;
      top: 10px;
      background-color: white;
      right: 10px;
      color: $borderColor;
      user-select: none;
    }
  }
</style>
