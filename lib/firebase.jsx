import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCTl1seO1uFqbuzBV8ls7p-LD8--mMofR0",
  authDomain: "lms-website-nextjs-54fb5.firebaseapp.com",
  projectId: "lms-website-nextjs-54fb5",
  storageBucket: "lms-website-nextjs-54fb5.firebasestorage.app",
  messagingSenderId: "647912695684",
  appId: "1:647912695684:web:9948250efd9a280cb79fd1",
  measurementId: "G-ZC11BJR8QZ"
};
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const analytics = isSupported().then((yes) => {
  if (yes) {
    return getAnalytics(app);
  } else {
    return null;
  }
});

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
