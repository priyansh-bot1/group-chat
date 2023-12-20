<template>
  <div class="chat-window">
    <div v-if="error" class="error">{{ error }}</div>
    <div v-if="docs" class="chat-messages" ref="chatWindow">
      <div
        class="messege-tem-wrap"
        v-for="(messageDoc, index) in formatDocument"
        :key="messageDoc.id"
      >
        <!-- <div>{{ messageDoc.createdAt }}</div> -->
        <!-- <div class="ftbold">{{ messageDoc.name }}</div>
        <div>{{ messageDoc.message }}</div> -->
        <MessageTextContainer :message="{ messageDoc }"></MessageTextContainer>
      </div>
    </div>
    <div v-else class="col-12 d-flex justify-content-center">
      <img src="../../assets/images/spinner.svg" alt="" />
    </div>
  </div>
</template>

<script>
import getCollections from '@/composables/getCollections';
import { formatDistanceToNow } from 'date-fns';
import { computed, onUpdated, ref } from 'vue';
import MessageTextContainer from './MessageTextContainer.vue';

export default {
  components: { MessageTextContainer },

  setup(props) {
    const { docs, error } = getCollections('messages');
    console.log(`docs`, docs);
    console.log(`error`, error);

    const formatDocument = computed(() => {
      if (docs.value) {
        return docs._rawValue.map((doc) => {
          let time = formatDistanceToNow(doc.createdAt.toDate());
          return { ...doc, createdAt: time };
        });
      }
    });

    // auto scroll to message window bottom

    const chatWindow = ref(null);

    onUpdated(() => {
      chatWindow.value.scrollTop = chatWindow.value.scrollHeight;
    });

    return { docs, error, formatDocument, chatWindow };
  },
};
</script>
