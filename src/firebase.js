import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

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

export const firestore = firebase.firestore();
export const auth = firebase.auth();

export const createUserProfile = async (userAuthData, otherUserData) => {
  if (!userAuthData) return;

  const userRef = firestore.doc(`Users/${userAuthData.uid}`);
  const userSnapshot = await userRef.get();

  if (!userSnapshot.exists) {
    const { displayName, email } = userAuthData;

    try {
      await userRef.set({
        displayName,
        email,
        createdAt: new Date(),
        ...otherUserData
      });
    } catch(error) {
      console.log('Error creating user', error.message);
    }
  }

  return userRef;
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => {
  return auth.signInWithPopup(provider);
};

export default firebase;
