import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box, Button } from '@material-ui/core'
import Rating from '@material-ui/lab/Rating';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const useStyles = makeStyles(() => ({
    rating: {
        color: "#1266f1",
        "& .MuiRating-iconEmpty": {
            color: "#1266f1"
        },
        "& .MuiSvgIcon-root": {
            width: "20px",
        },
    },
    table: {
    },
}))

function createData(name, describe) {
    return { name, describe, };
  }

const rows = [
  createData('Model', 'Shirt 5407X'),
  createData('Color', 'Blue'),
  createData('Delivery', 'USA, Europe'),
];

const AboutProduct = () => {
    const classes = useStyles()

    return (
        <Grid item lg={6}>
            <Box>Blue denim shirt</Box>
            <Box>SHIRTS</Box>
            <Rating className={classes.rating} name="read-only" value="4" readOnly emptyIcon={<StarBorderIcon fontSize="inherit" />} />
            <Box>$17.99</Box>
            <Box>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sapiente illo. 
                Sit error voluptas repellat rerum quidem, soluta enim perferendis voluptates laboriosam. 
                Distinctio, officia quis dolore quos sapiente tempore alias.
            </Box>
            <Box>
                <TableContainer component={Paper}>
                  <Table className={classes.table} aria-label="simple table">
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow key={row.name}>
                          <TableCell component="th" scope="row">{row.name}</TableCell>
                          <TableCell>{row.describe}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
            </Box>
            <Box component="hr" />
            <Box>

            </Box>
            <Box>
                <Button>BUY NOW</Button>
                <Button>ADD TO CART</Button>
            </Box>
        </Grid>
    );
};

export default AboutProduct;