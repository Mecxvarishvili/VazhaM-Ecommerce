import { Box } from '@material-ui/core';
import React from 'react';
import Header from './components/layouts/header/Header';
import Main from './components/layouts/main/Main';
import Footer from './components/layouts/footer/Footer';
import ProductPage from './components/pages/productpage/ProductPage';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Product, Admin, Home, SIGNIN, SIGNUP } from './components/serializer/routes';
import AddProduct from './components/admin/AddProduct';
import AdminContent from './components/admin/AdminContent';
import SignIn from './components/authorization/SignIn'
import SignUp from './components/authorization/SignUp'
import TestHeader from './components/layouts/header/TestHeader';

const App = () => {
  return (
    <Box>
      <Router>
        <Header />
        <Box>
          <Switch>
            <Route path={Product} component={ProductPage} />
            <Route path={SIGNIN} component={SignIn} />
            <Route path={SIGNUP} component={SignUp} />
            <Route path={Home} exact>
              <Main />
            </Route>
            <Route path={Admin} exact>
              <AdminContent />
            </Route>
          </Switch>
        </Box>
      <Footer />
      </Router>
    </Box>
  );
};

export default App;