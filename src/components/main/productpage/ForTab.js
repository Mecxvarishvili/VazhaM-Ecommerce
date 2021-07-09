import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Box, Grid } from '@material-ui/core';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
const useStyles = makeStyles(() => ({
    tab: {
        textAlign: "center",
    }
})) 

const ForTab = () => {
    const classes = useStyles()

    return (
        <Box component="section">
            <Router>
                <Grid container>
                    <Grid className={classes.tab} item sm={4} >
                        <Link to="/users/description">DESCRIPTION</Link>
                    </Grid>
                    <Grid className={classes.tab} item sm={4} >
                        <Link to="/users/information">INFORMATION</Link>
                    </Grid>
                    <Grid className={classes.tab} item sm={4} >
                        <Link to="/users/reviews">REVIEWS</Link>
                    </Grid>
                </Grid>
                <Box>
                    <Switch>
                        <Route path="/users/description">dfsdfsdf</Route>
                        <Route path="/users/information">wegqafdasdfaeg</Route>
                        <Route path="/users/reviews">ergwerg</Route>
                    </Switch>
                </Box>
            </Router>
        </Box>
    );
};

export default ForTab;