import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyB66K9HzcBZBOY7TuNEbvZI3u6eOR2-2Fk',
  authDomain: 'chat-app-9a87e.firebaseapp.com',
  projectId: 'chat-app-9a87e',
  storageBucket: 'chat-app-9a87e.appspot.com',
  messagingSenderId: '406934593749',
  appId: '1:406934593749:web:677865c8a37e9ab1c8c25c',
};

// init firebase
firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFirestore, timestamp };
