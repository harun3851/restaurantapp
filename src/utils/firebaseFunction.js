//saving for net Items

import {firestore} from "../firebase.config";
import {collection, doc, getDocs, orderBy, setDoc,query} from "firebase/firestore";
import { async } from "@firebase/util";
export const saveItem =async (data)=>{
await setDoc(
    doc(firestore,"foodItems",`${Date.now()}`),data,{
        merge:true,
    }
    );
};


export const getAllFoodItems =async () =>{
    const items = await getDocs (
        query(collection(firestore, "foodItems"), orderBy("id","desc"))
    );
    return items.docs.map((doc)=>doc.data());
};