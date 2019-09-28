<template>
  <div>
    <app-container>
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

<style>
