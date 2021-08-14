import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid } from '@material-ui/core';
import LeftFilter from './leftfilter/LeftFilter';
import RightResult from './rightresult/RightResult';


const useStyles = makeStyles((theme) => ({
    main: {
        zIndex: "1",
    },
    "@media only screen and (max-width: 12000px)": {
        container: {
            width: '1140px',
            margin: '30px auto 0 auto',
        },
    },
    "@media only screen and (max-width: 1200px)": {
        container: {
            width: '960px',
            margin: '30px auto 0 auto',
        },
    },
    "@media only screen and (max-width: 990px)": {
        container: {
            width: '720px',
            margin: '30px auto 0 auto',
        },
    },
    "@media only screen and (max-width: 768px)": {
        container: {
            maxWidth: '540px',
            margin: '30px auto 0 auto',
        },
    },
    "@media only screen and (max-width: 567px)": {
        container: {
            maxWidth: '100%',
            margin: '30px auto 0 auto',
        },
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
  }));
  
  
  
const Main = () => {

const classes = useStyles();

    return (
        <Box component="main" className={classes.main}>    
            <Box className={classes.forShop}>
                <Box className={classes.shopBackg}>
                    <Box className={classes.shop}>Shop</Box>
                </Box>
            </Box>
            <Grid className={classes.container} container  spacing={4}>
                <LeftFilter />
                <RightResult />
            </Grid>
        </Box>
    );
};

export default Main;