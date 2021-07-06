import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: '100%'
  },
  media: {
    height: 220,
    "&hover": {
        backgroundImage: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg",
    },
  },
  hover: {
    "&:hover": {
      border: '2px solid black',
      backgroundImage: 'url("https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg")',
    }
  }
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={`${classes.media} ${classes.hover}`}
          image={props.data.img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            {props.data.title}
          </Typography>
          <Typography variant="h6" component="p">
              {props.data.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}