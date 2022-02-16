// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAe2DFNb9wvzGyee_gQdEEVsP_FaXxvYxM',
  authDomain: 'marketplace-29b78.firebaseapp.com',
  projectId: 'marketplace-29b78',
  storageBucket: 'marketplace-29b78.appspot.com',
  messagingSenderId: '41052468618',
  appId: '1:41052468618:web:263cc368e5ef57abb04473',
  measurementId: 'G-CYJV3MYQDQ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
