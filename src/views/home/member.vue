<template>
  <div>
    <app-container>
      <x-card
        class="member-control"
        :color="sty.bgColor"
        rounded
      >
        <div class="flex">
          <div class="avatar" @click="goProf">
            <img class="img" :src="user.avatar" />
          </div>
          <div class="right-block">
            <h2 class="fio field" @click="goProf">
              {{ user.fio }}
            </h2>


            <x-button dark :color="sty.appColor" width="calc(100% - 20px)" class="field" @click="$router.push('/newevent')">
              <x-icon name="add" ir />
              <span>Создать мероприятие</span>
            </x-button>
            <x-button dark color="black" width="calc(100% - 20px)" class="field" @click="$router.push('/settings-profile')">
              <x-icon name="person" ir />
              <span>Настроить профиль</span>
            </x-button>
            <x-button dark :color="sty.appColor" width="calc(100% - 20px)" class="field" @click="$router.push('/settings-museum')">
              <x-icon name="museum" ir />
              <span>Настроить музей</span>
            </x-button>
            <x-button dark color="black" width="calc(100% - 20px)" class="field" @click="$router.push('/ticketpass')">
              <x-icon name="extension" ir />
              <span>Проверка билетов</span>
            </x-button>
          </div>
        </div>



      </x-card>
      <h3 class="field" style="margin-top: 40px; margin-bottom: 20px">Мероприятия Вашего музея ({{ posts.length }})</h3>
      <one-post v-for="(post, index) in posts" :post="post" cant-go />
    </app-container>
  </div>
</template>

<script>
  import AppContainer from '@/components/app-container.vue';
  import OnePost from '@/components/post.vue';

  export default {
    components: {
      AppContainer,
      OnePost
    },
    data: ()=>{
      return {
        currItem: null,
        pickerItems: [
          'one item',
          'two item',
          'three item',
          'four item'
        ]
      }
    },
    mounted() {
      this.$store.dispatch('getMuseumPost', this.museumId);
    },
    methods: {
      goProf() {

      },
      setPicker(e){
        this.currItem = e;
      }
    },
    computed: {
      user() {
        return this.$store.state.gate.user;
      },
      museumId() {
        //return TODO museumId
      },
      posts() {
        return this.$store.state.posts.posts;
      }
    }
  }
</script>

<style scoped lang="scss">
  .member-control {
    .flex {
      width: 100%;
      align-items: center;
      justify-content: center;
      display: flex;
      flex-direction: column;
      .avatar {
        width: 20%;
        cursor: pointer;
        .img {
          width: 100%;
          border-radius: 50%;
        }
      }
      .right-block {
        .fio {
          width: 100%;
          text-align: center;
          display: block;
          margin-bottom: 20px !important;
          cursor: pointer;
          &:hover {
            text-decoration: underline;
          }
        }
        .field {
          margin: 8px;
          max-width: 400px;
        }
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100%;
      }
    }
    width: calc(100% - 20px);
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
