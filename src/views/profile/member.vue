<template>
  <div class="profile-container">
    <x-card rounded elev="3">

    </x-card>
  </div>
</template>

<script>
  export default {
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

  }
</style>
