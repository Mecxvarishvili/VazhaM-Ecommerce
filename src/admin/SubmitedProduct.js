import { makeStyles } from '@material-ui/core';
import { Box, Button } from '@material-ui/core';
import { CallMissedSharp } from '@material-ui/icons';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const useStyles = makeStyles(() => ({
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    title: {
        fontSize: "25px",
        margin: "50px 0",
    },
    button: {
        color: "white",
        backgroundColor: "#1266f1",
        padding: "10px",
        "&:hover": {
            backgroundColor: "#1266f1",
        }
    },
}))

const SubmitedProduct = (props) => {

    const classes = useStyles()

    const [submit, setSubmit] = useState(true)
    const addProduct = () => {
        setSubmit(false)
    }
    return (
        <Box>
            {props.submit && submit ? 
            <Box className={classes.container}>
                <Box className={classes.title}>Product Is added</Box>
                <Button className={classes.button} onClick={addProduct} >Add Another Product</Button>
            </Box> 
            : props.children}
        </Box>
    );
};

export default SubmitedProduct;