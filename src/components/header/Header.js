import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Box, Toolbar, Typography, Button, Select, FormControl} from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';

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
    title: {
      flexGrow: 1,
      fontWeight: 900,
      fontSize: "22px",
      letterSpacing: '3px',
      color: 'white',
      textDecoration: "none",
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

    const [navBackground, setNavBackground] = useState('appBarSolid')
    const [color, setColor] = useState({logo: "logo", signUp: "aftSignUp", after: "after", aftImg: "optionImgAft", })
    const navRef = React.useRef()
    navRef.current = navBackground

    const colRef = React.useRef()
    colRef.current = color
    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY >= 0
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
                    <Link className={`${classes.title} ${classes[colRef.current.logo]}`} to="/">MDB</Link>
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
        </div >
    );
}
export default Header;