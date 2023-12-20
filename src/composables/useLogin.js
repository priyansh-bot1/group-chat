import { ref } from 'vue';
import { projectAuth } from '../firebase/config.js';

const error = ref(null);

const login = async (email, password) => {
  error.value = null;
  console.log(`script email, password`, email, password);

  try {
    console.log(`error value js file 111`);
    const res = await projectAuth.signInWithEmailAndPassword(email, password);
    error.value = null;
    console.log(`error value js file`, res);
    return res;
  } catch (err) {
    console.log(`error value js file`, error.value);
    error.value = 'Incorrect login credentials';
  }
};

const useLogin = () => {
  return { error, login };
};

export default useLogin;
