const firebaseConfig = require("./firebase.config");
const { credential } = require("firebase-admin");
const { initializeApp } = require("firebase-admin/app");
const { getStorage } = require("firebase-admin/storage");

const app = initializeApp({
    credential: credential.cert(firebaseConfig),
    storageBucket: 'gs://online-store-58ade.appspot.com'
});
const bucket = getStorage(app).bucket();

module.exports = {
    bucket
}

