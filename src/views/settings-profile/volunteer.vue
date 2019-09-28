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
        <div class="down-loader" :style="length" />
        <div class="done" :style="done ? 'top: -10px' : 'top: -60px'">
          <x-icon name="done" />
        </div>
        <h3>Карточка волонтера</h3>
        <x-row ai="center" jc="space-between">
          <x-input
            v-model="userName"
            caption="Логин"
            width="100%"
            class="field"
            style="margin-right: 8px;"
            :color="sty.appColor"
          />
          <x-input
            v-model="password"
            caption="Пароль"
            type="password"
            width="100%"
            class="field"
            style="margin-left: 8px;"
            :color="sty.appColor"
          />
        </x-row>
        <x-input
          v-model="fio"
          caption="ФИО"
          class="field"
          :color="sty.appColor"
        />
        <x-row ai="center" jc="space-between">
          <x-input
            v-model="tel"
            caption="Телефон"
            style="margin-right: 8px;"
            class="field"
            width="100%"
            :color="sty.appColor"
          />
          <x-input
            v-model="email"
            caption="E-mail"
            width="100%"
            style="margin-left: 8px;"
            class="field"
            :color="sty.appColor"
          />
        </x-row>
        <x-input
          v-model="vkLink"
          caption="Ссылка VK"
          width="100%"
          class="field"
          :color="sty.appColor"
        />
        <x-input
          v-model="workPlace"
          caption="Место работы"
          class="field"
          :color="sty.appColor"
        />
        <x-input
          v-model="speciality"
          caption="Специальность"
          class="field"
          :color="sty.appColor"
        />

        <x-input
          v-model="experience"
          caption="Опыт"
          class="field"
          :color="sty.appColor"
        />
        <x-input
          v-model="curiosityProjects"
          caption="Наиболее интересные для Вас проекты"
          class="field"
          :color="sty.appColor"
        />
        <x-input
          v-model="childrenExp"
          caption="Опыт работы с детьми"
          class="field"
          :color="sty.appColor"
        />
        <x-input
          v-model="additionalSkills"
          caption="Дополнительные навыки"
          class="field"
          :color="sty.appColor"
        />
        <x-picker
          v-model="clothSize"
          :items="sizes"
          caption="Размер одежды"
          class="field"
          :color="sty.appColor"
        />
        <x-input
          v-model="expectations"
          caption="Ожидания от проекта"
          class="field"
          :color="sty.appColor"
        />
        <x-input
          v-model="medContr"
          caption="Медицинские противопоказания"
          class="field"
          :color="sty.appColor"
        />
        <x-input
          v-model="foodPref"
          caption="Предпочтения в еде"
          class="field"
          :color="sty.appColor"
        />
        <x-input
          v-model="howDidFindOut"
          caption="Как Вы о нас узнали"
          class="field"
          :color="sty.appColor"
        />
        <x-input
          v-model="whyInterest"
          caption="Почему Вам интересно с нами сотрудничать"
          class="field"
          :color="sty.appColor"
        />
        <x-upload
          ref="upload"
          v-model="files"
          post-action="/post.method"
          put-action="/put.method/"
          @input-file="inputFile"
          @input-filter="inputFilter"
          class="upload field"
        >
          <x-icon :name="files.length > 0 ? 'cloud_done' : 'cloud_upload'" ir />
          Ваше фото
        </x-upload>

        <p-input
          type="checkbox"
          name="check"
          class="p-round"
          color="warning"
          v-model="newsConsumer"
        >
          Подписаться на обновления
        </p-input>

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
      files: [],
      sizes: [
        'XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'
      ],
      fio: '',
      vkLink: '',
      position: '',
      tel: '',
      email: '',
      userName: '',
      password: '',
      workPlace: '',
      speciality: '',
      experience: '',
      curiosityProjects: '',
      childrenExp: '',
      additionalSkills: '',
      expectations: '',
      medContr: '',
      foodPref: '',
      clothSize: '',
      howDidFindOut: '',
      whyInterest: '',
      newsConsumer: false
    }),
    computed: {
      done() {
        return [
          this.medContr, this.curiosityProjects, this.childrenExp, this.expectations, this.foodPref, this.clothSize,
          (this.files.length === 0 ? '' : 'ok'), this.howDidFindOut, this.whyInterest
        ].filter(x => x !== '').length === 9;
      },
      length() {
        return 'width: ' + [
          this.medContr, this.curiosityProjects, this.childrenExp, this.expectations, this.foodPref, this.clothSize,
          (this.files.length === 0 ? '' : 'ok'), this.howDidFindOut, this.whyInterest
        ].filter(x => x !== '').length * 11.11 + '%';
      },
      valid() {
        if (this.fio === '') return 'ФИО представителя не заполнены';
        if (this.vkLink === '') return 'Ссылка VK на представителя не указана';
        if (this.tel === '') return 'Телефон представителя не указан';
        if (this.email === '') return 'E-mail представителя не указан';
        return true;
      }
    },
    methods: {
      inputFile: function (newFile, oldFile) {
        if (newFile && oldFile && !newFile.active && oldFile.active) {
          console.log('response', newFile.response)
          if (newFile.xhr) {
            console.log('status', newFile.xhr.status)
          }
        }
      },
      inputFilter: function (newFile, oldFile, prevent) {
        if (newFile && !oldFile) {
          if (!/\.(jpeg|jpe|jpg|gif|png|webp)$/i.test(newFile.name)) {
            return prevent()
          }
        }

        newFile.blob = ''
        let URL = window.URL || window.webkitURL
        if (URL && URL.createObjectURL) {
          newFile.blob = URL.createObjectURL(newFile.file)
        }
      },
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
    .down-loader {
      transition: .8s;
      position: absolute;
      bottom: 0px;
      left: 0px;
      height: 4px;
      background-color: $appColor;
    }
    .upload {
      height: calc(44px - 2px);
      border: 1px solid $borderColor;
      color: $borderColor;
      background-color: white;
      border-radius: 5px;
      padding-left: 8px;
      padding-right: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
</style>
