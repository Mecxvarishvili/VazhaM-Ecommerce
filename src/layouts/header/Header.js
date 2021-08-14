import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Box, Toolbar, Typography, Button, Select, FormControl} from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link, useLocation } from 'react-router-dom';
import {Admin, Home, SIGNIN, SIGNUP } from '../../serializer/routes';
import { faBars } from '@fortawesome/free-solid-svg-icons' 
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AuthContext } from '../../store/UserContextProvider';
import { useContext } from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    appBarTransparent: {
        position: "fixed",
        zIndex: "3",
        background: 'transparent',
        color: "white",
    },
    appBarSolid: {
        position: "fixed",
        zIndex: "3",
        backgroundColor: 'white',
        color: "blue",
    },
    title: {
      flexGrow: 1,
      fontWeight: 900,
      fontSize: "22px",
      letterSpacing: '3px',
      color: 'white',
      textDecoration: "none",
    },
    signIn: {
      textDecoration: "none",
      fontWeight: '500',
      textTransform: 'capitalize',
      fontSize: '15px',
      color: 'white',
    },
    signUp: {
      textDecoration: "none",
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
    toolBar: {
      color: "blue",
    },
    before: {
      color: "white",
    },
    after: {
      color: '#4f4f4f',
      margin: "5px",
    },
    logo: {
      color: "black"
    },
    aftSignUp: {
      color: "#1266f1",
      border: '2px solid #1266f1',
    },
    icon: {
      color: 'white',
      width: "23px",
      height: '23px',
    },
    aftIcon: {
      color: "#1266f1",
      width: "23px!important",
      height: '23px',
    },
    option: {
      margin: "5px"
    },
    optionSee: {
      display: "none",
    },
    optionImg: {
      width: '30px',
      height: '18px',
    },
    select: {
      "& .MuiSelect-icon": {
        color: 'white',
      },
      "&::before": {
        borderBottom: "none",
        content: "none",
        background: "white",
        color: 'white',
      },
      "&::after": {
        borderBottom: "none"
      },
      "&:hover": {
        borderBottom: "none"
      },
    },
    optionImgAft: {
      "& .MuiSelect-icon": {
        color: '#4f4f4f',
      },
    },
    none: {
        display: "none",
        transition: "1s",
    },
    show: {
        display: 'block',
        position: "fixed",
        zIndex: "2",
        top: "0",
        left: "0",
        height: "100vh",
        width: "300px",
        backgroundColor: "#1266f1",
        transition: "1s",
        marginTop: "60px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
        alignItems: "center",
      },
    },
    sectionMobile: {
      display: 'flex',
      width: "23px",
      height: '23px',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    menuItem: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "10px",
    },
}));

const Header = () => {
    const classes = useStyles();

    const context = useContext(AuthContext)

    useEffect(() =>{
      console.log(location.pathname)
    }, [])

    const [navBackground, setNavBackground] = useState('appBarSolid')
    const [color, setColor] = useState({logo: "logo", signUp: "aftSignUp", after: "after", aftImg: "optionImgAft", aftIcon: "aftIcon",})
    const navRef = React.useRef()
    navRef.current = navBackground

    const colRef = React.useRef()
    colRef.current = color

    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => {
          /* if (location.pathname = Home) {
            const show = window.scrollY >= 30
          }else {
            const show = window.scrollY >= 0
          } */
          const show = window.scrollY >= 0
            if (show) {
                setNavBackground('appBarSolid')
                setColor({
                  logo: "logo",
                  signUp: "aftSignUp",
                  after: "after",
                  aftImg: "optionImgAft",
                  aftIcon: "aftIcon",
                })
            } else {
                setNavBackground('appBarTransparent')
                setColor('before')
            }
        }
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
        console.log(location)
    }, [])

    function forHistory() {
      console.log(location.pathname)
    }

    
    
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const SignOut = () => {
    context.setAuth(false)
    context.setToken(false)
    localStorage.removeItem("Token");
  }

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <Box className={classes.menuItem}>
        <Button>
          <Badge badgeContent={5} color="secondary"></Badge>
          <ShoppingCartIcon className={`${classes.shoppingCart} ${classes[colRef.current.after]}`} />
        </Button>
        <Select className={`${classes.select} ${classes[colRef.current.aftImg]}`} value="0" src>
          <option className={classes.optionSee} value="0">
            <img className={`${classes.optionImg} ${classes[colRef.current.aftImg]}`} src="https://www.kindpng.com/picc/m/167-1672831_gb-united-kingdom-flag-icon-british-flag-hd.png"></img>
          </option>
          <option className={classes.option} value="Action">Action</option>
          <option className={classes.option} value="aa">Another action</option>
          <option className={classes.option} value="seh">Something else here</option>
        </Select>
        <Link className={`${classes.signIn} ${classes[colRef.current.after]}`} to={Home}>Shop</Link>
        <Link className={`${classes.signIn} ${classes[colRef.current.after]}`} to={Admin}>Admin</Link>
        {context.isLoggedIn ? <Button onClick={SignOut} className={`${classes.signUp} ${classes[colRef.current.signUp]}`}>Sign Out</Button> :
        <>
          <Link to={SIGNIN}className={`${classes.signIn} ${classes[colRef.current.after]}`}>Sign in</Link>
          <Link to={SIGNUP} className={`${classes.signUp} ${classes[colRef.current.signUp]}`}>SIGN UP</Link> 
        </>}
      </Box>
    </Menu>
  );

    return (
        <AppBar className={classes[navRef.current]}>
            <Toolbar className={classes.toolBar}>
              <Link className={`${classes.title} ${classes[colRef.current.logo]}`} to={Home}>MDB</Link>
              <Box className={classes.sectionDesktop}>
                <Button>
                  <Badge badgeContent={5} color="secondary"></Badge>
                  <ShoppingCartIcon className={`${classes.shoppingCart} ${classes[colRef.current.after]}`} />
                </Button>
                <Select className={`${classes.select} ${classes[colRef.current.aftImg]}`} value="0" src>
                  <option className={classes.optionSee} value="0">
                    <img className={`${classes.optionImg} ${classes[colRef.current.aftImg]}`} src="https://www.kindpng.com/picc/m/167-1672831_gb-united-kingdom-flag-icon-british-flag-hd.png"></img>
                  </option>
                  <option className={classes.option} value="Action">Action</option>
                  <option className={classes.option} value="aa">Another action</option>
                  <option className={classes.option} value="seh">Something else here</option>
                </Select>
                <Link className={`${classes.signIn} ${classes[colRef.current.after]}`} to={Home}>Shop</Link>
                <Link className={`${classes.signIn} ${classes[colRef.current.after]}`} to={Admin}>Admin</Link>
                {context.isLoggedIn ? <Button onClick={SignOut} className={`${classes.signUp} ${classes[colRef.current.signUp]}`}>Sign Out</Button> :
                <>
                  <Link to={SIGNIN}className={`${classes.signIn} ${classes[colRef.current.after]}`}>Sign in</Link>
                  <Link to={SIGNUP} className={`${classes.signUp} ${classes[colRef.current.signUp]}`}>SIGN UP</Link> 
                </>}
              </Box>
              <Box className={classes.sectionMobile}>
                
                <FontAwesomeIcon className={`${classes.icon} ${classes[colRef.current.aftIcon]}`} icon={faBars} onClick={handleMobileMenuOpen}/>
              </Box>
            </Toolbar>
            {renderMobileMenu}
            {renderMenu}
        </AppBar> 
    );
}
export default Header;