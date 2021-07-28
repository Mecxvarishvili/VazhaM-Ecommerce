import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../store/UserContextProvider';
import { SIGNIN } from '../serializer/routes'

const PrivateRoute = ({component: Component, ...rest}) => {
    const auth = useContext(AuthContext)
    return (
        <Route
          {...rest}
          render={({ location }) =>
            auth.isLoggedIn ? (
              <Component />
            ) : (
              <Redirect to={{pathname: SIGNIN, state: { from: location }}}/>
            )
          }
        />
    );
};

export default PrivateRoute;