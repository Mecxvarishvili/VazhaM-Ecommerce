import { Box } from '@material-ui/core';
import React from 'react';

const SubmitedProduct = (props) => {
    return (
        <Box>
            {props.submit ? <Box>Product Is added</Box> : props.children}
        </Box>
    );
};

export default SubmitedProduct;