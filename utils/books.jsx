import { firestoreDatabase } from "./firebase";
import { collection, getDocs, getFirestore } from 'firebase/firestore'

const db = getFirestore(firestoreDatabase)

const getBooks = async () => {
  const querySnapshot = await getDocs(collection(db, 'books'))
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.data())
  })
}

// const [books, setBooks] = useState([]);
// const docRef = getDocs(collection(firestoreDB, 'books'));
// const fetchBooks = async () => {
// 	try {
// 		const docs = await getDocsFromCache(docRef);
// 		console.log('Cached document data:', docs.data());
// 	} catch (e) {
// 		console.log('Error getting cached document:', e);
// 	}
// };
// // const fetchBooks = async () => {
// //   const response = await getDocs(collection(firestoreDB, 'books'));
// //   const data = await response.get()
// //   data.docs.forEach(item => {
// //     setBooks([item.data()])
// //   })
// // }
// useEffect(() => {
// 	fetchBooks();
// }, []);