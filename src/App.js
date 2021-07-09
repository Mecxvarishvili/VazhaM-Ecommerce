import { Box } from '@material-ui/core';
import React from 'react';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import RouterTutorial from './components/RouterTutorial';
import ProductPage from './components/main/productpage/ProductPage';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <Box>
      <Header />
      <Router>
        <Box>
          <Switch>
            <Route path="/users">
              <ProductPage />
            </Route>
            <Route path="/">
              <Main />
            </Route>
          </Switch>
        </Box>
      </Router>
      <Footer />
    </Box>
  );
};

export default App;