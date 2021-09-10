import React, { useState, useEffect } from 'react';
import { Box, Button, CardMedia, Grid, makeStyles } from '@material-ui/core';
import { getCartProducts } from '../../store/cart/cartSelector';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import CartQuantity from '../../components/CartQuantity';
import CartButton from '../../components/CartButton';
import { Link } from 'react-router-dom';
import { Product } from '../../serializer/routes';

const useStyles = makeStyles(() => ({
    "@media only screen and (max-width: 12000px)": {
        container: {
            width: '1140px',
            margin: "0 auto",
        },
        img: {
            width: "100%",
            height: "190px",
        },
    },
    "@media only screen and (max-width: 1200px)": {
        container: {
            width: '910px',
            margin: "0 auto",
        },
        img: {
            width: "100%",
            height: "150px",
        },
    },
    "@media only screen and (max-width: 959px)": {
        container: {
            width: '690px',
            margin: "0 auto",
        },
        img: {
            width: "100%",
            height: "290px",
        },
    },
    "@media only screen and (max-width: 769px)": {
        container: {
            width: '510px',
            margin: "0 auto",
        },
        img: {
            width: "100%",
            height: "200px",
        },
    },
    "@media only screen and (max-width: 599px)": {
        img: {
            width: "100%",
            height: "550px",
        },
    },
    "@media only screen and (max-width: 563px)": {
        container: {
            maxWidth: '90%',
            margin: "0 auto",
        },
        img: {
            width: "100%",
            height: "480px",
        },
    },
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
    productsCont: {
        padding: "20px",
        marginBottom: "25px",
        boxShadow: '0 10px 20px 0 rgb(0 0 0 / 5%)',

    },
    title: {
        fontSize: "20px",
        marginBottom: "25px",
        fontWeight: "500",
        color: "#4f4f4f",
    },
    buttonCont: {
        display: 'flex',
        justifyContent: "space-between",
        alignItems: "center",
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
        color: "#4f4f4f",
        fontWeight: "500",
        marginBottom: "8px",
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
    describeCont: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "10px",
    },
    cartAbout: {
        maxWidth: "300px",
        minHeight: "130px",
    },
    category: {
        fontSize: "14px",
        textTransform: "capitalize",
        color: "#6c757d!important"
    }, 
    deliveryCont: {
        padding: "20px",
        boxShadow: '0 10px 20px 0 rgb(0 0 0 / 5%)',
        marginBottom: "25px",

    },
    deliveryTitle: {
        fontSize: "20px",
        fontWeight: "500",
        color: "#4f4f4f",
        marginBottom: "25px"
    },
    deliveryTime: {
        fontSize: "16px",
        color: "#4f4f4f",
    },
    payCont: {
        padding: "20px",
        marginBottom: "25px",
        boxShadow: '0 10px 20px 0 rgb(0 0 0 / 5%)'
    },
    payTitle: {
        fontSize: "20px",
        fontWeight: "500",
        color: "#4f4f4f",
        marginBottom: "25px",
    },
    payImgCont: {
        display: "flex",
    },
    payImg: {
        width: "50px",
        height: "30px",
        marginRight: "10px",
    },
    line: {
      height: "1px",
      backgroundColor: "rgba(0,0,0,.1)",
      margin: "16px 0",
    },
    heart: {
        fontSize: "15px",
    },
    wishlistButton: {
        color: "#6c757d",
        fontSize: "10px",
        fontWeight: "700",
        marginLeft: "10px",
        "&:hover": {
            backgroundColor: "White",
        }
    },
    price: {
        fontSize: "16px",
        color: "#4f4f4f",
        fontWeight: "500",
    },
    amountCont: {
        padding: "20px",
        marginBottom: "25px",
        boxShadow: '0 10px 20px 0 rgb(0 0 0 / 5%)'
    },
    topAmount: {
        fontSize: "17px",
        color: "#4f4f4f",
        display: "flex",
        justifyContent: "space-between",
        padding: "5px 0",
    },
    bottomAmount: {
        fontSize: "17px",
        color: "#4f4f4f",
        fontWeight: "500",
        display: "flex",
        justifyContent: "space-between",
    },
    vat: {
        flexBasis: "160px",
    },
    empty: {
        textAlign: "center",
        fontSize: "25px",
        color: "#4f4f4f",
        padding: "40px 0"
    },
    addDiscount: {
        padding: "20px",
        marginBottom: "25px",
        boxShadow: '0 10px 20px 0 rgb(0 0 0 / 5%)',
        fontSize: "16px",
        color: "#4f4f4f",
    }
}))

const CartPage = () => {

    const classes = useStyles()

    const cart = useSelector(getCartProducts)
    const amountArray = cart.map(el => {
        return Math.round(el.price) * el.qty
    })

    var amount = 0

    for (var i = 0; i < amountArray.length; i++){
        amount += amountArray[i];
    }
    
    return (
        <Box>
            <Box className={classes.titleCont}>
                <Box className={classes.topTitle}>Shopping cart</Box>
            </Box>
            <Box className={classes.container}>
                <Grid container spacing={4}>
                    <Grid xs={12} md={8} item conatiner spacing={2} >
                        <Box className={classes.productsCont}>
                            { cart.length ?
                            <>
                            <Box className={classes.title}>Cart ({cart.length} items)</Box>
                                { cart.map((el) =>(
                                    <>
                                        <Grid key={el.id} container spacing={5} className={classes.cartCont}>
                                            <Grid item xs={12} sm={5} md={3}>
                                                <Link className={classes.link} to={Product.replace(":id", el.id)} >
                                                    <CardMedia className={classes.img} image={el.img} />
                                                </Link>
                                            </Grid>
                                            <Grid item  xs={12} sm={7} md={9} className={classes.aboutCont}>
                                                <Box className={classes.describeCont}>
                                                    <Box className={classes.cartAbout}>
                                                        <Box className={classes.cartTitle}>{el.title}</Box>
                                                        <Box className={classes.category}>Category: {el.category}</Box>
                                                    </Box>
                                                    <Box>
                                                        <Box>
                                                            <CartQuantity data={el} />
                                                        </Box>
                                                    </Box>
                                                </Box>
                                                <Box className={classes.buttonCont} >
                                                    <Box>
                                                        <CartButton data={el} />
                                                        <Button onClick={() => console.log(amount)} className={classes.wishlistButton}><FontAwesomeIcon className={classes.heart} icon={faHeart}/>&nbsp; move to wishlist</Button>
                                                    </Box>
                                                    <Box className={classes.price}>Total Price: &nbsp;${Math.round(el.price) * el.qty}</Box>
                                                </Box>
                                            </Grid>
                                        </Grid> 
                                        <Box className={classes.line} />
                                    </>
                                ))}
                            <Box className={classes.infoCircle}> <FontAwesomeIcon icon={faInfoCircle}/> Do not delay the purchase, adding items to your cart does not mean booking them.</Box>
                            </>
                            : <Box className={classes.empty}>Cart is empty</Box>  }
                        </Box>
                        <Box  className={classes.deliveryCont}>
                            <Box className={classes.deliveryTitle}>Expected shipping delivey</Box>
                            <Box className={classes.deliveryTime}>Thu. 12.03. -Mon. 16.03.</Box>
                        </Box>
                        <Box  className={classes.payCont}>
                            <Box className={classes.payTitle}>We Accept</Box>
                            <Box className={classes.payImgCont} >
                                <CardMedia className={classes.payImg} image={'https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg'}/>
                                <CardMedia className={classes.payImg} image={'https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg'}/>
                                <CardMedia className={classes.payImg} image={'https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg'} />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid xs={12} md={4} item>
                        <Box className={classes.amountCont}>
                            <Box className={classes.title}>The total amount of</Box>
                            <Box>
                                <Box className={classes.topAmount}>
                                    <Box>Temporary amount</Box>
                                    <Box>${amount}</Box>
                                </Box>
                                <Box className={classes.topAmount}>
                                    <Box>Shipping:</Box>
                                    <Box>Gratis</Box>
                                </Box>
                                <Box className={classes.line} />
                                <Box className={classes.bottomAmount}>
                                    <Box className={classes.vat}>The total amount of (including VAT) </Box>
                                    <Box>${amount}</Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box className={classes.addDiscount}>add a discount code(optional)</Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default CartPage;