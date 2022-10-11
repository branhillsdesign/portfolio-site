/** @format */

import { firestoreDatabase } from './firebase';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

const db = getFirestore(firestoreDatabase);

const getBookmarks = async () => {
	const querySnapshot = await getDocs(collection(db, 'bookmarks'));
	querySnapshot.forEach((doc) => {
		// doc.data() is never undefined for query doc snapshots
		console.log(doc.id, ' => ', doc.data());
	});
};

export { getBookmarks };
