import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    container: {
        width: '1140px',
        margin: '0 auto',
    },
  }));
  
  
  
const Main = () => {

const classes = useStyles();

    return (
        <Box component="main">
            <Grid className={classes.container} container  spacing={0, 4}>
                <Grid md={4} item>
                    a
                </Grid>
                <Grid md={8} item>
                    a
                </Grid>
            </Grid>
        </Box>
    );
};

export default Main;