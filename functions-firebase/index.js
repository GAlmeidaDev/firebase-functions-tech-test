const functions = require('firebase-functions');
const app = require('./src/interfaces/httpServer');
require('./src/infrastructure/firebase/triggers');

exports.api = functions.https.onRequest(app);
