import React from 'react';
import { Box, Grid } from '@material-ui/core';
import Customizer from './Customizer';

const RightResult = () => {
    return (
        <Grid md={8} item >
            <Customizer />
            
            <Customizer />
        </Grid>
    );
};

export default RightResult;