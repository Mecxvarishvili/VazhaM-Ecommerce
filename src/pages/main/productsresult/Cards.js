import React from 'react';
import { Grid, Box, makeStyles, Button } from '@material-ui/core';
import { useState } from 'react';
import CardItem from './CardItem';
import { useEffect } from 'react';
import Api from '../../../serializer/api';
import Loader from '../../../components/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { setProduct } from '../../../store/products/productActionCreator';
import { getProductsData } from '../../../store/products/productSelector';
import { setIsLoading } from '../../../store/products/productActionCreator';

const useStyles = makeStyles((theme) => ({
    cont: {
        margin: "30px 0",
    }
}))

const Cards = (props) => {
    const classes = useStyles()
    
    const dispatch = useDispatch()
    const data = useSelector(getProductsData)

     const products = async () => {
        dispatch(setIsLoading(true))
        Api.getProducts(props.page)
        .then(res => {dispatch(setProduct(res))})
        .catch(err => {console.log(err)})
        .finally(() => {dispatch(setIsLoading(false))})
        
    };
    useEffect(() => {
        products()
    }, [props.page]);

    

    return (
        <Box component="section" className={classes.cont}>
            <Grid container spacing={3}>
                <Loader>
                {!!data.data.length && data.data.map((el) => (
                        <Grid key={el.id} item xs={12} sm={6} md={4}>
                            <CardItem data={el} />
                        </Grid>
                    ))}
                </Loader>
            </Grid>
        </Box>
    );
};

export default Cards;