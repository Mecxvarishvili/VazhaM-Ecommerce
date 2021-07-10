import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box, Button } from '@material-ui/core'
import Rating from '@material-ui/lab/Rating';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles(() => ({
    table: {
    },
    buyButton: {
      width: "100px",
      height: "35px",
      borderRadius: "4px",
      backgroundColor: "#1266f1",
      color: "white",
      fontSize: "10px",
      fontWeight: "700",
      marginRight: "10px",
    },
    addButton: {
      width: "135px",
      height: "35px",
      borderRadius: "4px",
      backgroundColor: "#f2f2f2",
      color: "#4f4f4f",
      fontSize: "10px",
      fontWeight: "700",
      boxShadow: "0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%)"
    },
    icon: {
      fontSize: "15px",
      marginRight: "5px",
    },
    title: {
      fontSize: "20px",
      fontWeight: "",
      color: "#4f4f4f",
      fontWeight: "500",
      marginBottom: "8px",
    },
    category: {
      fontSize: "12px",
      fontWeight: "400",
      color: "#6c757d",
      marginBottom: "8px",
    },
    rating: {
        color: "#1266f1",
        marginBottom: "16px",
        "& .MuiRating-iconEmpty": {
            color: "#1266f1"
        },
        "& .MuiSvgIcon-root": {
            width: "20px",
        },
    },
    price: {
      fontSize: "16px",
      fontWeight: "500",
      color: "#4f4f4f",
      marginBottom: "16px",
    },
    describe: {
      fontSize: "16px",
      fontWeight: "300",
      color: "#4f4f4f",
      marginBottom: "16px",
      lineHeight: "1.5"
    },
    tabCont: {
      display: "flex",
      fontSize: "14px",
      color: "#4f4f4f",
      padding: "8px 0",
    },
    tab1: {
      fontWeight: "500",
      width: "135px",
    },
    tab2: {
      fontWeight: "300",
    },
    line: {
      height: "1px",
      backgroundColor: "rgba(0,0,0,.1)",
      margin: "16px 0",
    },
}))

function createData(name, describe) {
    return { name, describe, };
  }

const rows = [
  createData('Model', 'Shirt 5407X'),
  createData('Color', 'Blue'),
  createData('Delivery', 'USA, Europe'),
];

const AboutProduct = () => {
    const classes = useStyles()

    return (
        <Grid item md={6} xs={12}>
            <Box className={classes.title}>Blue denim shirt</Box>
            <Box className={classes.category}>SHIRTS</Box>
            <Rating className={classes.rating} name="read-only" value="4" readOnly emptyIcon={<StarBorderIcon fontSize="inherit" />} />
            <Box className={classes.price}>$17.99</Box>
            <Box className={classes.describe}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sapiente illo. 
                Sit error voluptas repellat rerum quidem, soluta enim perferendis voluptates laboriosam. 
                Distinctio, officia quis dolore quos sapiente tempore alias.
            </Box>
            <Box>
              <Box className={classes.tabCont}>
                <Box className={classes.tab1}>Model</Box>
                <Box className={classes.tab2}>Shirt 5407X</Box>
              </Box>
              <Box className={classes.tabCont}>
                <Box className={classes.tab1}>Color</Box>
                <Box className={classes.tab2}>Blue</Box>
              </Box>
              <Box className={classes.tabCont}>
                <Box className={classes.tab1}>Delivery</Box>
                <Box className={classes.tab2}>USA, Europe</Box>
              </Box>
            </Box>
            <Box className={classes.line}></Box>
            <Box>

            </Box>
            <Box>
                <Button className={classes.buyButton}>BUY NOW</Button>
                <Button className={classes.addButton}><ShoppingCartIcon className={classes.icon} />ADD TO CART</Button>
            </Box>
        </Grid>
    );
};

export default AboutProduct;