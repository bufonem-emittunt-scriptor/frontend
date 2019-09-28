<template>
  <div class="auth">
    <transition name="trans" mode="out-in">
      <div v-if="authType === 'login'" key="1">
        <LoginForm :authChange="authChange" />
      </div>
      <div v-if="authType === 'signup'" key="2">
        <SignupForm :authChange="authChange" :userType="userType" :userChange="userChange"/>
      </div>
    </transition>
  </div>
</template>

<script>
  import LoginForm from './login.vue';
  import SignupForm from './signup.vue';

  export default {
    data: () => ({
      userType: 'volunteer',
      authType: 'login',
      date: null
    }),
    methods: {
      authChange(value) {
        this.authType = value;
      },
      userChange(value) {
        this.userType = value;
      }
    },
    components: {
      LoginForm,
      SignupForm
    }
  }
</script>

<style scoped lang="scss">
  .auth {
    .trans-enter-active {
      transition: all 0.7s ease-in-out;
    }
    .trans-leave-active {
      transition: all 0.7s ease-in-out;
    }
    .trans-enter, .trans-leave-to {
      opacity: 0;
    }
  }
</style>
