import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile, sendEmailVerification, onAuthStateChanged, signInWithEmailAndPassword, sendPasswordResetEmail, signOut } from 'firebase/auth'
import app from '../Firebase/Firebase.init';

export const AuthContext = createContext();
const auth = getAuth(app);
// export const profilepic= 'https://img.freepik.com/free-vector/farmer-using-agricultural-technology_53876-120543.jpg?w=740&t=st=1671081419~exp=1671082019~hmac=7b2e72a494e10ca201d337213ba4df3ccbf0f4a8dfa8a0e39cb358a6758c8e72';

const ContextProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setloading] = useState(true);

  const createUserWithEmailPassword = (email, password) => {
    setloading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const updateProfileInfo = (name, photoUrl) => {
    setloading(true)
    return updateProfile(auth.currentUser, { displayName: name, photoURL: photoUrl })
  }


  const verifyEmail = () => {
    setloading(true)
    return sendEmailVerification(auth.currentUser)
  }

  const signIn = (email, password) => { 
    setloading(true)
    return signInWithEmailAndPassword(auth, email, password) 
  }

  const forgetPassword=(email)=>{
    setloading(true)
    return sendPasswordResetEmail(auth, email)
  }

  const logOut= ()=>{
    setloading(true)
    return signOut(auth);
  }


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
        // console.log(user)
        setloading(false)
   })

    return () => unsubscribe();
  }, [user])


  const authInfo = {
    user,
    loading,
    createUserWithEmailPassword,
    updateProfileInfo,
    verifyEmail,
    signIn,
    forgetPassword,
    logOut,
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default ContextProvider;