import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box, Button } from '@material-ui/core'
import Rating from '@material-ui/lab/Rating';
import ProductImage from './ProductImage';
import AboutProduct from './AboutProduct';
import ForTab from './ForTab';

const useStyles = makeStyles(() => ({
    main: {
        justifyContent: "center",
    },
    outTitle: {
        backgroundColor: "#fbfbfb",
        color: "#4f4f4f",
        marginTop: "60px",
        marginBottom: "30px",
        display: "flex",
    },
    title: {
        fontSize: "30px",
        fontWeight: "500",
        margin: '0 auto',
        padding: "48px 15px",
    },
    container: {
        margin: '0 auto',
    },
}))

const ProductPage = () => {
    const classes = useStyles()
    return (
        <Box component="main" className={classes.main}>
            <Box className={classes.outTitle}>
                <Box className={classes.title}>Product page</Box>
            </Box>
            <Box >
                <Grid sm={9} xs={6} className={classes.container}>
                    <Box component="section">
                        <Grid container spacing={5}>
                            <ProductImage />
                            <AboutProduct />
                        </Grid>
                    </Box>
                    <ForTab />
                </Grid>
            </Box>
        </Box>
    );
};

export default ProductPage;