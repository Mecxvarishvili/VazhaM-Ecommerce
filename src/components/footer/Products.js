import { Box, Grid } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List } from '@material-ui/core';
import { ListItem } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    title: {
        fontSize: "20px",
        fontWeight: "500",
    },
    li: {
        padding: "0 0 15px 0",
        fontSize: "15px",
    },
    line: {
        width: '60px',
        margin: "10px 0",
        background: "#1266f1",
        height: "1px",
    },
}))



const Products = () => {
    const classes = useStyles()

    return (
        <Grid item lg={3}>
            <Box className={classes.title}>Products</Box>
            <Box className={classes.line}></Box>
            <Box>
                <List>
                    <ListItem className={classes.li}>MDBootstrap</ListItem>
                    <ListItem className={classes.li}>MDWordPress</ListItem>
                    <ListItem className={classes.li}>BrandFlow</ListItem>
                    <ListItem className={classes.li}>Bootstrap Angular</ListItem>
                </List>
            </Box>
        </Grid>
    );
};

export default Products;