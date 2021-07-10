import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Box, Typography} from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  root: {
    width: '100%'
  },
  media: {
    height: 250,
    "&:hover": {
        backgroundImage: (props) => props.data.hoverImg,
        transition: "0.7s",
    },
    title: {
      "& .MuiTypography-root": {
        margin: " 0 auto"
      }
    },
  },
  link: {
    textDecoration: "none"
  }
}));

const CardItem = (props) => {
  const classes = useStyles(props);

  return (
    <Link className={classes.link} to="/product">
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={`${classes.media} ${classes.hover}`}
          image={props.data.img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography className={classes.title} gutterBottom variant="h6" component="h2">
            {props.data.title}
          </Typography>
          <Typography className={classes.title} variant="h6" component="p">
              {props.data.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Link>
  );
}

export default CardItem;