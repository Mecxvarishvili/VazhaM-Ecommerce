import { Box } from '@material-ui/core';
import React from 'react';
import Header from './layouts/header/Header';
import Main from './layouts/main/Main';
import Footer from './layouts/footer/Footer';
import ProductPage from './pages/productpage/ProductPage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Product, Admin, Home, SIGNIN, SIGNUP, PROFILE } from './serializer/routes';
import AdminContent from './admin/AdminContent';
import SignIn from './authorization/SignIn'
import SignUp from './authorization/SignUp'
import PrivateRoute from './authorization/PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setToken } from './store/user/userActionCreator';
import { selectUser } from './store/user/userSelector';
import { logInUser } from './store/user/userAction';
import ProfilePage from './pages/profilepage/ProfilePage';

const App = () => {
  let dispatch = useDispatch()

  useEffect(() => {
    dispatch(logInUser)
  }, [])

  const user = useSelector(selectUser)
  /* console.log(user) */

  return (
    <Box>
      <Router>
        <Header />
          <Switch>
            <Route path={Product} component={ProductPage} />
            <Route path={SIGNIN} component={SignIn} />
            <Route path={SIGNUP} component={SignUp} />
            <Route path={Home} exact component={Main} />
            <Route path={PROFILE} exact component={ProfilePage} />
            <PrivateRoute path={Admin} component={AdminContent} />
          </Switch>
        <Footer />
      </Router>
    </Box>
  );
};

export default App;