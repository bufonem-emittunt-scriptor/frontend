<template>
  <div class="signup-page">
    <div class="flex-container">
      <div class="signup-container">
        <div class="user-chooser">
          <div
            class="tile"
            v-ripple
            :style="userType === 'volunteer' ? `border: 8px solid ${sty.appColor}` : `border: 8px solid ${sty.appInactive}`"
            @click="() => userChange('volunteer')"
          >
            <img src="@/static/imgs/volunteer.jpg" class="tile-img" />
          </div>
          <div
            class="tile"
            v-ripple
            :style="userType === 'member' ? `border: 8px solid ${sty.appColor}` : `border: 8px solid ${sty.appInactive}`"
            @click="() => userChange('member')"
          >
            <img src="@/static/imgs/member.jpg" class="tile-img" />
          </div>
          <div
            class="tile"
            v-ripple
            :style="userType === 'museum' ? `border: 8px solid ${sty.appColor}` : `border: 8px solid ${sty.appInactive}`"
            @click="() => userChange('museum')"
          >
            <img src="@/static/imgs/museum.jpg" class="tile-img" />
          </div>
        </div>

        <x-card class="signup-form" rounded pa="10px" :color="sty.bgColor">
          <div class="fields-container">
            <h3 class="field" style="margin-bottom: 40px">Регистрация {{ who }}</h3>
            <transition name="trans" mode="out-in">
              <div v-if="userType === 'volunteer'" key="2">
                <x-input
                  v-model="vol.fio"
                  caption="ФИО"
                  class="field"
                  :color="sty.appColor"
                  width="calc(100% - 16px)"
                />
                <x-row>
                  <x-input
                    v-model="vol.login"
                    caption="Логин"
                    class="field"
                    :color="sty.appColor"
                    width="calc(50% - 10px)"
                  />
                  <x-input
                    v-model="vol.email"
                    caption="E-mail"
                    type="email"
                    :color="sty.appColor"
                    class="field"
                    width="calc(50% - 10px)"
                  />
                </x-row>
                <x-row>
                  <x-input
                    v-model="password"
                    caption="Пароль"
                    type="password"
                    :color="sty.appColor"
                    class="field"
                    width="calc(50% - 10px)"
                  />
                  <x-date-picker
                    v-model="vol.birth"
                    class="field"
                    width="calc(50% - 10px)"
                    caption="Дата рождения"
                    :color="sty.appColor"
                  />
                </x-row>
              </div>
              <div v-if="userType === 'member'" key="3">
                <x-input
                  v-model="mem.code"
                  caption="Код приглашения от музея"
                  class="field"
                  :color="sty.appColor"
                  width="calc(100% - 6px)"
                />
              </div>
              <div v-if="userType === 'museum'" key="1">
                <x-row>
                  <x-input
                    v-model="mus.name"
                    caption="Название музея"
                    class="field"
                    :color="sty.appColor"
                    width="calc(100% - 6px)"
                  />
                </x-row>
                <x-row>
                  <x-input
                    v-model="mus.login"
                    caption="Логин"
                    class="field"
                    :color="sty.appColor"
                    width="50%"
                  />
                  <x-input
                    v-model="password"
                    caption="Пароль"
                    type="password"
                    :color="sty.appColor"
                    class="field"
                    width="50%"
                  />
                </x-row>
              </div>
            </transition>


            <x-button-ns
              class="field"
              style="margin-top: 40px"
              :color="sty.appColor"
              width="calc(100% - 16px)"
              dark
            >
              Зарегистрироваться
            </x-button-ns>

            <div class="alter" v-if="userType === 'volunteer'">
              <div class="alter-login">
                <img src="@/static/imgs/vk-logo.png" class="icon-img" />
              </div>
              <div class="alter-login">
                <img src="@/static/imgs/google-logo.png" class="icon-img" />
              </div>
            </div>

            <div class="donthave" @click="() => authChange('login')">
              У меня есть аккаунт
            </div>
          </div>

        </x-card>


      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['authChange', 'userType', 'userChange'],
    computed: {
      who() {
        if (this.userType === 'museum') {
          return 'музея';
        }
        if (this.userType === 'volunteer') {
          return 'волонтера';
        }
        if (this.userType === 'member') {
          return 'представителя музея';
        }
      }
    },
    data: () => ({
      vol: {
        fio: '',
        email: '',
        login: '',
        birth: null
      },
      mus: {
        name: '',
        login: ''

      },
      mem: {
        code: ''
      },
      password: ''
    })
  }
</script>

<style scoped lang="scss">
  .trans-enter-active {
    transition: all 0.7s ease-in-out;
  }
  .trans-leave-active {
    transition: all 0.7s ease-in-out;
  }
  .trans-enter {
    opacity: 0;
    transform: translateX(100px);
  }
  .trans-leave-to {
    opacity: 0;
    transform: translateX(-100px);
  }

  .flex-container {
    padding-top: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    .signup-container {
      display: flex;
      flex-direction: column;

      .signup-form {
        display: flex;
        align-items: center;
        justify-content: center;
        width: calc(100% - 18px);
        .fields-container {
          display: flex;
          justify-content: center;
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

      .user-chooser {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: calc(100% - 34px);
        margin: 10px;
        max-width: 460px;
        padding: 6px;
        .tile {
          width: 25%;
          border-radius: 50%;
          transition: 0.7s;
          overflow: hidden;
          position: relative;
          margin: 0px;
          .tile-img {
            width: 100%;
          }
        }
      }
    }
  }
</style>
