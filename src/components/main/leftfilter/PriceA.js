import React from 'react';
import { Box, Radio, FormControlLabel, makeStyles, RadioGroup, TextField} from '@material-ui/core';

const useStyles = makeStyles(() =>({
myComponent: {
    "& .MuiFormControlLabel-label": {
        fontSize: '12px',
    },
    "& .MuiRadio-colorSecondary.Mui-checked": {
        color: "#1266f1",
    },
    color: "#4f4f4f",
  },
input: {
    width: "160px",
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor:  "#1266f1",
    },
    "& .MuiFormLabel-root.Mui-focused": {
        color:  "#1266f1",
    },
},
dash: {
    margin: "7px 0px"
},
minmax: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "space-between",
}
}))

const PriceA = () => {
    const classes = useStyles()

    const [value, setValue] = React.useState('');
  
    const handleChange = (e) => {
      setValue(e.target.value);
    };
    
    return (
        <Box component="section">
            <Box component='h3' style={{ fontSize: "17px", fontWeight: "500", marginTop: "35px",}}>Price</Box>
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
            <Box className={classes.minmax}>
                <Box>
                    <TextField className={classes.input} id="outlined-size-small" label="$ Min" variant="outlined" size="small" />
                </Box>
                <Box className={classes.dash}>-</Box>
                <Box>
                    <TextField className={classes.input} id="outlined-size-small" label="$ Max" variant="outlined" size="small" />
                </Box>
            </Box>
        </Box>
    );
};

export default PriceA;