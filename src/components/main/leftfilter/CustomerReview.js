import React from 'react';
import { Box, Button, Typography, } from '@material-ui/core';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    button: {
        padding: "15px 0",
        backgroundColor: "transparent",
    },
    rating: {
        color: "#1266f1",
        "& .MuiRating-iconEmpty": {
            color: "#1266f1"
        },
        "& .MuiSvgIcon-root": {
            width: "20px",
        }
    },
    up: {
        padding: "0px 50px 0px 10px",
        fontSize: "100%",
        color: "#4f4f4f",
    }
    }))


const CustomerReview = () => {
    const classes = useStyles()

    return (
        <Box>
            <Box component='h2' style={{ fontSize: "17px", fontWeight: "500", marginTop: "35px",}}>Avg. Customer Review</Box>
            <Button padding="none" className={classes.button} style={{ backgroundColor: 'transparent' }}>
                <Rating name="read-only" className={classes.rating} value="4" readOnly emptyIcon={<StarBorderIcon fontSize="inherit" />} />
                <Typography className={classes.up} component="legend"> & UP</Typography>
            </Button>
            <Button padding="none"  className={classes.button}>
                <Rating className={classes.rating} name="read-only" value="3" readOnly emptyIcon={<StarBorderIcon fontSize="inherit" />} />
                <Typography className={classes.up} component="legend"> & UP</Typography>
            </Button>
            <Button padding="none"  className={classes.button}>
                <Rating className={classes.rating} name="read-only" value="2" readOnly emptyIcon={<StarBorderIcon fontSize="inherit" />} />
                <Typography className={classes.up} component="legend"> & UP</Typography>
            </Button>
            <Button padding="none"  className={classes.button}>
                <Rating className={classes.rating} name="read-only" value="1" readOnly emptyIcon={<StarBorderIcon fontSize="inherit" />} />
                <Typography className={classes.up} component="legend"> & UP</Typography>
            </Button>
        </Box>
    );
};

export default CustomerReview;