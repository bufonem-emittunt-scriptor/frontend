<template>
  <div class="ticket-container">
    <div class="ticket">
      <div class="nice" />
      <h2>
        Выставка чего то
      </h2>
      <h4>
        Петров Иван
      </h4>
      <img class="qr" src="http://qrcoder.ru/code/?ticket%405ff5a77f-7df8-4a1a-90e1-1b8aa0a50f19&4&0" />
    </div>
  </div>
</template>

<script>

  /*
    guid
    event
    qrLink
    Name
  */

  export default {
    props: ['ticket']
  }
</script>

<style scoped lang="scss">
  .ticket-container {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    .ticket {
      position: relative;
      .nice {
        position: absolute;
        top: 0px;
        background-color: red;
        border-radius: 0 0 20px 20px;
        height: 30px;
        width: 80%;
        left: 10%;
      }
      padding-top: 60px;
      padding-bottom: 40px;
      border-radius: 16px;
      width: 100%;
      max-width: 240px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      background-color: yellow;
      box-shadow: 0 12px 17px 2px rgba(0, 0, 0, .14), 0 5px 22px 4px rgba(0, 0, 0, .12), 0 7px 8px -4px rgba(0, 0, 0, .20);
      .qr {
        width: 75%;
        border-radius: 8px;
      }
    }
  }

</style>
