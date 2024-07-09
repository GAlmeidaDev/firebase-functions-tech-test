const admin = require('firebase-admin');

if (!admin.apps.length) {
  admin.initializeApp();
}

const db = admin.firestore();

exports.onCreateRecord = db.collection('records').onSnapshot(async (snapshot) => {
  snapshot.docChanges().forEach(async (change) => {
    if (change.type === 'added') {
      const docRef = change.doc.ref;
      const increment_id = await getNextIncrementId();
      await docRef.update({ increment_id });
    }
  });
});

async function getNextIncrementId() {
  const querySnapshot = await db.collection('records').orderBy('increment_id', 'desc').limit(1).get();
  if (querySnapshot.empty) {
    return 1;
  } else {
    const lastRecord = querySnapshot.docs[0].data();
    return lastRecord.increment_id + 1;
  }
}
