import React from 'react';
import { Slider, Box, } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  cont: {
    display: "flex",
  },
  left: {
    marginRight: "10px",
    paddingTop: "30px",
    fontSize: '12px',
    color: "#4f4f4f",
  },
  right: {
    marginLeft: "10px",
    paddingTop: "30px",
    fontSize: '12px',
    color: "#4f4f4f",
  },
}))
const PrettoSlider = withStyles({
    root: {
      color: '#1266f1',
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

  const classes = useStyles()
  return (
    <Box>
        <Box component='h3' style={{ fontSize: "17px", fontWeight: "500", marginTop: "40px",}}>Price</Box>
        <Box className={classes.cont}>
          <Box className={classes.left} component="span">$0</Box>
          <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={20} />
          <Box className={classes.right} component="span">$100</Box>
        </Box>
    </Box>
  );
}

export default PriceB;