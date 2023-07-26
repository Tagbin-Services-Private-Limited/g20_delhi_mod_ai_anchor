const artistFunctions = require("./artist/index");
const algoliaFunctions = require("./algolia/index");
const functions = require("firebase-functions");
// The Firebase Admin SDK to access Firestore.
const admin = require("firebase-admin");
admin.initializeApp();

//get filtered artists data - remove sensitive info
exports.getArtists = functions.https.onRequest((req, res) => {
  res.set("Access-Control-Allow-Origin", "*");

  artistFunctions.getArtists(req, res, admin);
});

//fetch results from algolia
exports.getAlgoliaRecords = functions.https.onRequest((req, res) => {
  algoliaFunctions.getAlgoliaRecords(req, res);
});
