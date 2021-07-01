import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  header: {
      backgroundColor: 'white',
      boxShadow: 'none',
  },
  toolBar: {
      position: 'fixed',
      top: 0,
      right: 0,
      left: 0,
  },
  title: {
    flexGrow: 1,
    fontWeight: 900,
    letterSpacing: '3px',
    color: 'white',
  },
  signIn: {
      color: 'white',
      fontWeight: '500',
      textTransform: 'capitalize',
      fontSize: '15px',
  },
  signUp: {
      border: '2px solid white',
      borderRadius: '20px',
      color: 'white',
      fontSize: '10px',
      fontWeight: '700',
      letterSpacing: '0.1px',
      padding: '8px 20px',
  },
  shoppingCart: {
      color: 'white',
  },
  forShop: {
      backgroundImage: 'url("https://mdbootstrap.com/img/Photos/Others/clothes(5)-crop.jpg")',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height: '400px',
      oppacity: '',
  },
  shopBackg: {
    backgroundColor: 'rgba(0,0,0,.7)',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  shop: {
      fontSize: '38px',
      fontWeight: '500',
      margin: 'auto',
  },
}));

const  Header = () => {
  const classes = useStyles();

  return (
      <AppBar position="static" className={classes.header}>
        <Toolbar className={classes.toolBar}>
          <Typography variant="h6" className={classes.title}>MDB</Typography>
          <Button>
            <ShoppingCartIcon className={classes.shoppingCart} />
          </Button>
          <Button className={classes.signIn}>Shop</Button>
          <Button className={classes.signIn}>Contact</Button>
          <Button color="inherit" className={classes.signIn}>Sign in</Button>
          <Button className={classes.signUp}>SIGN UP</Button>
        </Toolbar>
        <Box className={classes.forShop}>
            <Box className={classes.shopBackg}>
                <Box className={classes.shop}>Shop</Box>
            </Box>
        </Box>
      </AppBar>
  );
}

export default Header;