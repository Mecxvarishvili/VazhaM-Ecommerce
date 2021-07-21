import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { Box, Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsersCog } from '@fortawesome/free-solid-svg-icons'
import AddProduct from './AddProduct';
import PaginationControl from './PaginationControl';

const useStyles = makeStyles(() => ({
    container: {
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        height: "100vh",
        maxWidth: "1140px",
        margin: '100px auto 0 auto',
    }
}))

const AdminContent = () => {
    const classes = useStyles()

    return (
        <Box className={classes.container}>
                <AddProduct />
                <PaginationControl />
        </Box>
    );
};

export default AdminContent;