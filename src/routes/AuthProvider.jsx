import React, { createContext } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth/cordova";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext();
const google = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  

  // signup
  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // signIn
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // signOut
  const signOut = () => {
    return signOut(auth);
  };

  // signInWithGoogle
  const signInWithGoogle =()=>{
    return signInWithGoogle(auth,google)
  }
  const authInfo = {
    signup,
    signIn,
    signOut,
    signInWithGoogle,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
