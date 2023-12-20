<template>
  <form @submit.prevent="submitSignup">
    <div class="form-group mb-3">
      <label for="exampleInputName">Name</label>
      <input
        type="text"
        class="form-control"
        id="exampleInputName"
        aria-describedby="nameHelp"
        placeholder="Enter name"
        v-model="displayName"
        required
      />
      <small id="emailHelp" class="form-text log-text"
        >We'll never share your data with anyone else.</small
      >
    </div>
    <div class="form-group mb-3">
      <label for="exampleInputEmail1">Email address</label>
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Enter email"
        v-model="email"
        required
      />
    </div>
    <div class="form-group mb-3">
      <label for="exampleInputPassword1">Password</label>
      <input
        type="password"
        class="form-control"
        id="exampleInputPassword1"
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
      Sign up
    </button>
    <p class="error">{{ error }}</p>
  </form>
</template>

<script>
import { ref } from 'vue';
import useSignup from '../../composables/useSignup';

export default {
  setup(props, context) {
    const { error, signup } = useSignup();
    // refs
    const displayName = ref('');
    const email = ref('');
    const password = ref('');

    const submitSignup = async () => {
      await signup(email.value, password.value, displayName.value);
      console.log(
        `User Signed Up form data`,
        displayName.value,
        email.value,
        password.value
      );

      if (!error.value) {
        context.emit('signUp');
      }
    };

    return { displayName, email, password, submitSignup, error };
  },

  //
};
</script>

<style scoped>
form btn {
  border: 2px color white !important;
}
</style>
