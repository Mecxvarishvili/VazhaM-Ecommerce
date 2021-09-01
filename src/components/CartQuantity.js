import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setQuantity } from '../store/cart/cartActionCreator';
import { getCartProducts } from '../store/cart/cartSelector';
import { Box, Button, makeStyles, TextField } from '@material-ui/core';
import { useEffect } from 'react';

const useStyles = makeStyles(() => ({
    cont: {
        width: "140px",
        fontSize: "20px",
        border: "1px solid #ced4da",
    },
    increase: {
        width: "45px",
        height: "35px",
        padding: "0",
        border: "0",
        textAlign: "center",
        fontSize: "25px",
        backgroundColor: "white",
        borderLeft: "1px solid #ced4da",
        color: "#495057"
    },
    decrease: {
        width: "45px",
        height: "35px",
        padding: "0",
        border: "0",
        textAlign: "center",
        fontSize: "25px",
        backgroundColor: "white",
        borderRight: "1px solid #ced4da",
        color: "#495057"
    },
    input: {
        width: "50px",
        height: "30px",
        padding: "0",
        border: "0",
        textAlign: "center",
        fontSize: "20px",
        outline: "none",
        color: "#495057"
    },
}))

const CartQuantity = (props) => {
    const classes = useStyles()
    const cart = useSelector(getCartProducts)
    const dispatch = useDispatch()
    const data = props.data
    const thisCart = cart.find(id => id.id === data.id)

    var thisCartQty = 1
    
    if (!!thisCart) {
        thisCartQty = thisCart.qty
    }

    const [qty, setQty] = useState(thisCartQty)

    const increaseQuantity = () => {
        if(!!thisCart) {
            setQty(qty + 1)
            dispatch(setQuantity(data, qty + 1))
        } else {
            setQty(qty + 1)
            props.setQty(qty + 1)
        }
    }

    const decreaseQuantity = () => {
        if(!!thisCart) {
            if(qty > 1){
              setQty(qty - 1)
              dispatch(setQuantity(data, qty - 1))
            }
        } else {
            setQty(qty - 1)
            props.setQty(qty - 1)
        }
    }

    const handSetQuantity = (e) => {
        if(!!thisCart) {
            setQty(parseInt(e.target.value))
            dispatch(setQuantity(data, parseInt(e.target.value)))
        } else {
            setQty(parseInt(e.target.value))
            props.setQty(parseInt(e.target.value))
        }
    }

    return (
        <Box className={classes.cont}>
            <button className={classes.decrease} onClick={decreaseQuantity}>&#8722;</button>
            <input className={classes.input} type="text" onChange={handSetQuantity} value={qty} />
            <button className={classes.increase} onClick={increaseQuantity} >&#43;</button>
        </Box>
    );
};

export default CartQuantity;