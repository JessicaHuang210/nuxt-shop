import firebase from "firebase";

let app = null;

const firebaseConfig = {
  apiKey: "AIzaSyDDjFkwr34kk8s-NBioJe2PCuTXxHuVHN0",
  authDomain: "nxut-shop.firebaseapp.com",
  databaseURL: "https://nxut-shop.firebaseio.com",
  projectId: "nxut-shop",
  storageBucket: "nxut-shop.appspot.com",
  messagingSenderId: "325018730589",
  appId: "1:325018730589:web:10986cb1153b6b9372cdb4",
  measurementId: "G-8VHD8VKR6Q"
};

app = firebase.apps.length
  ? firebase.app()
  : firebase.initializeApp(firebaseConfig);

export const db = app.database();
