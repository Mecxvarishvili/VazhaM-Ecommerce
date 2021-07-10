import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Grid, Box } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { ImageAspectRatioRounded } from '@material-ui/icons';
import { useState } from 'react';

const useStyles = makeStyles(() => ({
    mainImg: {

    },
    img: {
      height: '140px',
      borderRadius: "10px",
      margin: "10px 0",
    },
    media: {
      height: 450,
      width: "100%",
      borderRadius: "10px",
    },
}))

const ProductImage = () => {
    const classes = useStyles()

    const [img, setImg] = useState('https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg')

    return (
        <Grid item container md={6} xs={12}>
            <Grid item md={12} xs={12}>
                <Card className={classes.media}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={img}
                      title="Contemplative Reptile"
                    />
                  </CardActionArea>
                </Card>
            </Grid>
            <Grid item container spacing={2}>
                <Grid item md={3} xs={3}>
                    <CardMedia
                      onMouseEnter={() => setImg('https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg')}
                      className={classes.img}
                      image={'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg'}
                      title="Contemplative Reptile"
                    />
                </Grid>
                <Grid item md={3} xs={3}>
                    <CardMedia
                      onMouseEnter={() => setImg('https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg')}
                      className={classes.img}
                      image={'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg'}
                      title="Contemplative Reptile"
                    />
                  </Grid>
                <Grid item md={3} xs={3}>
                    <CardMedia
                      onMouseEnter={() => setImg('https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14a.jpg')}
                      className={classes.img}
                      image={'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14a.jpg'}
                      title="Contemplative Reptile"
                    />
                  </Grid>
                <Grid item md={3} xs={3}>
                    <CardMedia
                      onMouseEnter={() => setImg('https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg')}
                      className={classes.img}
                      image={'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg'}
                      title="Contemplative Reptile"
                    />
                  </Grid>
            </Grid>
        </Grid>
    );
};

export default ProductImage;