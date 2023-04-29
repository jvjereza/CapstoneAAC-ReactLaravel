// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7xwa5aSKyWp-wPDDZSyc1hcHDD1nlTQU",
  authDomain: "capstoneaac-reactlaravel.firebaseapp.com",
  projectId: "capstoneaac-reactlaravel",
  storageBucket: "capstoneaac-reactlaravel.appspot.com",
  messagingSenderId: "266804828566",
  appId: "1:266804828566:web:acb31167674b968e0665b7",
  measurementId: "G-Y66B0NG2LR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);