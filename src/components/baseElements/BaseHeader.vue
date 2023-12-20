<template>
  <div class="header-wrap bg-primary">
    <div>
      <h1
        class="text-light fontBold"
        :class="theme == 'enteredChatroom' ? 'd-none' : 'text-center'"
      >
        Chat Room
      </h1>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { start } from '@popperjs/core';

export default {
  props: ['theme'],

  data() {
    return {
      setTheme: this.theme,
    };
  },
};
</script>

<style scoped>
.header-wrap {
  padding: 20px;
  margin-bottom: 40px;

  background: #11998e; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #38ef7d,
    #11998e
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #38ef7d,
    #11998e
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
