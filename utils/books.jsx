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