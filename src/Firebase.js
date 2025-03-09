
import { initializeApp } from "firebase/app";
import {addDoc, collection, getFirestore} from "firebase/firestore";
import {createUserWithEmailAndPassword,getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth";
import { toast } from "react-toastify";
const firebaseConfig = {
  apiKey: "AIzaSyBlEVLSKEJjbGorlypbkVFCjL_uttdE488",
  authDomain: "netflix-clone-eca06.firebaseapp.com",
  projectId: "netflix-clone-eca06",
  storageBucket: "netflix-clone-eca06.firebasestorage.app",
  messagingSenderId: "629584053153",
  appId: "1:629584053153:web:6497ab8f29580f0f3a81e0"
};

const app = initializeApp(firebaseConfig);

const auth=getAuth(app);
const db=getFirestore(app);

const signup = async (name,email,password) =>{
  try{
       const res= await createUserWithEmailAndPassword(auth,email,password);
       const user=res.user;
       await addDoc(collection(db,"user"),{
        uid:user.uid,
        name,
        authProvider:"local",
        email,
       });
  }catch(error){
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }

}

const login = async(email,password)=>{
  try{
    await signInWithEmailAndPassword(auth,email,password);
    setEmail("");
    setPassword("");
  }
  catch (error){
     console.log(error);
     toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}


const logout = ()=>{
  if(auth.currentUser){
  signOut(auth);
  toast.error(error.code.split('/')[1].split('-').join(" "));

  }

  else{
    alert("No user is currently Logged in")
  }

}


export {auth,db,login,signup,logout};