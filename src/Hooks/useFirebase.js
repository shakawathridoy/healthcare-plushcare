import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
import {getAuth, GoogleAuthProvider, signOut, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup} from 'firebase/auth'

initializeAuthentication()

const useFirebase = () => {

    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider()

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth , (user)=> {
           console.log(user);
             if(user){
                  
                 setUser(user)
             } else{
                 setUser({})
             }
             setIsLoading(false)
        })
         return ()=> unsubscribe()
   },[])
    


    const singInWithGoogle = () => {
      return  signInWithPopup(auth, googleProvider)
  
}

const createAccountWithGoogle = (email, password) => {
   return createUserWithEmailAndPassword(auth, email, password)
  
}

const singInWithEmailPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
}

const logOut=()=> {
   signOut(auth).then(() => {
       setUser({})
     }).catch((error) => {
       // An error happened.
     });
}


    return {
        user,
        setUser,
        singInWithGoogle,
        createAccountWithGoogle,
        singInWithEmailPassword,
        isLoading,
        setIsLoading,
        logOut
    }
};

export default useFirebase;