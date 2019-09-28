<template>
  <div class="ticket-container">
    <div class="ticket">
      <div class="nice" />
      <h2 class="event">
        {{ ticketDecode.event }}
      </h2>
      <h4 class="owner">
        {{ ticketDecode.owner }}
      </h4>
      <img class="qr" :src="ticket.scanQR" />
      <div class="control">
        КОНТРОЛЬ
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      ticketDecode: {
        owner: 'Петров Иван',
        event: 'Выставка современного искусства 24.11',
        scanQR: 'http://qrcoder.ru/code/?ticket%405ff5a77f-7df8-4a1a-90e1-1b8aa0a50f19&4&0'
      }
    }),
    computed: {
      ticket() {
        return this.$route.params.guid;
      }
    },
    mounted() {
      // TODO decode query
    }
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
      .event {
        text-align: center;
      }
      .owner {
        text-align: center;
      }
      .nice {
        position: absolute;
        top: 0px;
        background-color: $bgColor;
        border-radius: 0 0 20px 20px;
        height: 30px;
        width: 80%;
        left: 10%;
      }
      padding-top: 60px;
      padding-bottom: 40px;
      border-radius: 16px;
      width: 100%;
      max-width: 320px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      background-color: $appColor;
      .control {
        border-top: 5px dotted $bgColor;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 40px;
        padding-top: 40px;
        width: 100%;
        font-weight: bold;
        font-size: 20px;
      }
      .qr {
        width: 75%;
        border-radius: 8px;
      }
    }
  }

</style>
