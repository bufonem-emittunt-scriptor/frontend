<template>
  <div class="pdf-container">
    <object width="100%" height="100%" data="/for-volunteers.pdf" type="application/pdf"></object>
  </div>
</template>

<style scoped lang="scss">
  .pdf-container {
    position: fixed;
    top: 64px;
    left: 0px;
    width: 100%;
    height: calc(100% - 64px);
  }
</style>
