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
            <img class="img" src="http://public.superjob.ru/images/clients_logos.ru/2246264_e2b7272827d530112d0c686cb4058266.jpg" />
          </div>
          <div class="right-block">
            <h2 class="fio field" @click="goProf">
              {{ 'Понаева Любобь Николаевна' }}
            </h2>


            <x-button dark :color="sty.appColor" width="calc(100% - 20px)" class="field" @click="$router.push('/forvol')">
              <x-icon name="face" ir />
              <span>Для волонтера</span>
            </x-button>
            <x-button dark color="black" width="calc(100% - 20px)" class="field" @click="$router.push('/memo')">
              <x-icon name="chrome_reader_mode" ir />
              <span>Памятка волонтера</span>
            </x-button>
            <x-button dark :color="sty.appColor" width="calc(100% - 20px)" class="field" @click="$router.push('/tickets')">
              <x-icon name="dashboard" ir />
              <span>Мои билеты</span>
            </x-button>

          </div>
        </div>



      </x-card>
      <one-post v-for="(post, index) in posts" :post="post" />
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
    mounted() {
      this.$store.dispatch('getSubscriptions', this.volunteerId);
    },
    methods: {
      goProf() {

      },
    },
    computed: {
      volunteerId() {
        //TODO volunteerId
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
