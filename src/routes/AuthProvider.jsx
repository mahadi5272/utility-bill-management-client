import React, { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword ,onAuthStateChanged,signInWithPopup, signOut} from "firebase/auth";
import { auth, } from "../Firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext();
const google = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user,setuser] = useState(null);
  const [loading,setloading] = useState(true)

  // signup
  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // signIn
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // signOut
  const LogOut = () => {
    setloading(true)
    return signOut(auth);
  };

  // signInWithGoogle
  const signInWithGoogle =()=>{
    return signInWithPopup(auth,google)
  }

  useEffect(()=>{
    const unsubscrib = onAuthStateChanged(auth,(currentuser)=>{
      setuser(currentuser);
      setloading(false)
    })
    return ()=>unsubscrib()
  },[])
  const authInfo = {
    loading,
    user,
    signup,
    signIn,
    LogOut,
    signInWithGoogle,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
