<template>
  <div class="login-page">
    <div class="flex-container">
      <img src="@/static/imgs/onlogin.png" class="login-image" />
      <x-card class="login-form" rounded pa="10px" :color="sty.bgColor">
        <div class="fields-container">
          <h3 class="field" style="margin-bottom: 40px">Вход</h3>
          <x-input
            v-model="user"
            caption="Логин"
            class="field"
            :color="sty.appColor"
          />
          <x-input
            v-model="password"
            type="password"
            caption="Пароль"
            :color="sty.appColor"
            class="field"
          />

          <div class="forgot" @click="() => $router.push('/restore')">
            Я забыл пароль
          </div>

          <x-button-ns
            class="field"
            style="margin-top: 40px"
            :color="sty.appColor"
            width="calc(100% - 16px)"
            dark
          >
            Войти
          </x-button-ns>
          <div class="alter">
            <div class="alter-login">
              <img src="@/static/imgs/vk-logo.png" class="icon-img" />
            </div>
            <div class="alter-login">
              <img src="@/static/imgs/google-logo.png" class="icon-img" />
            </div>
          </div>

          <div class="donthave" @click="() => authChange('signup')">
            У меня нет аккаунта
          </div>
        </div>

      </x-card>

    </div>
  </div>
</template>

<script>
  export default {
    props: ['authChange'],
    data: () => ({
      user: '',
      password: ''
    })
  }
</script>

<style scoped lang="scss">
  .login-image {
    width: calc(100% - 36px);
    max-width: 460px;
    margin: 18px;
    margin-bottom: 20px;
  }
  .flex-container {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .login-form {
      margin: 10px;
      width: calc(100% - 20px);
      max-width: 320px;
      .fields-container {
        display: flex;
        flex-direction: column;
        width: 100%;
        .field {
          margin: 8px;
        }
        .alter {
          width: 100%;
          align-items: center;
          justify-content: center;
          display: flex;
          .alter-login {
            width: 34px;
            margin: 8px;
            display: inline-block;
            .icon-img {
              width: 100%;
            }
          }
        }
        .forgot {
          text-align: center;
          width: 100%;
          color: grey;
          margin-top: 0px;
          cursor: pointer;
          text-decoration: underline;
        }

        .donthave {
          text-align: center;
          width: 100%;
          color: grey;
          margin-top: 40px;
          cursor: pointer;
          text-decoration: underline;
        }
      }
    }
  }
</style>
