import React from 'react';
import { Grid, Box, makeStyles, Button } from '@material-ui/core';
import { useState } from 'react';
import CardItem from './CardItem';
import { useEffect } from 'react';
import Api from '../../../serializer/api';
import Loader from '../../../components/Loader';
import { useContext } from 'react';
import { AuthContext } from '../../../store/UserContextProvider';

const useStyles = makeStyles((theme) => ({
    cont: {
        margin: "30px 0",
    }
}))

const Cards = (props) => {
    const classes = useStyles()
    
    const [data, setData] = useState({page: '', data: '',})
    const [loading, setIsLoading] = useState(false)

    const context = useContext(AuthContext)

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
                <Loader loading={loading}>
                {!!data.data.length && data.data.map(el => (
                        <Grid item xs={12} sm={6} md={4}>
                            <CardItem data={el} />
                        </Grid>
                    ))}
                </Loader>
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