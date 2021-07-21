import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box, Button } from '@material-ui/core'
import Rating from '@material-ui/lab/Rating';
import ProductImage from './ProductImage';
import AboutProduct from './AboutProduct';
import ForTab from './ForTab';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Api from '../../serializer/api';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
    main: {
        justifyContent: "center",
        zIndex: "1",
    },
    outTitle: {
        backgroundColor: "#fbfbfb",
        color: "#4f4f4f",
        marginTop: "60px",
        marginBottom: "30px",
        display: "flex",
    },
    title: {
        fontSize: "30px",
        fontWeight: "500",
        margin: '0 auto',
        padding: "48px 15px",
    },
    container: {
        margin: '0 auto',
    },
    inCont: {
        marginBottom: "70px",
    },
    spinnerCont: {
        height: "80vh",
        display: 'flex',
    },
    spinner: {
        '& > * + *': {
          marginLeft: theme.spacing(2),
        },
        margin: "auto auto",
        color: "#1266f1",
        alignItems: "stretch",
    },
}))

const ProductPage = () => {

    const classes = useStyles()
    const [data, setData] = useState('')
    const [loading, setIsLoading] = useState(false)
    const {id} = useParams()
    
    useEffect(() => {
        setIsLoading(true)
        Api.getProductItem(id)
            .then(res => setData(res))
            .catch(err => {console.log(err)})
            .finally(() => {
                setIsLoading(false)
            })
    }, []);

    return (
        loading ? <Box className={classes.spinnerCont}><CircularProgress className={classes.spinner} /></Box> :
        <Box component="main" className={classes.main}>
            <Box className={classes.outTitle}>
                <Box className={classes.title}>Product page</Box>
            </Box>
            <Box >
                <Grid sm={9} xs={9} className={classes.container}>
                    <Box className={classes.inCont} component="section">
                        <Grid container spacing={5}>
                            <ProductImage data={data} />
                            <AboutProduct data={data} />
                        </Grid>
                    </Box>
                    <ForTab data={data}/>
                </Grid>
            </Box>
        </Box>
    );
};

export default ProductPage;