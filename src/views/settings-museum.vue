<template>
  <div>
    <app-container>
      <x-card
        elev="3"
        rounded
        class="card"
        pa="10px"
      >
        <div class="loader" :style="length" />
        <div class="done" :style="done ? 'top: -10px' : 'top: -60px'">
          <x-icon name="done" />
        </div>
        <h3>Карточка музея</h3>
        <x-input
          v-model="name"
          caption="Название музея"
          width="100%"
          class="field"
          style="margin-top: 8px;"
          :color="sty.appColor"
        />
        <x-input
          v-model="address"
          caption="Фактический. адрес музея"
          width="100%"
          class="field"
          :color="sty.appColor"
        />
        <x-input
          v-model="tel"
          caption="Телефон"
          class="field"
          :color="sty.appColor"
        />
        <x-input
          v-model="email"
          caption="E-mail"
          class="field"
          :color="sty.appColor"
        />
        <x-button
          color="green"
          dark
          style="margin-top: 4px; width: 30%; margin-left: 70%; margin-bottom: 10px;"
          @click="save"
          :valid="valid"
        >
          <x-icon name="save" ir />
          Сохранить
        </x-button>
      </x-card>
    </app-container>
  </div>
</template>

<script>
  import AppContainer from '@/components/app-container.vue';

  export default {
    data: () => ({
      name: '',
      address: '',
      tel: '',
      email: ''
    }),
    computed: {
      done() {
        return [this.name, this.address, this.tel, this.email].filter(x => x !== '').length === 4;
      },
      length() {
        return 'width: ' + [this.name, this.address, this.tel, this.email].filter(x => x !== '').length * 25 + '%';
      },
      valid() {
        if (this.name === '') return 'Название музея не заполнено';
        if (this.address === '') return 'Адрес музея не заполнен';
        if (this.tel === '') return 'Телефон музея не заполнен';
        if (this.email === '') return 'E-mail музея не заполнен';
        return true;
      }
    },
    methods: {
      save() {
        // TODO api requset
      }
    },
    components: {
      AppContainer
    }
  }
</script>

<style scoped lang="scss">
  .field {
    margin-bottom: 16px
  }
  .card {
    flex-direction: column;
    position: relative;
    .done {
      position: absolute;
      transition: .8s;
      transition-delay: 0.4s;
      right: 70px;
      width: 60px;
      height: 60px;
      align-items: center;
      justify-content: center;
      display: flex;
      background-color: $appColor;
      color: white;
      border-radius: 0 0 50% 50%;
    }
    .loader {
      transition: .8s;
      position: absolute;
      top: 0px;
      left: 0px;
      height: 4px;
      background-color: $appColor;
    }
  }
</style>
