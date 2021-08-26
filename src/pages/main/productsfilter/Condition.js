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
          fontSize: '12px',
          color: "#4f4f4f",
      },
      "& .MuiCheckbox-colorSecondary.Mui-checked": {
        color: "#1266f1",
      }
    },
}))


const Condition = () => {
    const classes = useStyles()
    return (
        <Box component='section'>
            <Box component='h3' style={{ fontSize: "17px", fontWeight: "500", marginTop: "35px",}}>Condition</Box>
            <Box>
                <FormControlLabel className={classes.myComponent} control={<Checkbox name="NEW"/>} label="NEW" />
            </Box>
            <Box>
                <FormControlLabel className={classes.myComponent} control={<Checkbox name=" USED"/>} label="USED" />
            </Box>
            <Box>
                <FormControlLabel className={classes.myComponent} control={<Checkbox name=" COLLECTIBLE"/>} label="COLLECTIBLE" />
            </Box>
            <Box>
                <FormControlLabel className={classes.myComponent} control={<Checkbox name=" RENEWED"/>} label="RENEWED" />
            </Box>
        </Box>
    );
};

export default Condition;