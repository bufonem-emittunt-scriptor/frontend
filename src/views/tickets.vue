<template>
  <div>
    <app-container>
      <x-card
        class="ticket"
        elev="3"
        rounded
        :color="sty.appColor"
        v-for="(tick, index) in tickets"
        :key="index"
        @click="goTicket(tick.link)"
      >
        Билет {{ tick.link.split('-')[2] }}@{{ tick.link.split('-')[1] }}
      </x-card>
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
    methods: {
      goTicket(link) {
        this.$router.push(link);
      },
    },
    computed: {
      tickets() {
        return [
          { link: '/ticket/7fc44333-1418-4b17-a777-1578ab231e7b' }
        ]
      },
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
  .ticket {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    width: calc(100% - 60px);
    padding: 20px;
    font-weight: bold;
    color: white;
    font-size: 20px;
  }
</style>
