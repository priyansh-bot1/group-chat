<template>
  <div class="row mt-4 texting-wrap">
    <form @submit.prevent="send">
      <div class="div d-flex justify-content-between">
        <div class="col-9">
          <textarea
            class="w-100 mr-2"
            cols="50"
            rows="5"
            placeholder="..Hit enter or send button to send"
            @keyup.enter="send"
            v-model="textMessage"
          ></textarea>
        </div>
        <div class="col-2">
          <button class="btn animated-btn w-100">
            Send
            <span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-send"
                viewBox="0 0 16 16"
              >
                <path
                  d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </form>
    <div class="col-2">
      <div class="error">{{ error }}</div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { timestamp } from '@/firebase/config';
import getUser from '../../composables/getUser';
import useCollections from '../../composables/useCollections';
import { Alert } from 'bootstrap';

export default {
  setup(props, context) {
    const textMessage = ref('');
    const { user } = getUser();
    const { addDocument, error } = useCollections('messages');

    const send = async () => {
      const chat = {
        name: user._rawValue.displayName,
        message: textMessage.value,
        createdAt: timestamp(),
      };
      if (textMessage.value) {
        addDocument(chat);
      } else {
        alert('Please type a message before sending');
      }

      if (!error.value) {
        textMessage.value = '';
      }

      console.log(`chat : `, chat);
    };
    return { textMessage, send, error };
  },
};
</script>

<style scoped lang="scss">
textarea,
.btn {
  border: none;
  height: 40px;
  border-radius: 8px;
  font-family: monospace;
  border: 1px solid grey;
  min-height: 40px;
}
</style>
