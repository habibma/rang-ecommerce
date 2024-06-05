import { db } from "./firebase"
import { getDocs, collection, doc, getDoc } from "firebase/firestore/lite"

export const getCategories = async () => {
    const res = await fetch('https://fakestoreapi.com/products/categories')
    if (!res.ok) {
        throw {
            message: "Failed to fetch categories",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data
}

export const loginAdmin = async creds => {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}

const productCollectionRef = collection(db, "products");
export const getCollectionProducts = async () => {
    const querySnapshot = await getDocs(productCollectionRef);
    const products = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return products
}

export const getProduct = async (id) => {
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      // docSnap.data() will be undefined in this case
      throw {
        message: "No such document!",
    }
    }
}
