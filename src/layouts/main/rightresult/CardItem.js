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
  addButton: {
    width: "135px",
    height: "35px",
    borderRadius: "4px",
    backgroundColor: "#f2f2f2",
    color: "#4f4f4f",
    fontSize: "10px",
    fontWeight: "700",
    boxShadow: "0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%)",
    margin: "0 auto",
  },
  deleteButton: {
    width: "150px",
    height: "35px",
    borderRadius: "4px",
    backgroundColor: "#f2f2f2",
    color: "#4f4f4f",
    fontSize: "10px",
    fontWeight: "700",
    boxShadow: "0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%)",
  },
  icon: {
    fontSize: "15px",
    marginRight: "5px",
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
      <Button onClick={() => dispatch(setCart(data))} className={classes.addButton}><FontAwesomeIcon className={classes.icon} icon={faShoppingCart} />ADD TO CART</Button>
      <Button onClick={() => dispatch(deleteCart(data))}  className={classes.deleteButton} ><FontAwesomeIcon className={classes.icon} icon={faTrash} /> Remove from cart</Button>
      </Box>
    </Box>
  );
}

export default CardItem;