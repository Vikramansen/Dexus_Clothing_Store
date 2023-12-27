import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDHn1xcIkOjJWlBvqJn0iL4fnQ82P0DLpE",
  authDomain: "dexus-store.firebaseapp.com",
  projectId: "dexus-store",
  storageBucket: "dexus-store.appspot.com",
  messagingSenderId: "902134746209",
  appId: "1:902134746209:web:15660be468365d54312e20",
  measurementId: "G-F2V08PNG2E"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(userAuth);
};

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
