import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAHqPuske5Mm2QwTtuFfMs93o0d97GNVgw",
  authDomain: "rn-uber-eats-clone-525e7.firebaseapp.com",
  projectId: "rn-uber-eats-clone-525e7",
  storageBucket: "rn-uber-eats-clone-525e7.appspot.com",
  messagingSenderId: "692761021870",
  appId: "1:692761021870:web:b54fc84e9dc4e8fe420c3f",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
export default firebase;
