
import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: 'AIzaSyAEh5V_eB2KcFKwrDL_-ATomGXK77yTSu8',
  authDomain: 'gmtassignment-b2b47.firebaseapp.com',
  projectId: 'gmtassignment-b2b47',
  storageBucket: 'gmtassignment-b2b47.appspot.com',
  messagingSenderId: '657549568252',
  appId: '1:657549568252:web:351665db02f328e32a0f79',
};


const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export {app,auth};
