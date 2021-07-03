import React from 'react';
import { Box, Grid, IconButton, TextField, } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    myComponent: {
        "& .MuiOutlinedInput-root": {
          display: 'block',
        },
        display: 'block',
    },
}))

const FilterInput = () => {

    const classes = useStyles()

    return (
        <Grid container>
            <Grid  md='10'>
                <TextField id="outlined-size-small" variant="outlined" size="small" className={classes.myComponent}/>
            </Grid>
            <Grid  md='1'>
                <IconButton color="primary" aria-label="add to shopping cart" md="1">
                  <SearchIcon />
                </IconButton>  
            </Grid>
        </Grid>
        
    );
};

export default FilterInput;