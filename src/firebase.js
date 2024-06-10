// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmIOQYvMFqEL-IeQuwe86woe3p7TnivQY",
  authDomain: "movie-page-app.firebaseapp.com",
  projectId: "movie-page-app",
  storageBucket: "movie-page-app.appspot.com",
  messagingSenderId: "442618236643",
  appId: "1:442618236643:web:9fcff7a72b170f3173bfd6",
  measurementId: "G-6591SZRC1S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;