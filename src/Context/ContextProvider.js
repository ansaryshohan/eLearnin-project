import React, { createContext } from 'react';

 export const AuthContext= createContext();

const ContextProvider = ({children}) => {

  const authInfo={ name : "pappu"}
  return (
   <AuthContext.Provider value={authInfo}>
    {children}
   </AuthContext.Provider>
  );
};

export default ContextProvider;