// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyCwSURa3EUGuP8bzpp5VM898EuNzunMRjQ',
	authDomain: 'portfolio-site-364713.firebaseapp.com',
	projectId: 'portfolio-site-364713',
	storageBucket: 'portfolio-site-364713.appspot.com',
	messagingSenderId: '586666808696',
	appId: '1:586666808696:web:9957002f375b08d091e48d',
	measurementId: 'G-ZVL8JTEFWX',
};

// Initialize Firebase
const firestoreDatabase = initializeApp(firebaseConfig);
const firestoreDB = getFirestore(firestoreDatabase)

export default firestoreDB;