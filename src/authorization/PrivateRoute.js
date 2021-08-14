import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../store/UserContextProvider';
import { SIGNIN } from '../serializer/routes'

const PrivateRoute = ({component: Component, ...rest}) => {
    const data = useContext(AuthContext)
    return (
        <Route
          {...rest}
          render={({ location }) =>
            data.isLoggedIn ? (
              <Component />
            ) : (
              <Redirect to={{pathname: SIGNIN}}/>
            )
          }
        />
    );
};

export default PrivateRoute;