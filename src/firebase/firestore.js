import 'firebase/firestore';

import firebase from './init';
import { INITIAL_GALLERY } from '../constants';

export const firestore = firebase.firestore();

const updateUserWithInitialGallery = userRef => {
  try {
    INITIAL_GALLERY.forEach(async galleryItem => {
      const galleryItemRef = userRef.collection('Gallery').doc();
      await galleryItemRef.set(galleryItem);
    });
  } catch(error) {
    console.log('Error updating gallery', error.message);
  }
};

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

      updateUserWithInitialGallery(userRef);

    } catch(error) {
      console.log('Error creating user', error.message);
    }
  }

  return userRef;
};
