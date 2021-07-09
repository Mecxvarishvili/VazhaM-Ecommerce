import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Grid, Box } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles(() => ({
    mainImg: {

    },
    img: {

    },
    media: {
      height: 450,
    },
}))

const ProductImage = () => {
    const classes = useStyles()

    return (
        <Grid item lg={6}>
            <Box>
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      className={`${classes.media} ${classes.hover}`}
                      image={'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg'}
                      title="Contemplative Reptile"
                    />
                  </CardActionArea>
                </Card>
            </Box>
            <Grid container>
                <Grid item lg={3}></Grid>
                <Grid item lg={3}></Grid>
                <Grid item lg={3}></Grid>
                <Grid item lg={3}></Grid>
            </Grid>
        </Grid>
    );
};

export default ProductImage;