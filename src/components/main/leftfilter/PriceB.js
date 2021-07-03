import React from 'react';
import { Slider, Box, } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';

const PrettoSlider = withStyles({
    root: {
      color: 'blue',
      height: 8,
    },
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      marginTop: -8,
      marginLeft: -12,
      '&:focus, &:hover, &$active': {
        boxShadow: 'inherit',
      },
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 4px)',
    },
    track: {
      height: 8,
      borderRadius: 4,
    },
    rail: {
      height: 8,
      borderRadius: 4,
    },
  })(Slider);

const PriceB = () => {

  return (
    <div>
        <Box component="h3">Price</Box>
        <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={20} />
    </div>
  );
}

export default PriceB;