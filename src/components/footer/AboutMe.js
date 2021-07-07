import { Box, Grid } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    title: {
        fontSize: "20px",
        fontWeight: "500",
    },
    line: {
        width: '60px',
        margin: "10px 0",
        background: "#1266f1",
        height: "1px",
    },
    describe: {
        width: "255px",
        paddingTop: "8px",
        fontSize: "15px",
        lineHeight: "1.8"
    },
}))


const AboutMe = () => {
    const classes = useStyles()
    return (
        <Grid item lg={3}>
            <Box className={classes.title}>About me</Box>
            <Box className={classes.line}></Box>
            <Box className={classes.describe}>
                Here you can use rows and columns to organize your footer content. 
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </Box>
        </Grid>
    );
};

export default AboutMe;