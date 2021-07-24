import React, { useState } from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import { Box, Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsersCog } from '@fortawesome/free-solid-svg-icons'
import AddProduct from './AddProduct';
import PaginationControl from './PaginationControl';
import ProductsTable from './ProductsTable';

const useStyles = makeStyles(() => ({
    container: {
        display: "flex",
        textAlign: "center",
        minHeight: "70vh",
        margin: '100px auto 0 auto',
    },
    inCont: {
        padding: "0 50px",
    },
    forControl: {
        display: "flex",
        justifyContent: "space-around",
        margin: "40px 0",
    },
    admin: {
        fontSize: "40px",
        fontWeight: "500",
    }
}))

const AdminContent = () => {
    const classes = useStyles()

    return (
        <Grid container className={classes.container}>
            <Grid item xs={12} sm={2}>
                <Box>Products</Box>
                <Box>Users</Box>
                <Box>Categories</Box>
            </Grid>
            <Grid className={classes.inCont} item xs={12} sm={10}>
                <Box className={classes.admin}>Admin Tools:</Box>
                <Box className={classes.forControl}>
                    <AddProduct />
                    <PaginationControl />
                </Box>
                <ProductsTable />
            </Grid>
        </Grid>
    );
};

export default AdminContent;