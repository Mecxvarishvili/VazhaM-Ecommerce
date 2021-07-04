import React from 'react';
import { Box, Grid } from '@material-ui/core';
import Categories from './Categories';
import Condition from './Condition';
import PriceA from './PriceA';
import PriceB from './PriceB';
import FilterInput from './FilterInput';
import CustomerReview from './CustomerReview';
import { makeStyles } from '@material-ui/core/styles';
import Color from './Color';
import Size from './Size';

const useStyles = makeStyles(() => ({
    filter: {
    }
}))

const LeftFilter = () => {
    const classes = useStyles()

    return (
        <Grid md={4} item>
            <Box component='section'>
                <Categories />
            </Box>
            <Box className={classes.filter} component='section'>
                <Box component='h5' style={{ fontSize: "22px", fontWeight: "500"}}>Filters</Box>
                <FilterInput />
                <Condition />
                <CustomerReview />
                <PriceA />
                <PriceB />
                <Size />
                <Color />
            </Box>
        </Grid>
    );
};

export default LeftFilter;