import { Box, Grid } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
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
        width: "1140px",
        margin: '0 auto',
        padding: "20px 0",
        display: "flex",
        color: "white",
    },
    container2: {
        width: "1140px",
        margin: '0 auto',
        color: "white",
        padding: "30px 0"
    },
    getConnect: {
        flexGrow: "1",
        fontSize: "16px",
        fontWeight: "500",
    }
}))

const Footer = () => {
    const classes = useStyles()

    return (
        <Box component="footer">
            <Box className={classes.outCont1}>
                <Box className={classes.container1}>
                    <Box className={classes.getConnect}>Get connected with us on social networks!</Box>
                    <Box>
                        <FontAwesomeIcon icon={faCoffee} />
                        <FontAwesomeIcon icon={['fab', 'fa-facebook-f']} /> 
                    </Box>
                </Box>
            </Box>
            <Box  className={classes.outCont2}>
                <Grid className={classes.container2} container>
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