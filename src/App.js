import { Box } from '@material-ui/core';
import React from 'react';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import RouterTutorial from './components/RouterTutorial';
import ProductPage from './components/main/productpage/ProductPage';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Product, Home } from './components/main/routes';

const App = () => {
  return (
    <Box>
      <Router>
      <Header />
        <Box>
          <Switch>
            <Route path={Product}>
              <ProductPage />
            </Route>
            <Route path={Home} exact>
              <Main />
            </Route>
          </Switch>
        </Box>
      <Footer />
      </Router>
    </Box>
  );
};

export default App;