import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyCYBIdKfmAD-JNdWeZ1LO5cmnYXyE_gXek",
  authDomain: "store-3f284.firebaseapp.com",
  databaseURL: "https://store-3f284.firebaseio.com",
  projectId: "store-3f284",
  storageBucket: "",
  messagingSenderId: "873883748774",
  appId: "1:873883748774:web:f2ce8a05e5c2781c"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
