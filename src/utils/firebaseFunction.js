//saving for net Items

import {firestore} from "../firebase.config";
import {doc, setDoc} from "firebase/firestore";
export const saveItem =async (data)=>{
await setDoc(
    doc(firestore,"foodItems",`${Date.now()}`),data,{
        merge:true,
    }
    );
};