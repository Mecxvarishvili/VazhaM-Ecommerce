import React, { useState } from 'react';
import { Box, Button, Grid } from '@material-ui/core';
import Cards from './Cards';
import { CallMissedSharp, ViewList, ViewModule } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        marginTop: theme.spacing(2),
      },
    },
    viewCont: {
        display: "flex",
        justifyContent: "space-between",
    },
    pagination: {
        "& .MuiPaginationItem-page.Mui-selected": {
            backgroundColor: "#1266f1",
            color: "white",
        }
    }
}))

const RightResult = () => {
    const classes = useStyles()

    const [page, setPage] = useState(1)
    
    const handleChange = (event, value) => {
        setPage(value)
    }
    return (
        <Grid xs={12} sm={8} item >

            <Box className={classes.viewCont}>
                <Box>
                    <ViewList fontSize="large" />
                    <ViewModule fontSize="large" />
                </Box>
                <Box>label Example</Box>
                <Box>
                    <Pagination className={classes.pagination} page={page} onChange={handleChange} count={10} />
                </Box>
            </Box>
            <Cards page={page} />
            <Box className={classes.viewCont}>
                <Box>
                    <ViewList fontSize="large" />
                    <ViewModule fontSize="large" />
                </Box>
                <Box>label Example</Box>
                <Box>
                    <Pagination className={classes.pagination} page={page} onChange={handleChange} count={10} />
                </Box>
            </Box>
            </Grid>
    );
};

export default RightResult;