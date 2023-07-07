import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAUA5RBEzb5n5Usg4AFi5YjJOuYPjrbMyA",
  authDomain: "react-netflix-clone-38729.firebaseapp.com",
  projectId: "react-netflix-clone-38729",
  storageBucket: "react-netflix-clone-38729.appspot.com",
  messagingSenderId: "386944157903",
  appId: "1:386944157903:web:1d1d8b4748168208170fba",
  measurementId: "G-EW82N7M904"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);