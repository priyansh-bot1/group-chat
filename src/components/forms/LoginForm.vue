<template>
  <form @submit.prevent="submitLogin">
    <div class="form-group mb-3">
      <label for="loginEmail">Email address</label>
      <input
        type="email"
        class="form-control"
        id="loginEmail"
        aria-describedby="emailHelp"
        placeholder="Enter email"
        v-model="email"
        required
      />
    </div>
    <div class="form-group mb-3">
      <label for="loginPassword">Password</label>
      <input
        type="password"
        class="form-control"
        id="loginPassword"
        placeholder="Password"
        v-model="password"
        required
      />
    </div>
    <!-- <div class="form-group form-check mb-3">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div> -->
    <button type="submit" class="btn col-12 text-light animated-btn">
      Log in
    </button>
    <p class="error">{{ error }}</p>
  </form>
</template>

<script>
import { ref } from 'vue';
import useLogin from '../../composables/useLogin';

export default {
  setup(props, context) {
    // refs
    const email = ref('');
    const password = ref('');

    const { error, login } = useLogin();

    const submitLogin = async () => {
      await login(email.value, password.value);
      console.log(`Login FOrm`, email.value, password.value);

      if (!error.value) {
        console.log('User Logged In');
        context.emit('login');
      }
    };

    return { email, password, submitLogin, error };
  },

  //
};
</script>
