import { SubmitHandler } from "@unform/core/typings/types";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  DocumentData,
  Firestore,
  getDocs,
  setDoc,
  UpdateData,
  updateDoc,
  WithFieldValue,
} from "firebase/firestore";

interface IUseCollectionInterface {
  collectionName: string;
  database: Firestore;
}

const useCollection = ({
  collectionName,
  database,
}: IUseCollectionInterface) => {
  const collectionReference = collection(database, collectionName);

  const handleCreateDoc = async (data: any) => {
    try {
      await addDoc(collectionReference, data);
    } catch (e) {
      console.log(e);
    }
  };

  const handleGetDocData = async (): Promise<DocumentData> => {
    const snaphsot = await getDocs(collectionReference)
    return snaphsot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
  }

  const handleUpdateDoc = async (
    id: string,
    payload: UpdateData<Object> | any
  ) => {
    try {
      await updateDoc(doc(database, collectionName, id), payload);
    } catch (e) {
      console.log(e);
    }
  };

  const handleDelDoc = async (id: string) => {
    try {
      await deleteDoc(doc(database, collectionName, id));
      window.location.reload();
    } catch (e) {
      console.log(e);
    }
  };
  return { handleCreateDoc, handleGetDocData, handleUpdateDoc, handleDelDoc };
};

export default useCollection;
