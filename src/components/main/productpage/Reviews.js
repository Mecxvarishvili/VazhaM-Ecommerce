import React from 'react';
import { Box, makeStyles, Grid, TextareaAutosize, TextField } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const useStyles = makeStyles(() => ({
    title: {
        fontSize: "20px",
        fontWeight: "500",
        color: "#4f4f4f",
        marginBottom: "8px",
    },
    profileOutCont: {
        margin: "16px 0",
    },
    profileCont: {
        display: "flex",
    },
    date: {
        flexGrow: 1,
        fontWeight: "500",
        fonSize: "16px",
        color: "#4f4f4f",
    },
    span: {
        fontWeight: "300",
        color: "#4f4f4f",
        fonSize: "16px",
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
    line: {
      height: "1px",
      backgroundColor: "rgba(0,0,0,.1)",
      margin: "16px 0",
    },
    pTag: {
        fontWeight: "300",
        color: "#4f4f4f",
        fonSize: "16px",
        marginBottom: "16px",
    },
    textArea: {
        width: "100%",
    },
}))

const Reviews = () => {
    const classes = useStyles()

    return (
        <Box>
            <Box className={classes.title}>1 review for Fantasy T-shirt</Box>
            <Grid className={classes.profileOutCont} container >
                <Grid item sm={1}>
                    <Box src="https://mdbootstrap.com/img/Photos/Others/placeholder1.jpg" component="img" />
                </Grid>
                <Grid item sm={11}>
                    <Box className={classes.profileCont}>
                        <Box className={classes.date}>Marthasteward <Box className={classes.span} component="span">– January 28, 2020</Box></Box>
                        <Rating className={classes.rating} name="read-only" value="4" readOnly emptyIcon={<StarBorderIcon fontSize="inherit" />} />
                    </Box>
                    <Box className={classes.span}>Nice one, love it!</Box>
                </Grid>                
            </Grid>
            <Box className={classes.line}></Box>
            <Box className={classes.title}>Add a review</Box>
            <Box className={classes.pTag}>Your email address will not be published.</Box>
            <Rating className={classes.rating} name="read-only" value="4" readOnly emptyIcon={<StarBorderIcon fontSize="inherit" />} />
            <Grid container>
                <Grid sm={12}>
                    <TextareaAutosize className={classes.textArea} id="outlined-basic" label="Outlined" variant="outlined"
                      aria-label="maximum height"
                      placeholder="your review"
                      id="form"
                      label="fasd"
                    />
                </Grid>
                <Box></Box>
                <Box></Box>
            </Grid>
        </Box>
    );
};

export default Reviews;