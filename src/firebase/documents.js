import { firestore } from './firestore';

const documents = {

  addNewDocument: async (documentPath, data) => firestore.collection(documentPath).add(data),

  deleteDocument: async documentPath => await firestore.doc(documentPath).delete(),

  getDocument: async documentPath => {
    const documentRef = firestore.doc(documentPath);
    const document = await documentRef.get();
    return document.exists ? { ...document.data() } : new Error('Document doesn\'t exist');
  },

  updateDocument: async (documentPath, data) => {
    const documentRef = firestore.doc(documentPath);
    return documentRef.update(data);
  }

};

export default documents;
