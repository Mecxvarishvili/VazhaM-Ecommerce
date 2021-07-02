import React from 'react';
import { Box, IconButton, TextField, } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const FilterInput = () => {
    return (
        <Box>
        <TextField id="outlined-size-small" variant="outlined" size="small"/>
            
            <IconButton color="primary" aria-label="add to shopping cart">
              <SearchIcon />
            </IconButton>  
        </Box>
        
    );
};

export default FilterInput;