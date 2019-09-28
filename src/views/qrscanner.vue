<template>
  <div class="cam-container" :style="style">
    <qrcode-stream
      @decode="onDecode"
      @init="onInit"
      :camera="camera"
    />
    <div class="switch-cam" @click="switchCamera">
      <x-icon name="flip_camera_ios" size="32px" />
    </div>
  </div>
</template>

<script>
  import { QrcodeStream } from 'vue-qrcode-reader'
  import tester from '@/services/mobile-detect';

  export default {

    components: { QrcodeStream },

    data () {
      return {
        result: '',
        camera: 'front'
      }
    },
    mounted() {
      if (!tester()) {
        //this.$router.push('/error/device');
      }
    },
    computed: {
      style() {
        return {
          '--height-vp': screen.height + 'px'
        };
      }
    },
    methods: {
      switchCamera () {
        switch (this.camera) {
          case 'front':
            this.camera = 'rear'
            break
          case 'rear':
            this.camera = 'front'
            break
        }
      },
      checkQr() {
        //TODO api
      },
      onDecode (result) {
        this.result = result;
        this.checkQr();
      },
      error(text) {
        this.$store.dispatch('openSnack', {
          color: this.sty.errorColor,
          text,
          icon: 'warning'
        });
      },

      async onInit (promise) {
        try {
          await promise
        } catch (error) {
          if (error.name === 'NotAllowedError') {
            this.error('Не предоставлено разрешение на использование камеры');
          } else if (error.name === 'NotFoundError') {
            this.error('У данного устройства нет камеры');
          } else if (error.name === 'NotSupportedError') {
            this.error('Необходим безопасный контекст');
          } else if (error.name === 'NotReadableError') {
            this.error('Камера уже используется');
          } else if (error.name === 'OverconstrainedError') {
            this.error('Нет подходящей камеры');
          } else if (error.name === 'StreamApiNotSupportedError') {
            this.error('Ваш браузре не поддерживает потоковую технологию');
          }
        }
      }
    }
  }
</script>

<style lang="scss">
  .cam-container {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .switch-cam {
      position: fixed;
      left: calc(50% - 40px);
      bottom: 40px;
      width: 80px;
      height: 80px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 16px 24px 2px rgba(0, 0, 0, .14), 0 6px 30px 5px rgba(0, 0, 0, .12), 0 8px 10px -5px rgba(0, 0, 0, .20);
      background-color: white;
      &:active {
        box-shadow: 0 8px 10px 1px rgba(0, 0, 0, .14), 0 3px 14px 2px rgba(0, 0, 0, .12), 0 5px 5px -3px rgba(0, 0, 0, .20);
      }
    }
  }

  .camera,
  .pause-frame {
    height: var(--height-vp);
    background-size: cover;
    background-repeat: repeat;
    max-width: none !important;
    max-height: none !important;
  }
</style>
