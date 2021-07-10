import { Box, Grid } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter, faGooglePlusG, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons' 
import AboutMe from './AboutMe';
import Products from './Products';
import UsefulLinks from './UsefulLink';
import Contacts from './Contacts';


const useStyles = makeStyles(() => ({
    outCont1: {
        backgroundColor: "#1266f1",
    },
    outCont2: {
        backgroundColor: "#2e2e2e",
        color: "white",
    },
    container1: {
        margin: '0 auto',
        padding: "20px 0",
        color: "white",
    },
    container2: {
        margin: '0 auto',
        color: "white",
        padding: "30px 0"
    },
    getConnect: {
        flexGrow: "1",
        fontSize: "16px",
        fontWeight: "500",
    },
    icon: {
        margin: "0 10px",
    },
}))

const Footer = () => {
    const classes = useStyles()

    return (
        <Box component="footer">
            <Box className={classes.outCont1}>
                <Grid container xs={9} className={classes.container1}>
                    <Grid item sm={6} xs={12} className={classes.getConnect}>Get connected with us on social networks!</Grid>
                    <Grid item sm={6} xs={12}>
                        <FontAwesomeIcon className={classes.icon} icon={faFacebookF} />
                        <FontAwesomeIcon className={classes.icon} icon={faTwitter} />
                        <FontAwesomeIcon className={classes.icon} icon={faGooglePlusG} />
                        <FontAwesomeIcon className={classes.icon} icon={faLinkedinIn} />
                        <FontAwesomeIcon className={classes.icon} icon={faInstagram} />
                    </Grid>
                </Grid>
            </Box>
            <Box  className={classes.outCont2}>
                <Grid container  xs={6} md={9} className={classes.container2} container>
                    <AboutMe />
                    <Products />
                    <UsefulLinks />
                    <Contacts />
                </Grid>
            </Box>
        </Box>
    );
};

export default Footer;