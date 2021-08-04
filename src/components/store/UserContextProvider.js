import React, { useEffect } from 'react';
import { useState } from 'react';

export const AuthContext = React.createContext({})

const UserContextProvider = ({children}) => {
  
  const [auth, setAuth ]= useState(localStorage.getItem("Token"))
  const [token, setToken] = useState()
  const [data, setData] = useState()
  const [userData, setUserData] = useState()

    return (
      <AuthContext.Provider value={{isLoggedIn: auth,
                                     setAuth,
                                    productData: data,
                                    setData,
                                    token: token,
                                    userData: userData,
                                    setUserData,
                                    setToken }}>
        {children}
      </AuthContext.Provider>
    );
};

export default UserContextProvider;
