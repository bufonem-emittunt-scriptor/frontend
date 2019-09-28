<template>
  <div class="museum-profile">
    <img src="@/static/imgs/museum.png" class="img" />
    <h2>{{ 'Политехнический музей' }}</h2>
    <x-button color="black" dark style="margin-bottom: 18px;" @click="openDialog">
      <x-icon name="group_add" ir />
      {{ 'Добавить представителя' }}
    </x-button>
    <div class="members">
      <h3 class="head">Все представители ({{ members.length }})</h3>
      <div
        v-for="(member, index) in members"
        :key="index"
        class="member"
        @click="() => goUser(member.id)"
        :style="`background-image: url(${member.ava})`"
      />
    </div>
    <x-dialog v-model="editDialog" max-width="460px">
      <div class="flex">
        <x-input
          nativeType="email"
          v-model="email"
          caption="E-mail представителя"
          style="width: 100%;"
        />
        <x-input
          nativeType="text"
          v-model="fio"
          caption="ФИО представителя"
          style="width: 100%; margin-top: 20px;"
        />
        <x-button
          :color="sty.appColor"
          dark
          style="margin-top: 20px;"
          @click="send"
          :valid="valid"
        >
          Отправить
        </x-button>
      </div>
    </x-dialog>
  </div>
</template>

<script>
  export default {
    data: () => ({
      editDialog: false,
      email: '',
      fio: ''
    }),
    methods: {
      goUser(id) {
        this.$router.push('/profile/' + id);
      },
      openDialog() {
        this.editDialog = true;
      },
      send() {
        this.editDialog = false;
        //TODO api request
        //
        //

        this.email = '';
        this.fio = '';
      }
    },
    computed: {
      valid() {
        if (this.email === '') return 'Не заполнен e-mail';
        if (this.fio === '') return 'ФИО не заполнены';
        return true;
      },
      members() {
        return [
          {
            ava: 'http://notillusion.ru/images/i/bukva-a.jpg'
          },
          {
            ava: 'http://public.superjob.ru/images/clients_logos.ru/2246264_e2b7272827d530112d0c686cb4058266.jpg'
          },
          {
            ava: 'http://public.superjob.ru/images/clients_logos.ru/2246264_e2b7272827d530112d0c686cb4058266.jpg'
          },
          {
            ava: 'http://public.superjob.ru/images/clients_logos.ru/2246264_e2b7272827d530112d0c686cb4058266.jpg'
          },
          {
            ava: 'http://public.superjob.ru/images/clients_logos.ru/2246264_e2b7272827d530112d0c686cb4058266.jpg'
          },
          {
            ava: 'http://public.superjob.ru/images/clients_logos.ru/2246264_e2b7272827d530112d0c686cb4058266.jpg'
          },
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
  .museum-profile {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .flex {
      flex-direction: column;
      background-color: $bgColor;
    }
    .members {
      width: 100%;
      max-width: 720px;
      .head {
        margin: 10px;
      }
      .member{
        margin: 10px;
        width: calc(25% - 20px);
        position: relative;
        padding-top: calc(25% - 20px);
        display: inline-block;
        overflow: hidden;
        border-radius: 50%;
        box-shadow: 0 3px 4px 0 rgba(0, 0, 0, .14), 0 3px 3px -2px rgba(0, 0, 0, .12), 0 1px 8px 0 rgba(0, 0, 0, .20);
        background-size: cover;
        background-repeat: no-repeat;
        transition: 0.7s;
        cursor: pointer;
        &:hover {
          box-shadow: 0 6px 10px 0 rgba(0, 0, 0, .14), 0 1px 18px 0 rgba(0, 0, 0, .12), 0 3px 5px -1px rgba(0, 0, 0, .20);
        }
      }
    }
    .img {
      margin: 10px;
      width: calc(100% - 20px);
      max-width: 720px;
    }
  }
</style>
