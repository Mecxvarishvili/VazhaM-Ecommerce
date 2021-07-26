import React from 'react';
import { useState } from 'react';

export const AuthContext = React.createContext({})

const UserContextProvider = ({children}) => {
  const [auth, setAuth] = useState (false)

    return (
      <AuthContext.Provider value={{isLoggedIn: auth, setAuth}}>
        {children}
      </AuthContext.Provider>
    );
};

export default UserContextProvider;
