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
        <h3>Карточка представителя музея</h3>
        <x-input
          v-model="userName"
          caption="Логин"
          width="100%"
          class="field"
          style="margin-top: 8px;"
          :color="sty.appColor"
        />
        <x-input
          v-model="password"
          caption="Пароль"
          type="password"
          width="100%"
          class="field"
          :color="sty.appColor"
        />
        <x-input
          v-model="fio"
          caption="ФИО"
          width="100%"
          class="field"
          style="margin-top: 8px;"
          :color="sty.appColor"
        />
        <x-input
          v-model="vkLink"
          caption="Ссылка VK"
          width="100%"
          class="field"
          :color="sty.appColor"
        />
        <x-input
          v-model="position"
          caption="Должность"
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
      fio: '',
      vkLink: '',
      position: '',
      tel: '',
      email: '',
      userName: '',
      password: ''
    }),
    computed: {
      done() {
        return [
          this.position, this.vkLink, this.fio, this.tel, this.email, this.password, this.userName
        ].filter(x => x !== '').length === 5;
      },
      length() {
        return 'width: ' + [
          this.position, this.vkLink, this.fio, this.tel, this.email, this.password, this.userName
        ].filter(x => x !== '').length * 20 + '%';
      },
      valid() {
        if (this.fio === '') return 'ФИО представителя не заполнены';
        if (this.vkLink === '') return 'Ссылка VK на представителя не указана';
        if (this.position === '') return 'Должность представителя не указана';
        if (this.tel === '') return 'Телефон представителя не указан';
        if (this.email === '') return 'E-mail представителя не указан';
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
