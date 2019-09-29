<template>
  <div class="profile-container">
    <x-card rounded elev="3" color="white" class="card" pa="20px">

      <div class="main-flex">
        <div class="main-user">
          <div class="avatar-container">
            <img
              src="https://cache3.youla.io/files/images/780_780/5b/1c/5b1c040f66fb0792d807a6a3.jpg"
              class="avatar"
            />
          </div>
          <div class="user-info">
            <div class="info-container">
              <div class="fio">
                Васильев Сергей <span class="karma">+41</span>
              </div>
              <div class="login">
                @servas74
              </div>
            </div>

          </div>
        </div>
        <div class="achievments">
          <h3>Достижения</h3>
          <ach-list :list="['badboy','curious_1','curious_5','curious_10','cyberpunk','king','leader','month_user','month_user','new_user','real_curious','real_vol','respect','vol_1','vol_5','year_user','vol_10']" />
        </div>

        <div class="bio">
          <h3>Биография</h3>
          Я, Сергей Иванович Васильев, родился 12 апреля 1974 года в г. Красный Лиман Донецкой области (Украина).

Мать – Васильева Татьяна Степановна, 1951 года рождения, украинка, имеет высшее педагогическое образование, работала педагогом (воспитателем в детском саду, затем школьным учителем), пенсионер. Проживает по адресу: г. Красный Лиман Донецкой обл., ул. Железнодорожная, 123.

Отец – Васильев Иван Сергеевич, 1950 года рождения, русский, рабочий со средним техническим образованием, работал машинистом электровоза, пенсионер. Сейчас проживает по адресу: г. Лозовая Харьковской обл., ул. Рылеева, 47.

В 1981 году пошел в 1 класс Краснолиманской средней школы № 3 в родном городе Красный Лиман, а в 1989 году получил неполное среднее образование и поступил в Донецкий экономический техникум на специальность техник-технолог, который успешно окончил в 1993 году.

С 1993 по 1995 год – служба в армии (ракетные войска, старший сержант запаса).
        </div>
      </div>


    </x-card>
  </div>
</template>

<script>
  import AchList from '@/components/ach-list.vue';
  export default {
    components: {
      AchList
    },
    props: ['profile']
  }
</script>

<style scoped lang="scss">
  .profile-container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .card {
      margin: 10px;
      width: 100%;
      margin-top: 20px;
      max-width: 640px;
      .main-flex {
        display: flex;
        flex-direction: column;
        width: 100%;
        .main-user {
          display: flex;
          width: 100%;
          flex-direction: row;
          .user-info {
            margin-left: 20px;
            align-items: center;
            display: flex;
            width: calc(78% - 20px);
            .info-container {
              display: flex;
              flex-direction: column;
              .fio {
                font-weight: bold;
                font-size: 22px;
                .karma {
                  padding: 2px;
                  padding-left: 4px;
                  padding-right: 4px;
                  background-color: #E4E4E4;
                  margin-left: 5px;
                  border-radius: 8px;
                }
              }
              .login {
                font-size: 16px;
                color: grey;
              }
            }
          }
          .avatar-container {
            overflow: hidden;
            border-radius: 50%;
            width: 22%;
            .avatar {
              width: 100%;
            }
          }
        }
        .bio {
          margin-top: 20px;
        }
        .achievments {
          margin-top: 20px;
        }
      }
    }
  }
</style>
