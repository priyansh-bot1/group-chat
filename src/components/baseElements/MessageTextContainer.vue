<template>
  <div class="container" v-for="(messageItem, index) in message" :key="index">
    <div class="row justify-content-between">
      <div class="col-3">
        <div class="row message-info align-items-center">
          <div class="col p-0">
            <img
              class="avatar"
              src="../../assets/images/avatar.png"
              :style="'max-width: 80px'"
              alt="Avatar"
              style="width: 100%"
            />
            <div class="text-wrap">
              <p class="name mt-0">{{ messageItem.name }}</p>
              <p class="created">{{ messageItem.createdAt }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-8 message-text-container">
        <p class="name">{{ messageItem.message }}</p>
      </div>
      <!-- <div class="col-10">
        <div class="col d-flex flex-column justify-content-center">
          <img
            class="avatar"
            src="../../assets/images/person.svg"
            :style="'max-width: 50px'"
            alt="Avatar"
            style="width: 100%"
          />
          <p class="name">{{ messageItem.name }}</p>
        </div>
      </div> -->
      <!-- <div class="col">
        <p class="name">{{ messageItem.createdAt }}</p>
      </div> -->
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';

export default {
  props: ['message'],
};
</script>

<style scoped lang="scss">
.message-text-container {
  background: #11998e;
  border-radius: 12px 12px 0 12px;
  padding: 15px;
  border: 2px solid white;

  p {
    color: white;
    font-size: 20px;
    line-height: 28px;
    font-weight: 500;
  }
}

.message-info {
  background: transparent;
  border-radius: 0 12px 16px 16px;
  border: 2px solid #11998e;
  //   background: white;
  color: white;
  text-align: center;

  p {
    padding-left: 4px;
    margin-top: 4px;
    margin-bottom: 0 !important;
  }

  .text-wrap {
    background: #11998e;
    padding: 4px 15px 10px;
    border-radius: 0 0 12px 12px;

    .name {
      font-size: 18px;
      line-height: 28px;
      font-weight: 600;
    }

    .created {
      font-size: 14px;
      line-height: 24px;
      font-weight: 400;
    }
  }
}
</style>
