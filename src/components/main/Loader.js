import React from 'react';
import { Box } from '@material-ui/core';
import Spinner from './Spinner';

const Loader = (props) => {
    return (
           props.isLoading ? <Spinner /> : props.children
    );
};

export default Loader;