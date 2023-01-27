//Saving new item added in create container
import { collection, doc, getDocs, orderBy, query, setDoc } from "firebase/firestore"
import { firestore } from "../firebase.config"

export const saveItem = async (data) => {
    await setDoc(
        doc(firestore, 'bibleItems', `${Date.now()}`), data, {
            merge : true
        }
    )
}

// getall bible items
export const getAllBibleItems = async () => {
    const items = await getDocs(
      query(collection(firestore, "bibleItems"), orderBy("id", "desc"))
    );
  
    return items.docs.map((doc) => doc.data());
  };