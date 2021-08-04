import React, { useState } from 'react';
import { Box, Select, MenuItem,  } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useEffect } from 'react';
import Api from '../serializer/api';
import CircularProgress from '@material-ui/core/CircularProgress';
import Loader from '../Loader';

const useStyles = makeStyles((theme) => ({
    table: {
      minWidth: 650,
    },
    spinner: {
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
      color: "#1266f1",
      margin: "50px 0",
    },
    spinCont: {
      margin: "30px 0",
    },
    tableCont: {
      marginTop: "30px",
    },
    tableHead: {
      backgroundColor: "#e0e0e0",
      '& .MuiTableCell-head': {
        fontWeight: "600",
      }
    },
  }));

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  

const ProductsTable = () => {
    const classes = useStyles()
    const [data, setData] = useState({data: '',})
    const [limit, setLimit] = useState(20);
    const [loading, setIsLoading] = useState(false)

    const handleChange = (event) => {
        setLimit(event.target.value);
        setIsLoading(true)
        Api.getProductLimit(event.target.value)
        .then(res => setData(res))
        .catch(err => {console.log(err)})
        .finally(() => {
            setIsLoading(false)
        })
      };

      useEffect(() => {
        setIsLoading(true)
        Api.getProductLimit(limit)
        .then(res => setData(res))
        .catch(err => {console.log(err)})
        .finally(() => {
          setIsLoading(false)
        })
      }, [])

    return (
        <Box>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={limit}
              onChange={handleChange}
            >
              <MenuItem value={5}>Five</MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={15}>Fifteen</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
            </Select>
            <Box>
              <Loader loading={loading}>
                <TableContainer className={classes.tableCont} component={Paper}>
                  <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                      <TableRow className={classes.tableHead}>
                        <TableCell>ID</TableCell>
                        <TableCell align="center">Title</TableCell>
                        <TableCell align="center">Price</TableCell>
                        <TableCell align="center">Describe</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                    {!!data.data.length && data.data.map(el => (<TableRow key={el.name}>
                      <TableCell component="th" scope="row">
                        {el.id}
                      </TableCell>
                      <TableCell align="center">{el.title}</TableCell>
                      <TableCell align="center">${el.price}</TableCell>
                      <TableCell align="left">{el.describe}</TableCell>
                      </TableRow>))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Loader>
            </Box>
        </Box>
    );
};

export default ProductsTable;


/* {loading ? <CircularProgress className={classes.spinner} /> : 
!!data.length && data.map(el => (
    <Grid item xs={12} sm={6} md={4}>
        <CardItem data={el} />
    </Grid>
))} */


{/* <TableRow key={el.name}>
<TableCell component="th" scope="row">
  {el.id}
</TableCell>
<TableCell align="right">{el.title}</TableCell>
<TableCell align="right">{el.price}</TableCell>
<TableCell align="right">{el.describe}</TableCell>
</TableRow> */}