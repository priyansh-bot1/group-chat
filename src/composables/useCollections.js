import { ref } from 'vue';
import { projectFirestore } from '../firebase/config.js';

const useCollections = (collection) => {
  const error = ref(null);

  const addDocument = async (doc) => {
    try {
      await projectFirestore.collection(collection).add(doc);
    } catch (err) {
      console.log(err.message);
      error.value = `Could not send the message`;
    }
  };

  return { addDocument, error };
};

export default useCollections;
