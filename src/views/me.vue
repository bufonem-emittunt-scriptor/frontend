<template>
  <div class="profile-container">
    <x-card rounded elev="3" color="white" class="card" pa="20px">

      <div class="main-flex">
        <div class="main-user">
          <div class="avatar-container">
            <img
              :src="profile.avatar"
              class="avatar"
            />
          </div>
          <div class="user-info">
            <div class="info-container">
              <div class="fio">
                {{profile.fio || profile.name}} <span class="karma">{{ profile.charm }}</span>
              </div>
              <div class="login">
                {{ profile.login }}
              </div>
            </div>

          </div>
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
    computed: {
      profile() {
        return this.$store.state.gate.user;
      }
    }
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
