import React, { useEffect } from 'react';
import { useState } from 'react';

export const AuthContext = React.createContext({})

const UserContextProvider = ({children}) => {
  
  const [auth, setAuth ]= useState()

  useEffect(() => {
    setAuth(localStorage.getItem("Auth"))
  }, [localStorage.getItem("Auth")])

    return (
      <AuthContext.Provider value={{isLoggedIn: auth, setAuth }}>
        {children}
      </AuthContext.Provider>
    );
};

export default UserContextProvider;
