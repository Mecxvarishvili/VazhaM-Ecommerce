import { Grid, makeStyles } from '@material-ui/core';
import { Box } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(() => ({
    titlCont: {
        height: "130px",
        margin: "58px auto 32px auto",
        backgroundColor: "#fbfbfb",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: "28px",
        fontWeight: "500",
        color: "#4f4f4f",
    },
    container: {
        width: "1140px",
    }
}))

const CartPage = () => {

    const classes = useStyles()

    return (
        <Box>
            <Box className={classes.titlCont}>
                <Box className={classes.title}>Shopping cart</Box>
            </Box>
            <Box className={classes.container}>
                <Grid container>
                    <Grid xs={12} sm={8} item>

                    </Grid>
                    <Grid xs={12} sm={4} item>

                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default CartPage;