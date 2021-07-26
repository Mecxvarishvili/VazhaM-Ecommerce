import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import{ Admin }from '../serializer/routes';
import { AuthContext } from '../store/UserContextProvider';
import { SIGNIN } from '../serializer/routes'
import { useEffect } from 'react';

const PrivateRoute = ({children, ...rest}) => {
    const auth = useContext(AuthContext)
    return (
        <Route
          {...rest}
          render={({ location }) =>
            auth.isLoggedIn ? (
              children
            ) : (
              <Redirect to={{pathname: SIGNIN, state: { from: location }}}/>
            )
          }
        />
    );
};

export default PrivateRoute;