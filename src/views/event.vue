<template>
  <div>
    <app-container>
      <x-card elev="3" pa="20px" rounded class="card" color="white">
        <h3>{{ post.title }} TODO</h3>
        <div class="content" v-html="post.content" />
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
    mounted() {
      this.$store.dispatch('getPost', this.postId);
    },
    computed: {
      postId() {
        return this.$route.params.id;
      },
      post() {
        return this.$store.state.posts.post;
      }
    }
  }
</script>

<style scoped lang="scss">
  .card {
    width: calc(100% - 40px);
  }
  .content {
    width: calc(100% - 40px);
  }
<style>
