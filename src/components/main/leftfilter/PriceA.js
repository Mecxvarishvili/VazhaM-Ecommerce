import React from 'react';
import { Box, Radio, FormControlLabel, makeStyles, RadioGroup} from '@material-ui/core';

const useStyles = makeStyles(() =>({
myComponent: {
    "& .MuiFormControlLabel-label": {
        fontSize: '12px',
    }
  },
}))

const PriceA = () => {
    const classes = useStyles()

    const [value, setValue] = React.useState('');
  
    const handleChange = (e) => {
      setValue(e.target.value);
    };
    
    return (
        <Box component="section">
            <Box component="h3">Price</Box>
            <RadioGroup value={value} onChange={handleChange}>
                <Box>
                    <FormControlLabel value="u25" className={classes.myComponent} control={<Radio />} label="UNDER $25" />
                </Box>
                <Box>
                    <FormControlLabel value="25t50" className={classes.myComponent} control={<Radio />} label="$25 TO $50" />
                </Box>
                <Box>
                    <FormControlLabel value="50t100"  className={classes.myComponent} control={<Radio />} label="$50 TO $100" />
                </Box>
                <Box>
                    <FormControlLabel value="100t200"  className={classes.myComponent} control={<Radio />} label="$100 TO $200" />
                </Box>
                <Box>
                    <FormControlLabel value="200a"  className={classes.myComponent} control={<Radio />} label="$200 & ABOVE" />
                </Box>
            </RadioGroup>
        </Box>
    );
};

export default PriceA;