import { Box } from '@material-ui/core';
import React, { useEffect } from 'react';
import Header from './layouts/header/Header';
import Main from './pages/main/Main';
import Footer from './layouts/footer/Footer';
import ProductPage from './pages/productpage/ProductPage';
import { BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom";
import { Product, Admin, Home, SIGNIN, SIGNUP, PROFILE, CART } from './serializer/routes';
import AdminContent from './admin/AdminContent';
import SignIn from './pages/singin/SignIn';
import SignUp from './pages/signup/SignUp';
import PrivateRoute from './components/PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { setLoggedIn, setToken, setUser } from './store/user/userActionCreator';
import ProfilePage from './pages/profilepage/ProfilePage';
import Api from './serializer/api';
import CartPage from './pages/cartpage/CartPage';
import { setIsLoading } from './store/products/productActionCreator';
import { getCookie, getCartProducts } from './store/cart/cartSelector';
import { setCart, setCookieCart } from './store/cart/cartActionCreator';
import { serializeCart } from './serializer/serialize';
import { getLoggedIn } from './store/user/userSelector';

const App = () => {

  let dispatch = useDispatch()
  const history = useHistory()
  
  let cartProducts = useSelector(getCartProducts)
  let isLoggedIn = useSelector(getLoggedIn)
  
  useEffect(() => {
    if (!!localStorage.getItem("Token")) {
      Api.getToken()
      .then((data) => {
        if(data.error) {
          dispatch(setLoggedIn(false))
          dispatch(setToken({}))
          dispatch(setUser({}))
          dispatch(setIsLoading(false))
          dispatch(setCart({}))
          localStorage.removeItem("Token")
          history.replace(Home)
        } else {
          dispatch(setLoggedIn(true))
          dispatch(setUser(data))
          dispatch(setIsLoading(false))
        }
      })
    } else {
      dispatch(setLoggedIn(false))
    }

    let cookie = getCookie("Cart")
    
    if ( isLoggedIn) {
      if (!!cookie) {
        dispatch(setCookieCart(cookie))
      } else {
      dispatch(setCookieCart([]))
      }
    }
  }, [isLoggedIn])

  useEffect(() => {
    if (isLoggedIn) {
      document.cookie = `Cart=${JSON.stringify(serializeCart(cartProducts))}`
    }
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