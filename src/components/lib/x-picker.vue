<template>
  <div class="x-picker" :style="computedStyles">
    <div class="picker-chosen" @click.stop="openItems">
      <span class="item">{{ value || caption || 'Выберите' }}</span>
      <x-icon name="arrow_drop_down" color="black" />
    </div>
    <div class="items" v-if="itemsOpened">
      <x-card class="card" elev="3" fd="column" rounded>
        <div
          v-for="(item, index) in items"
          @click="() => setItem(cod != null ? item.code : item)"
          class="item"
        >
          {{ nam != null ? item.nam : item }}
        </div>
      </x-card>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['ma', 'items', 'value', 'color', 'width', 'caption', 'cod', 'nam'],
    data: () => ({
      itemsOpened: false
    }),
    methods: {
      openItems() {
        this.itemsOpened = true;
        document.querySelector('#app').addEventListener('click', this.closeItems);
      },
      closeItems() {
        this.itemsOpened = false;
        document.querySelector('#app').removeEventListener('click', this.closeItems);
      },
      setItem(item) {
        this.$emit('input', item);
        this.closeItems();
      }
    },
    computed: {
      computedStyles() {
        let style = {};
        this.color && (style['--hover-col'] = this.color);
        this.width && (style.width = this.width);
        return style;
      }
    }
  }
</script>

<style scoped lang="scss">
  .x-picker {
    display: inline-block;
    position: relative;
    cursor: pointer;

    .picker-chosen {
      border: 1px solid $borderColor;
      background-color: white;
      height: calc(44px - 10px);
      padding: 4px;
      padding-left: 8px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-radius: 5px;
      z-index: 5;

      .item {
        width: calc(100% - 28px);
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    .items {
      position: absolute;
      top: 44px;
      left: 0px;
      width: 100%;

      .card {
        max-height: 200px;
        overflow-y: auto;
        z-index: 4;
        background-color: $bgColor;
        .item {
          transition: 0.1s;
          padding: 10px 20px;
          &:hover {
            background-color: var(--hover-col);
          }
        }
      }

    }
  }
</style>
