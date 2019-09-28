<template>
  <div class="event-creator-page">
    <h3>Новое мероприятие</h3>
    <x-row>
      <x-input
        nativeType="text"
        width="50%"
        caption="Название мероприятия"
        v-model="title"
        style="margin-right: 5px;"
      />
      <x-upload
        ref="upload"
        v-model="files"
        post-action="/post.method"
        put-action="/put.method/"
        @input-file="inputFile"
        @input-filter="inputFilter"
        class="upload"
        style="width: 50%"
      >
        <x-icon :name="files.length > 0 ? 'cloud_done' : 'cloud_upload'" ir />
        Загрузить обложку
      </x-upload>
    </x-row>

    <div class="ec-container">
      <vue-editor id="eventCreator" v-model="content"></vue-editor>
    </div>

    <x-button :color="sty.appColor" dark style="margin-top: 20px; width: 20%; margin-left: 80%; margin-bottom: 10px;">
      Создать
    </x-button>

    <!-- <button v-show="!$refs.upload || !$refs.upload.active" @click.prevent="$refs.upload.active = true" type="button">Start upload</button>
    <button v-show="$refs.upload && $refs.upload.active" @click.prevent="$refs.upload.active = false" type="button">Stop upload</button> -->

  </div>
</template>

<script>
  import { VueEditor } from "vue2-editor";
  import tester from '@/services/mobile-detect.js';

  export default {
    data: () => ({
      content: '',
      title: '',
      files: []
    }),
    mounted() {
      if (tester()) {
        this.$router.push('/error/device');
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
      }
    },
    components: {
      VueEditor
    }
  }
</script>

<style scoped lang="scss">
  .event-creator-page {
    width: calc(100% - 24px);
    max-width: 1080px;
    margin: auto;
    margin-top: 70px;
    padding: 12px;
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
      margin-left: 5px;
    }
    .ec-container {
      border-radius: 10px;
      border: 1px solid $borderColor;
      overflow: hidden;
      margin-top: 20px;
      background-color: white;
    }
  }

</style>
