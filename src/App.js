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
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setUser } from './store/user/userActionCreator';
import ProfilePage from './pages/profilepage/ProfilePage';
import Api from './serializer/api';

const App = () => {
  let dispatch = useDispatch()

  useEffect(() => {
    if (localStorage.getItem("Token")) {
      Api.getToken()
        .then(data => dispatch(setUser(data)))
    }
  }, [])

  return (
    <Box>
      <Router>
        <Header />
        <Switch>
          <Route path={Home} exact component={Main} />
          <Route path={Product} component={ProductPage} />
          <Route path={SIGNIN} component={SignIn} />
          <Route path={SIGNUP} component={SignUp} />
          <PrivateRoute path={PROFILE} component={ProfilePage} />
          <PrivateRoute path={Admin} component={AdminContent} />
        </Switch>
        <Footer />
      </Router>
    </Box>
  );
};

export default App;