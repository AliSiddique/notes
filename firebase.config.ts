import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getAnalytics} from 'firebase/analytics';
import { getAuth,Auth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC0Ba5OoDPic5MkW5tDmA61tdTbtvWG_2Q",
    authDomain: "codas-e1815.firebaseapp.com",
    projectId: "codas-e1815",
    storageBucket: "codas-e1815.appspot.com",
    messagingSenderId: "276109887690",
    appId: "1:276109887690:web:f1c0d158d78b9f2b1f8c33",
    measurementId: "G-QD0FPEJX8V"
};
let analytics; let firestore;let auth:Auth;
if (firebaseConfig?.projectId) {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  if (app.name && typeof window !== 'undefined') {
    analytics = getAnalytics(app);
  }
  auth = getAuth(app);

  // Access Firebase services using shorthand notation

  firestore = getFirestore(app);
}

export {analytics, firestore,auth};