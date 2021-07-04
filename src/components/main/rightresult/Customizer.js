import React from 'react';
import { CallMissedSharp, ViewList, ViewModule } from '@material-ui/icons';
import { Box } from '@material-ui/core';
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

const Customizer = () => {
    const classes = useStyles()

    return (
        <Box className={classes.viewCont}>
            <Box>
                <ViewList fontSize="large" />
                <ViewModule fontSize="large" />
            </Box>
            <Box>label Example</Box>
            <Box>
                <Pagination className={classes.pagination} count={3} />
            </Box>
        </Box>
    );
};

export default Customizer;