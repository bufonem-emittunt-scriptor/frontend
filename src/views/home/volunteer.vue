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
      //TODO getSubscriptions
    },
    computed: {
      posts() {
        return this.$store.state.posts.posts;
      }
    }
  }
</script>

<style scoped lang="scss">

<style>
