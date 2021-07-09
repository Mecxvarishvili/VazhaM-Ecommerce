import React from 'react';
import { Grid, Box, makeStyles } from '@material-ui/core';
import { useState } from 'react';
import CardItem from './CardItem';

const useStyles = makeStyles(() => ({
    cont: {
        margin: "30px 0",
    }
}))

const Cards = () => {
    const classes =useStyles()
    const [data, setData] = useState([
        {
            title: 'Black denim jacket',
            img: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg',
            price: '$99.99',
            hoverImg: 'url("https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg")!important',
        },
        {
            title: 'Grey sweater',
            img: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14a.jpg',
            price: '$21.99',
            hoverImg: 'url("https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14.jpg")!important',
        },
        {
            title: 'Blue denim shirt',
            img: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg',
            price: '$17.99',
            hoverImg: 'url("https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg")!important',
        },
        {
            title: 'Blue denim shirt',
            img: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg',
            price: '$17.99',
            hoverImg: 'url("https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg")!important',
        },
        {
            title: 'Red hoodie',
            img: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg',
            price: '$35.99',
            hoverImg: 'url("https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13.jpg")!important',
        },
        {
            title: 'Grey sweater',
            img: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14a.jpg',
            price: '$21.99',
            hoverImg: 'url("https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14.jpg")!important',
        },
        {
            title: 'Red hoodie',
            img: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg',
            price: '$35.99',
            hoverImg: 'url("https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13.jpg")!important',
        },
        {
            title: 'Blue denim shirt',
            img: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg',
            price: '$17.99',
            hoverImg: 'url("https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg")!important',
        },
        {
            title: 'Black denim jacket',
            img: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg',
            price: '$99.99',
            hoverImg: 'url("https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg")!important',
        },
    ])

    return (
        <Box component="section" className={classes.cont}>
            <Grid container spacing={3}>
                {data.map(el => (
                    <Grid item lg={4}>
                        <CardItem data={el} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Cards;