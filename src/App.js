import { Box } from '@material-ui/core';
import React, { useEffect } from 'react';
import Header from './layouts/header/Header';
import Main from './pages/main/Main';
import Footer from './layouts/footer/Footer';
import ProductPage from './pages/productpage/ProductPage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Product, Admin, Home, SIGNIN, SIGNUP, PROFILE, CART } from './serializer/routes';
import AdminContent from './admin/AdminContent';
import SignIn from './authorization/SignIn';
import SignUp from './authorization/SignUp';
import PrivateRoute from './authorization/PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from './store/user/userActionCreator';
import ProfilePage from './pages/profilepage/ProfilePage';
import Api from './serializer/api';
import CartPage from './pages/cartpage/CartPage';
import { setIsLoading } from './store/products/productActionCreator';
import { getCartCookie, getCartProducts } from './store/cart/cartSelector';
import { setCartCookie } from './store/cart/cartActionCreator';

const App = () => {

  let dispatch = useDispatch()
  
  useEffect(() => {
    if (localStorage.getItem("Token")) {
      dispatch(setIsLoading(true))
      Api.getToken()
      .then(data => dispatch(setUser(data)))
      .finally(dispatch(setIsLoading(false)))
    }

    dispatch(setCartCookie(getCartCookie("Cart=")))
  }, [])
  
  let cartProducts = useSelector(getCartProducts)

  useEffect(() => {
    console.log(getCartCookie("Cart"))
    console.log(cartProducts)
    
    /* document.cookie = `Cart=${JSON.stringify(cartProducts)}` */
  }, [cartProducts])

  return (
    <Box>
      <Router>
        <Header />
        <Switch>
          <Route path={Home} exact component={Main} />
          <Route path={Product} component={ProductPage} />
          <Route path={SIGNIN} component={SignIn} />
          <Route path={SIGNUP} component={SignUp} />
          <Route path={CART} component={CartPage} />
          <PrivateRoute path={PROFILE} component={ProfilePage} />
          <PrivateRoute path={Admin} component={AdminContent} />
        </Switch>
        <Footer />
      </Router>
    </Box>
  );
};

export default App;