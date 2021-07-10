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



const UsefulLinks = () => {
    const classes =useStyles()

    return (
        <Grid item xs={12} md={3}>
            <Box className={classes.title}>Useful links</Box>
            <Box className={classes.line}></Box>
            <Box>
                <List>
                    <ListItem className={classes.li}>Your Account</ListItem>
                    <ListItem className={classes.li}>Become an Affiliate</ListItem>
                    <ListItem className={classes.li}>Shipping Rates</ListItem>
                    <ListItem className={classes.li}>Help</ListItem>
                </List>
            </Box>
        </Grid>
    );
};

export default UsefulLinks;