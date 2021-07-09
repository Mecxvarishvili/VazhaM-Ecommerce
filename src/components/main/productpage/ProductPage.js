import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box, Button } from '@material-ui/core'
import Rating from '@material-ui/lab/Rating';
import ProductImage from './ProductImage';
import AboutProduct from './AboutProduct';

const useStyles = makeStyles(() => ({
    main: {
        justifyContent: "center",
    },
    outTitle: {
        backgroundColor: "green",
        padding: "80px 10px",
        display: "flex",
    },
    title: {
        fontSize: "40px",
        fontWeight: "500",
        margin: '0 auto',
    },
    container: {
        border: '1px solid red',
        margin: '0 auto',
    },
}))

const ProductPage = () => {
    const classes = useStyles()
    return (
        <Box component="main" className={classes.main}>
            <Box className={classes.outTitle}>
                <Box className={classes.title}>Product menu</Box>
            </Box>
            <Box >
                <Grid sm={9} xs={6} className={classes.container}>
                    <Box component="section">
                        <Grid container>
                            <ProductImage />
                            <AboutProduct />
                        </Grid>
                    </Box>
                    <Box component="section">
                        tabs
                    </Box>
                </Grid>
            </Box>
        </Box>
    );
};

export default ProductPage;