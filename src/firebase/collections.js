import { firestore } from './firestore';

const collections = {

  subscribeToCollection: (collectionName, onSnapshotCallback) => {
    return firestore.collection(collectionName).onSnapshot(onSnapshotCallback);
  },

  mapCollectionToArray: (snapshot) => {
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  }

};

export default collections;
