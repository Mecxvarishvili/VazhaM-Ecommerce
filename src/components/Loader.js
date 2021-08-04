import { Box, makeStyles } from '@material-ui/core';
import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyes = makeStyles((theme) => ({
    spinner: {
      display: 'flex',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
      margin: "10px auto",
      color: "#1266f1",
    },
}))

const Loader = (props, loading) => {
    const classes = useStyes()
    return (
        props.loading ? <CircularProgress className={classes.spinner} /> : props.children
    );
};

export default Loader;