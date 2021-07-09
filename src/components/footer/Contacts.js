import { Box, Grid } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ListItem } from '@material-ui/core';
import { List } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMap, faEnvelope, faClock } from '@fortawesome/free-regular-svg-icons' 
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons' 

const useStyles = makeStyles(() => ({
    title: {
        fontSize: "20px",
        fontWeight: "500",
    },
    li: {
        padding: "0 0 15px 0",
        fontSize: "15px",
    },
    line: {
        width: '60px',
        margin: "10px 0",
        background: "#1266f1",
        height: "1px",
    },
    icon: {
        marginRight: "10px",
    },
}))



const Contacts = () => {
    const classes = useStyles()

    return (
        <Grid item lg={3}>
            <Box className={classes.title}>Contacts</Box>
            <Box className={classes.line}></Box>
            <Box>
                <List>
                    <ListItem className={classes.li} ><FontAwesomeIcon className={classes.icon} icon={faMap} /> New York, Avenue Street 10</ListItem>
                    <ListItem className={classes.li} ><FontAwesomeIcon className={classes.icon} icon={faPhoneAlt} /> 042 876 836 908</ListItem>
                    <ListItem className={classes.li} ><FontAwesomeIcon className={classes.icon} icon={faEnvelope} /> company@example.com</ListItem>
                    <ListItem className={classes.li} ><FontAwesomeIcon className={classes.icon} icon={faClock} /> Monday - Friday: 10-17</ListItem>
                </List>
            </Box>
        </Grid>
    );
};

export default Contacts;