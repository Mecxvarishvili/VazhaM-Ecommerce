import { Box } from '@material-ui/core';
import React from 'react';
import Header from './components/layouts/header/Header';
import Main from './components/layouts/main/Main';
import Footer from './components/layouts/footer/Footer';
import ProductPage from './components/pages/productpage/ProductPage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Product, Admin, Home, SIGNIN, SIGNUP } from './components/serializer/routes';
import AdminContent from './components/admin/AdminContent';
import SignIn from './components/authorization/SignIn'
import SignUp from './components/authorization/SignUp'
import PrivateRoute from './components/authorization/PrivateRoute';

const App = () => {
  return (
    <Box>
      <Router>
        <Header />
          <Switch>
            <Route path={Product} component={ProductPage} />
            <Route path={SIGNIN} component={SignIn} />
            <Route path={SIGNUP} component={SignUp} />
            <Route path={Home} exact component={Main} />
            <PrivateRoute path={Admin} component={AdminContent} />
          </Switch>
        <Footer />
      </Router>
    </Box>
  );
};

export default App;