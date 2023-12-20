<template>
  <div>
    <Navbar @logoutHandler="logout"></Navbar>
    <div class="container w-70">
      <CommonWindow></CommonWindow>
      <hr />
      <NewChatForm></NewChatForm>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/baseElements/Navbar.vue';
import getUser from '@/composables/getUser';
import NewChatForm from '../components/baseElements/NewChatForm.vue';
import CommonWindow from '@/components/baseElements/CommonWindow.vue';

// get current user using getUser composable
// whatch the current user for change
// redirect the user to welcome page when logged out

export default {
  components: { Navbar, NewChatForm, CommonWindow },

  methods: {
    logout() {
      const { user } = getUser();
      if (!user.displayName) {
        this.$router.replace({ path: '/' });
      }
      // this.router.push({ name: 'welcome' });
      // router.replace({ path: '/' });
      console.log(`logout clicked from chatroom page USER: user: `, user);
    },
  },
};
</script>
