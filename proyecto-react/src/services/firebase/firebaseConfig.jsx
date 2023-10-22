import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore'; 


const firebaseConfig = {
  apiKey: "AIzaSyBoozB-RikQvM2R_fLqhGXjThWh64OGhL0",
  authDomain: "proyecto-react-fd146.firebaseapp.com",
  projectId: "proyecto-react-fd146",
  storageBucket: "proyecto-react-fd146.appspot.com",
  messagingSenderId: "287091142546",
  appId: "1:287091142546:web:873bc179d1dc08aeb59b4b",
  measurementId: "G-3F4X4DRJMG"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 
const db = getFirestore(app); 



export { app, analytics, db };



