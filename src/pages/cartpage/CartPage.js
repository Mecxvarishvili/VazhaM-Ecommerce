import { Box, Button, CardMedia, Grid, makeStyles } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { getCartProduct } from '../../store/cart/cartSelector';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { deleteCart } from '../../store/cart/cartActionCreator';
import { faTrash, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles(() => ({
    titleCont: {
        height: "130px",
        margin: "58px auto 32px auto",
        backgroundColor: "#fbfbfb",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    topTitle: {
        fontSize: "28px",
        fontWeight: "500",
        color: "#4f4f4f",
    },
    title: {
        fontSize: "20px",
        marginBottom: "25px",
        fontWeight: "500",
        color: "#4f4f4f",
    },
    container: {
        width: "1140px",
        margin: "0 auto",
    },
    img: {
        width: "100%",
        height: "190px",
    },
    removeCont: {
        display: 'flex',
    },
    cartCont: {
        display: 'flex',
        /* justifyContent: "space-around", */
    },
    aboutCont: {
    },
    infoCircle: {
        color: "#1266f1"
    },
    cartTitle: {
        fontSize: "20px",
    },
    giveShadow: {
        boxShadow: '0 10px 20px 0 rgb(0 0 0 / 5%)'
    },
    deleteButton: {
      width: "150px",
      height: "35px",
      borderRadius: "4px",
      backgroundColor: "#f2f2f2",
      color: "#4f4f4f",
      fontSize: "10px",
      fontWeight: "700",
      boxShadow: "0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%)",
    },
    icon: {
      fontSize: "15px",
      marginRight: "5px",
    },

}))

const CartPage = () => {

    const classes = useStyles()
    const dispatch = useDispatch()
    const cart = useSelector(getCartProduct)
    const [amountCount, setAmountCount] = useState()
    useEffect(() => {
        console.log('hello')
    }, [dispatch])

    return (
        <Box>
            <Box className={classes.titleCont}>
                <Box className={classes.topTitle}>Shopping cart</Box>
            </Box>
            <Box className={classes.container}>
                <Grid container spacing={4}>
                    <Grid xs={12} sm={8} item>
                        <Box className={classes.giveShadow}>
                            { cart.length ?
                            <>
                            <Box className={classes.title}>Cart ({cart.length} items)</Box>
                            { cart.map((el) =>(
                            <Grid key={el.id} container spacing={5} className={classes.cartCont}>
                                <Grid sm={3} item>
                                    <CardMedia className={classes.img} image={el.img} />
                                </Grid>
                                <Grid item  sm={9} className={classes.aboutCont}>
                                    <Box>
                                        <Box>
                                            <Box className={classes.cartTitle}>{el.title}</Box>
                                            <Box>{el.category}</Box>
                                            <Box></Box>
                                            <Box></Box>
                                        </Box>
                                        <Box>
                                            <Box>
                                                <Button>-</Button>
                                                <input/>
                                                <Button>+</Button>
                                            </Box>
                                            <Box>(Note, 1 piece)</Box>
                                        </Box>
                                    </Box>
                                    <Box className={classes.removeCont} >
                                    <Button onClick={() => dispatch(deleteCart(el))}  className={classes.deleteButton} ><FontAwesomeIcon className={classes.icon} icon={faTrash} /> Remove from cart</Button>
                                        <Button>move to wishlist</Button>
                                        <Box></Box>
                                    </Box>
                                </Grid>
                            </Grid> 
                            ))}
                            <Box className={classes.infoCircle}> <FontAwesomeIcon icon={faInfoCircle}/> Do not delay the purchase, adding items to your cart does not mean booking them.</Box>
                            </>
                            : <Box>cart is empty</Box>  }
                        </Box>
                        <Box  className={classes.giveShadow}>
                            <Box>Expected shipping delivey</Box>
                            <Box>Thu. 12.03. -Mon. 16.03.</Box>
                        </Box>
                        <Box  className={classes.giveShadow}>
                            <Box>We Accept</Box>
                            <Box>
                                <CardMedia />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid xs={12} sm={4} item>
                        <Box className={classes.giveShadow}>
                            <Box className={classes.title}>The total amount of</Box>
                            <Box>
                                <Box>
                                    <Box>Temporary amount</Box>
                                    <Box></Box>
                                </Box>
                                <Box>
                                    <Box>Shipping:</Box>
                                    <Box></Box>
                                </Box>
                                <Box></Box>
                                <Box>
                                    <Box>The total amount of (including VAT) </Box>
                                    <Box></Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box>add a discount code(optional)</Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default CartPage;