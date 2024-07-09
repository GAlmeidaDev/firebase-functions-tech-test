const admin = require('firebase-admin');
admin.initializeApp();
const db = admin.firestore();


class FirestoreRecordRepository {
  async create(data) {
    try {
      const docRef = await db.collection('records').add(data);
      return { id: docRef.id, ...data };
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = new FirestoreRecordRepository();
