import 'firebase/firestore';

import firebase from './init';

export const firestore = firebase.firestore();

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
