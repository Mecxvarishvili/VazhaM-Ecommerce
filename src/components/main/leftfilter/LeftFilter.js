import React from 'react';
import { Box, Grid } from '@material-ui/core';
import Categories from './Categories';
import Condition from './Condition';
import PriceA from './PriceA';
import FilterInput from './FilterInput';
const LeftFilter = () => {
    return (
        <Grid md={4} item>
            <Box component='section'>
                <Categories />
            </Box>
            <Box component='section'>
                <Box component='h3'>Filters</Box>
                <FilterInput />
                <Condition />
                <PriceA />
            </Box>
        </Grid>
    );
};

export default LeftFilter;