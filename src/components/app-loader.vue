<template>
  <div class="app-loader">
    <svg class="spinner" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
      <circle class="path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
    </svg>
  </div>
</template>

<script>

</script>

<style scoped lang="scss">
  $offset: 187;
  $duration: 1.4s;

  .spinner {
    animation: rotator $duration linear infinite;
  }

  @keyframes rotator {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(270deg); }
  }

  .path {
    stroke-dasharray: $offset;
    stroke-dashoffset: 0;
    transform-origin: center;
    animation: dash $duration ease-in-out infinite;
    stroke: $appColor;
  }

  @keyframes dash {
    0% { stroke-dashoffset: $offset; }
    50% {
      stroke-dashoffset: $offset/4;
      transform:rotate(135deg);
    }
    100% {
      stroke-dashoffset: $offset;
      transform:rotate(450deg);
    }
  }

  .app-loader {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0px;
    left: 0px;
    background-color: white;
    z-index: 98;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
