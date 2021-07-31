import React from 'react';
import { Grid, Box, makeStyles, Button } from '@material-ui/core';
import { useState } from 'react';
import CardItem from './CardItem';
import { useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Api from '../../../serializer/api';

const useStyles = makeStyles((theme) => ({
    spinner: {
      display: 'flex',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
      margin: "10px auto",
      color: "#1266f1",
    },
    cont: {
        margin: "30px 0",
    }
}))

const Cards = (props) => {
    const classes = useStyles()
    
    const [data, setData] = useState({page: '', data: '',})
    const [loading, setIsLoading] = useState(false)

    
    const products = () => {
        setIsLoading(true)
        Api.getProducts(props.page)
        .then(res => setData(res))
        .catch(err => {console.log(err)})
        .finally(() => {
            setIsLoading(false)})
    };
    useEffect(() => {
        products()
    }, [props.page]);

    

    return (
        <Box component="section" className={classes.cont}>
            <Grid container spacing={3}>
                {loading ? <CircularProgress className={classes.spinner} /> : 
                    !!data.data.length && data.data.map(el => (
                        <Grid item xs={12} sm={6} md={4}>
                            <CardItem data={el} />
                        </Grid>
                    ))}
            </Grid>
        </Box>
    );
};

export default Cards;
{/* <Loader isLoading={loading} >
                    {!!data.length && data.map(el => (
                        <Grid item xs={12} sm={4}>
                            <CardItem data={el} />
                        </Grid>
                    ))}
                </Loader> */}