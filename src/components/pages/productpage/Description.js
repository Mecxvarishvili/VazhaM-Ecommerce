import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles(() => ({
    title: {
        fontSize: "20px",
        fontWeight: "500",
        color: "#4f4f4f",
        marginBottom: "8px",
    },
    category: {
      fontSize: "12px",
      fontWeight: "400",
      color: "#6c757d",
      marginBottom: "8px",
    },
    rating: {
        color: "#1266f1",
        marginBottom: "16px",
        "& .MuiRating-iconEmpty": {
            color: "#1266f1"
        },
        "& .MuiSvgIcon-root": {
            width: "20px",
        },
    },
    price: {
      fontSize: "16px",
      fontWeight: "500",
      color: "#4f4f4f",
      marginBottom: "16px",
    },
    describe: {
      fontSize: "16px",
      fontWeight: "300",
      color: "#4f4f4f",
      marginBottom: "16px",
      lineHeight: "1.5"
    },
}))

const Description = (props) => {
    const classes = useStyles()
    const data = props.data
    return (
        <Box>
            <Box className={classes.title}>{data.title}</Box>
            <Box className={classes.category}>{data.category}</Box>
            <Rating className={classes.rating} name="read-only" value="4" readOnly emptyIcon={<StarBorderIcon fontSize="inherit" />} />
            <Box className={classes.price}>${data.price}</Box>
            <Box className={classes.describe}>{data.describe}</Box>
        </Box>
    );
};

export default Description;