import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCartProduct } from '../store/cart/cartSelector';
import { Button } from '@material-ui/core';
import { deleteCart, setCart } from '../store/cart/cartActionCreator';
import { makeStyles } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';

const useStyles = makeStyles(() =>({
    addButton: {
      width: "135px",
      height: "35px",
      borderRadius: "4px",
      backgroundColor: "#f2f2f2",
      color: "#4f4f4f",
      fontSize: "10px",
      fontWeight: "700",
      boxShadow: "0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%)",
      margin: "0 auto",
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
      margin: "0 auto",
    },
    icon: {
      fontSize: "15px",
      marginRight: "5px",
    },
}))



const CartButton = (props) => {
    const classes = useStyles() 

    const cart = useSelector(getCartProduct)

    const dispatch = useDispatch()
    const data = props.data 

    const id = !!cart.find(id => id.id === data.id)

    useEffect(() =>{
    })


    return (
        !id ? 
        <Button onClick={() => dispatch(setCart(data))} className={classes.addButton}><FontAwesomeIcon className={classes.icon} icon={faShoppingCart} />ADD TO CART</Button>
        :
        <Button onClick={() => dispatch(deleteCart(data))}  className={classes.deleteButton} ><FontAwesomeIcon className={classes.icon} icon={faTrashAlt} />  Remove from cart</Button>
    );
};

export default CartButton;