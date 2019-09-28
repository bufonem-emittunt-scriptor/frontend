<template>
  <div class="museum-profile">
    <img src="@/static/imgs/museum.png" class="img" />
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped lang="scss">
  .museum-profile {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .img {
      margin: 10px;
      width: calc(100% - 20px);
      max-width: 720px;
    }
  }
</style>
