import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Box, Typography, Button} from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Product } from '../../../serializer/routes';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCart, setCart } from '../../../store/cart/cartActionCreator';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import CartButton from '../../../components/CartButton';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
  },
  media: {
    height: 250,
    "&:hover": {
        backgroundImage: (props) => props.data.hoverImg,
        transition: "0.7s",
    },
  },
  link: {
    textDecoration: "none",
    color: "black",
  },
  buttonCont: {
    display: "flex",
    alignItems: "center",
    marginTop: "15px",
    
  },
}));

const CardItem = (props) => {
  
  const classes = useStyles(props);
  const dispatch = useDispatch()

  const data = props.data

  return (
    <Box>
      <Card className={classes.root}>
        <Link className={classes.link} to={Product.replace(":id", props.data.id)} >
        <CardActionArea>
          <CardMedia
            className={`${classes.media} ${classes.hover}`}
            image={data.img}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography className={classes.title} gutterBottom variant="h6" component="h2">
              {data.title}
            </Typography>
            <Typography className={classes.title} variant="h6" component="p">
                ${data.price}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      </Card>
      <Box className={classes.buttonCont}>
        <CartButton data={data}/>
      </Box>
    </Box>
  );
}

export default CardItem;