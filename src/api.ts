import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

import { Profile } from 'modules/profile/types';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

firebase.initializeApp(firebaseConfig);

export const register = async (email: string, password: string): Promise<string | null> => {
  const response = await firebase.auth().createUserWithEmailAndPassword(email, password);
  return extractUid(response);
};

export const login = async (email: string, password: string): Promise<string | null> => {
  const response = await firebase.auth().signInWithEmailAndPassword(email, password);
  return extractUid(response);
};

export const uploadImage = (name: string, data: Blob | Uint8Array | ArrayBuffer) =>
  firebase
    .storage()
    .ref(`images/${name}.jpg`)
    .put(data);

export const saveProfile = (uid: string, profile: Profile) =>
  firebase
    .firestore()
    .collection('profile')
    .doc(uid)
    .set(profile);

export const getProfile = async (uid: string): Promise<Profile | null> => {
  const response = await firebase
    .firestore()
    .collection('profile')
    .doc(uid)
    .get();

  if (response.exists) {
    return response.data() as Profile;
  }

  return null;
};

export const logout = () => firebase.auth().signOut();

const extractUid = (response: firebase.auth.UserCredential) => {
  if (response.user?.uid) {
    return response.user?.uid;
  }

  return null;
};
