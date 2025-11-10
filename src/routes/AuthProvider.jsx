import React, { createContext } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth/cordova";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext();
const google = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
