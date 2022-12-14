import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile, sendEmailVerification, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import app from '../Firebase/Firebase.init';

export const AuthContext = createContext();
const auth = getAuth(app);

const ContextProvider = ({ children }) => {

  const [user, setUser] = useState(null);

  const signInWithEmailPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const updateProfileName = (name, photoUrl) => {
    return updateProfile(auth.currentUser, { displayName: name, photoURL: photoUrl })
  }

  
  const emailVerify = () => {
    return sendEmailVerification(auth.currentUser)
  }
  
  const signIn=(email,password)=>{ return signInWithEmailAndPassword(auth, email,password)}


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      if (currentUser) {
        setUser(currentUser)
        // console.log(user)
      }
    })

    return () => unsubscribe();
  }, [])


  const authInfo = { user,signInWithEmailPassword, updateProfileName, emailVerify,signIn }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default ContextProvider;