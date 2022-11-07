// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAKie0KpvdCdZ7iQNoHrZYENd1wGxhyGek',
  authDomain: 'nurturing-minds-client-side.firebaseapp.com',
  projectId: 'nurturing-minds-client-side',
  storageBucket: 'nurturing-minds-client-side.appspot.com',
  messagingSenderId: '983733216475',
  appId: '1:983733216475:web:fb2498933a2f87a9be98fe',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
