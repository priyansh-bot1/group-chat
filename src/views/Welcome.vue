<template>
  <BaseHeader theme="bold-blue"></BaseHeader>
  <div class="card bg-light p-4">
    <div v-if="showLogin">
      <h2 class="text-center">Login</h2>
      <LoginForm @login="enterChat" />
      <p class="mt-3">
        No account yet
        <span class="open-link" @click="loginToggle">Sign up </span>
      </p>
    </div>
    <div v-else>
      <h2 class="text-center">Sign up</h2>
      <signup-form @signUp="enterChat" />
      <p class="mt-3 log-text">
        Already have an account
        <span class="open-link" @click="loginToggle">Login </span>
      </p>
    </div>
  </div>
</template>

<script>
import BaseHeader from '../components/baseElements/BaseHeader.vue';
import SignupForm from '../components/forms/SignupForm.vue';
import LoginForm from '../components/forms/LoginForm.vue';
import { useRouter } from 'vue-router';

export default {
  props: ['theme'],

  components: { BaseHeader, SignupForm, LoginForm },

  data() {
    return {
      showLogin: true,
      router: useRouter(),
    };
  },

  methods: {
    loginToggle() {
      this.showLogin = !this.showLogin;
    },

    enterChat() {
      console.log('enter');
      this.router.push({ name: 'chatroom' });
      console.log(`log status`, this.showLogin);
    },
  },
};
</script>

<style scoped lang="scss">
/* .log-text {
  color: white !important;
} */
</style>
