import { initializeApp } from "@firebase/app";
import { FacebookAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyDvZ8GE9nnvqhhCTD0ebTISv6_ATG0A1VU",
	authDomain: "linkedin-56745.firebaseapp.com",
	projectId: "linkedin-56745",
	storageBucket: "linkedin-56745.appspot.com",
	messagingSenderId: "1079621984456",
	appId: "1:1079621984456:web:803e3e1bff0d1b37fd45fd",
	measurementId: "G-B8PHCMKKH5",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage();
const provider2 = new FacebookAuthProvider();

export { auth, provider, storage, provider2, db };
