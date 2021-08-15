import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { SIGNIN } from '../serializer/routes'
import { getLoggedIn} from '../store/user/userSelector';
import { useSelector } from 'react-redux';

const PrivateRoute = ({component: Component, ...rest}) => {

    const token = useSelector(getLoggedIn)
    
    return (
        <Route
          {...rest}
          render={({ location }) =>
            token ? (
              <Component />
            ) : (
              <Redirect to={{pathname: SIGNIN}}/>
            )
          }
        />
    );
};

export default PrivateRoute;