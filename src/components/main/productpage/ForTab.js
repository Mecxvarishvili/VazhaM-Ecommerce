import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Box, Grid } from '@material-ui/core';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Description from './Description';
import Information from './Information';
import Reviews from './Reviews';
const useStyles = makeStyles(() => ({
    tabCont: {
    },
    tabHeader: {
        borderBottom: "1px solid #e5e5e5",
    },
    tabFooter: {
        padding: "24px 0",
        backgroudnColor: "red",
    },
    tab: {
        textAlign: "center",
        padding: "20px 24px",
    },
    tabTitle: {
        textDecoration: "none",
        color: "#6c757d",
        fontWeight: "500",
        fontSize: "13px",
    },
})) 

const ForTab = () => {
    const classes = useStyles()
    const aaa = classes.tabCont

    return (
        <Box className={classes.tabCont} component="section">
            <Router>
                <Grid className={classes.tabHeader} container>
                    <Grid className={classes.tab} item sm={4} >
                        <Link className={classes.tabTitle} to="/users/description">DESCRIPTION</Link>
                    </Grid>
                    <Grid className={classes.tab} item sm={4} >
                        <Link className={classes.tabTitle} to="/users/information">INFORMATION</Link>
                    </Grid>
                    <Grid className={classes.tab} item sm={4} >
                        <Link className={classes.tabTitle} to="/users/reviews">REVIEWS</Link>
                    </Grid>
                </Grid>
                <Box className={classes.tabFooter}>
                    <Switch>
                        <Route path="/users/description">
                            <Description />
                        </Route>
                        <Route path="/users/information">
                            <Information />
                        </Route>
                        <Route path="/users/reviews">
                            <Reviews />
                        </Route>
                    </Switch>
                </Box>
            </Router>
        </Box>
    );
};

export default ForTab;