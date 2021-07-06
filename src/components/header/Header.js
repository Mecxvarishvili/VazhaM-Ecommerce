import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Box, Toolbar, Typography, Button, Select, FormControl} from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    appBarTransparent: {
        background: 'transparent',
        color: "white",
    },
    appBarSolid: {
        backgroundColor: 'white',
        color: "blue",
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
        color: 'white',
    },
    title: {
      flexGrow: 1,
      fontWeight: 900,
      letterSpacing: '3px',
      color: 'white',
    },
    signIn: {
        fontWeight: '500',
        textTransform: 'capitalize',
        fontSize: '15px',
        color: 'white',
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
    toolBar: {
      color: "blue",
    },
    before: {
      color: "white",
    },
    after: {
      color: '#4f4f4f',
    },
    logo: {
      color: "black"
    },
    aftSignUp: {
      color: "#1266f1",
      border: '2px solid #1266f1',
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
}));

const Header = () => {
    const classes = useStyles();

    const [navBackground, setNavBackground] = useState('appBarTransparent')
    const [color, setColor] = useState('before')
    const navRef = React.useRef()
    navRef.current = navBackground

    const colRef = React.useRef()
    colRef.current = color
    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 10
            if (show) {
                setNavBackground('appBarSolid')
                setColor({
                  logo: "logo",
                  signUp: "aftSignUp",
                  after: "after",
                  aftImg: "optionImgAft",
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
    }, [])

    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes[navRef.current]}>
                <Toolbar className={classes.toolBar}>
                  <Typography variant="h6" className={`${classes.title} ${classes[colRef.current.logo]}`}>MDB</Typography>
                  <Button>
                    <ShoppingCartIcon className={`${classes.shoppingCart} ${classes[colRef.current.after]}`} />
                  </Button>
                  <Select className={`${classes.select} ${classes[colRef.current.aftImg]}`} value="0" src>
                    <option className={classes.optionSee} value="0">
                      <img className={`${classes.optionImg} ${classes[colRef.current.aftImg]}`} src="https://lh3.googleusercontent.com/proxy/EjpML48at-qNMP8YT7YXomXeHJjtdRxMDs7NPvEjBvCPkXeiY1UvpLQMaaW1H6iqp7RVpD40HbUzA2vHxAHP"></img>
                    </option>
                    <option className={classes.option} value="Action">Action</option>
                    <option className={classes.option} value="aa">Another action</option>
                    <option className={classes.option} value="seh">Something else here</option>
                  </Select>
                  <Button className={`${classes.signIn} ${classes[colRef.current.after]}`}>Shop</Button>
                  <Button className={`${classes.signIn} ${classes[colRef.current.after]}`}>Contact</Button>
                  <Button className={`${classes.signIn} ${classes[colRef.current.after]}`}>Sign in</Button>
                  <Button className={`${classes.signUp} ${classes[colRef.current.signUp]}`}>SIGN UP</Button>
                </Toolbar>
            </AppBar>     
            <Box className={classes.forShop}>
                <Box className={classes.shopBackg}>
                    <Box className={classes.shop}>Shop</Box>
                </Box>
            </Box>
        </div >
    );
}
export default Header;