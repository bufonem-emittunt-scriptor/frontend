<template>
  <div class="profile-container">
    <x-card rounded elev="3" color="white" class="card" pa="20px">

      <div class="main-flex">
        <div class="main-user">
          <div class="avatar-container">
            <img
              src="http://public.superjob.ru/images/clients_logos.ru/2246264_e2b7272827d530112d0c686cb4058266.jpg"
              class="avatar"
            />
          </div>
          <div class="user-info">
            <div class="info-container">
              <div class="fio">
                Петров Сергей <span class="karma">+123</span>
              </div>
              <div class="login">
                @gomad
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
          sdfsdf
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
            width: calc(80% - 20px);
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
            width: 20%;
            .avatar {
              width: 100%;
            }
          }
        }
        .achievments {
          margin-top: 20px;
        }
      }
    }
  }
</style>
