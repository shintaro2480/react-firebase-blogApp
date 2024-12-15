import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth;
import {getFirestore} from "firebase/firestore;

const firebaseConfig = {
  apiKey: "AIzaSyB19EoIOcY5p3TaVh0ebeRg71AL1uuRPFE",
  authDomain: "blog-f30ee.firebaseapp.com",
  projectId: "blog-f30ee",
  storageBucket: "blog-f30ee.firebasestorage.app",
  messagingSenderId: "736976775712",
  appId: "1:736976775712:web:ed329b9a5219c22211aa45"
};

const app = initializeApp(firebaseConfig);

const auth= getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export {auth, provider, db};
