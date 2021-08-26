import React from 'react';
import { Box, Checkbox, FormControlLabel,} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
    input: {
        fontSize: '10px',
        fontWeight: 'bold',
        color: 'gray',
    },
    myComponent: {
      "& .MuiFormControlLabel-label": {
          fontSize: '80%',
          color: "#4f4f4f",
      },
      "& .MuiCheckbox-colorSecondary.Mui-checked": {
          color: "#1266f1",
      },
    },
}))



const Size = () => {
    const classes  = useStyles()
    return (
        <Box>
            <Box component='h3' style={{ fontSize: "17px", fontWeight: "500", marginTop: "40px",}}>Size</Box>
            <Box>
                <FormControlLabel className={classes.myComponent} control={<Checkbox name="34" />} label="34" />
            </Box>
            <Box>
                <FormControlLabel className={classes.myComponent} control={<Checkbox name="36"/>} label="36" />
            </Box>
            <Box>
                <FormControlLabel className={classes.myComponent} control={<Checkbox name="38"/>} label="38" />
            </Box>
            <Box>
                <FormControlLabel className={classes.myComponent} control={<Checkbox name="40"/>} label="40" />
            </Box>
        </Box>
    );
};

export default Size;