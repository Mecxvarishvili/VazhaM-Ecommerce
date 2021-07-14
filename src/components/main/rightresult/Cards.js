import React from 'react';
import { Grid, Box, makeStyles } from '@material-ui/core';
import { useState } from 'react';
import CardItem from './CardItem';
import Loader from '../Loader';
import { useEffect } from 'react';

const useStyles = makeStyles(() => ({
    cont: {
        margin: "30px 0",
    }
}))

const Cards = () => {
    const classes =useStyles()
    const [data, setData] = useState('')

    const [loading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setData(json.map(el => {
                return {
                    title: el.title,
                    price: el.price,
                    img: el.image,
                    id: el.id,
                }
            })))
            .catch(err => {console.log(err)})
            .finally(() => {
                setIsLoading(false)
            })
    }, []);

    return (
        <Box component="section" className={classes.cont}>
            <Grid container spacing={3}>
                <Loader isLoading={loading} >
                    {!!data.length && data.map(el => (
                        <Grid item xs={12} sm={4}>
                            <CardItem data={el} />
                        </Grid>
                    ))}
                </Loader>
            </Grid>
        </Box>
    );
};

export default Cards;