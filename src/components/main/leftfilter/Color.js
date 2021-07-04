import React from 'react';
import { Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    outCont: {
        display: "flex",
        flexWrap: "wrap"
    },
    container: {
        width: "32px",
        height: "32px",
        margin: "8px 16px 8px 0px",
        borderRadius: "50%",
    },
    white: {
        width: "32px",
        height: "32px",
        margin: "8px 16px 8px 0px",
        border: "1px solid #ccc",
        borderRadius: "50%",
    },
    gray: {
        backgroundColor: "#9e9e9e",
        border: "1px solid #9e9e9e",
    },
    black: {
        backgroundColor: "#000",
        border: "1px solid #000",
    },
    green: {
        backgroundColor: "#4caf50",
        border: "1px solid #4caf50",
    },
    skyblue: {
        backgroundColor: "#2196f3",
        border: "1px solid #2196f3",
    },
    purple: {
        backgroundColor: "#9c27b0",
        border: "1px solid #9c27b0",
    },
    yellow: {
        backgroundColor: "#ffeb3b",
        border: "1px solid #ffeb3b",
    },
    blue: {
        backgroundColor: "#3f51b5",
        border: "1px solid #3f51b5",
    },
    red: {
        backgroundColor: "#f44336",
        border: "1px solid #f44336",
    },
    orange: {
        backgroundColor: "#ff9800",
        border: "1px solid #ff9800",
    },
}))

const Color = () => {
    const classes = useStyles()
    return (
        <Box>
            <Box component='h3' style={{ fontSize: "17px", fontWeight: "500", marginTop: "35px",}}>Color</Box>
            <Box className={classes.outCont}>
                <Box className={classes.white}></Box>
                <Box className={`${classes.container} ${classes.gray}`}></Box>
                <Box className={`${classes.container} ${classes.black}`}></Box>
                <Box className={`${classes.container} ${classes.green}`}></Box>
                <Box className={`${classes.container} ${classes.skyblue}`}></Box>
                <Box className={`${classes.container} ${classes.purple}`}></Box>
                <Box className={`${classes.container} ${classes.yellow}`}></Box>
                <Box className={`${classes.container} ${classes.blue}`}></Box>
                <Box className={`${classes.container} ${classes.red}`}></Box>
                <Box className={`${classes.container} ${classes.orange}`}></Box>
            </Box>
        </Box>
    );
};

export default Color;