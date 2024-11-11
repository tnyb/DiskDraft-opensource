import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

// TODO Config this
const config = {
  apiKey: "",
  authDomain: "discdrafter.firebaseapp.com",
  databaseURL: "https://discdrafter-default-rtdb.firebaseio.com",
  projectId: "discdrafter",
  storageBucket: "discdrafter.firebasestorage.app",
  messagingSenderId: "690492423129",
  appId: "1:690492423129:web:4dff9b10113da33a2a37c8",
  measurementId: "G-HZKKPBRKF5"
};
const app = firebase.initializeApp(config);

function connect(path) {
  return firebase.database(app).ref(path);
}

export default {connect};