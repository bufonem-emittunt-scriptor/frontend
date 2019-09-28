<template>
  <div>
    <qrcode-stream
      @decode="onDecode"
      @init="onInit"
    />
  </div>
</template>

<script>
import { QrcodeStream } from 'vue-qrcode-reader'
import tester from '@/services/mobile-detect';

export default {

  components: { QrcodeStream },

  data () {
    return {
      result: ''
    }
  },
  mounted() {
    if (!tester()) {
      this.$router.push('/error/device');
    }
  },
  methods: {
    onDecode (result) {
      this.result = result;
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

<style>
  .camera,
  .pause-frame {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    background-size: cover;
    max-width: 100%;
    max-height: none !important;
  }
</style>
