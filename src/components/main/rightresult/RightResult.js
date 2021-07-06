import React from 'react';
import { Box, Grid } from '@material-ui/core';
import Customizer from './Customizer';
import Cards from './Cards';

const RightResult = () => {
    return (
        <Grid sm={12} lg={8} item >
            <Customizer />
            <Cards />
            <Customizer />
        </Grid>
    );
};

export default RightResult;