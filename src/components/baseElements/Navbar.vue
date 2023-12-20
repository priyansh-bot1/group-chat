<template>
  <BaseHeader theme="enteredChatroom">
    <nav class="container">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid d-flex">
          <a class="navbar-brand" href="#">
            <h1
              class="text-light fontBold"
              :class="theme == 'enteredChatroom' ? 'text-start' : 'text-center'"
            >
              Chat Room
            </h1></a
          >
          <div class="btn-group dropstart">
            <button
              type="button"
              class="btn active dropdown-toggle bg-light text-light"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {{ user.displayName }}
            </button>
            <ul class="dropdown-menu">
              <li class="active">Logged in as {{ user.email }}</li>
              <button
                @click="logoutHandler"
                type="button"
                class="btn text-light logout-btn animated-btn mt-2"
              >
                Logout
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </nav>
  </BaseHeader>
</template>

<script>
import BaseHeader from './BaseHeader.vue';
import useLogout from '../../composables/useLogout';
import getUser from '../../composables/getUser';

export default {
  components: { BaseHeader },

  setup(props, context) {
    const { error, logout } = useLogout();
    const { user } = getUser();

    console.log(`user in nav`, user);

    const logoutHandler = async () => {
      await logout();
      console.log(`werkrrg`);
      context.emit('logoutHandler');
      console.log(`werkrrg11111111111`);

      if (!error.value) {
        console.log(`logged out sucessfully`);
        console.log(user);
        console.log(user.displayName);
      }
    };

    return { logoutHandler, user };
  },
};
</script>
