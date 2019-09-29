<template>
  <div class="error-container">
    <div class="error">
      <span class="head">Ой!</span>
      <span class="hint">{{ types }}</span>
      <span class="link" @click="$router.push('/')">На главную</span>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      errorType() {
        return this.$route.params.type;
      },
      types() {
        let typ = {
          'session': 'Сессия была завершена',
          'nopage': 'Такой страницы не существует',
          'device': 'Ваше устрйство не может отобразить эту страницу',
          'server': 'Ошибка на сервере'
        };
        return typ[this.errorType] || 'Неизвестная ошибка';
      }
    }
  }
</script>

<style scoped lang="scss">
  .error-container {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    .error {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .img {
        width: calc(100% - 20px);
        margin: 10px;
        max-width: 460px;
      }
      .head {
        font-size: 82px;
        margin-top: 40px;
        color: $appColor;
      }
      .hint {
        font-size: 16px;
        color: $appColor;
        text-align: center;
      }
      .link {
        font-size: 16px;
        color: grey;
        text-align: center;
        margin-top: 80px;
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }

</style>
