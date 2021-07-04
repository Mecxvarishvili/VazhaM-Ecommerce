import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid } from '@material-ui/core';
import LeftFilter from './leftfilter/LeftFilter';
import RightResult from './rightresult/RightResult';


const useStyles = makeStyles((theme) => ({
    container: {
        width: '1140px',
        margin: '30px auto 0 auto',
    },
  }));
  
  
  
const Main = () => {

const classes = useStyles();

    return (
        <Box component="main">
            <Grid className={classes.container} container  spacing={0, 4}>
                <LeftFilter />
                <RightResult />
            </Grid>
        </Box>
    );
};

export default Main;