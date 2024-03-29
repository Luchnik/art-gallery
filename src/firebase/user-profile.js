import { firestore } from './firestore';

import { INITIAL_GALLERY } from '../constants';

const updateUserWithInitialGallery = userRef => {
  try {
    INITIAL_GALLERY.forEach(async galleryItem => {
      const galleryItemRef = userRef.collection('Gallery').doc();
      await galleryItemRef.set(galleryItem);
    });
  } catch (error) {
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
        rating: 0,
        createdAt: new Date(),
        ...otherUserData
      });

      updateUserWithInitialGallery(userRef);

    } catch (error) {
      console.log('Error creating user', error.message);
    }
  }

  return userRef;
};
