import { Box, CardMedia, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { getUserData } from '../../store/user/userSelector';
import { useSelector } from 'react-redux';
import Loader from '../../components/Loader';

const useStyles = makeStyles(() => ({
    "@media only screen and (max-width: 12000px)": {
        cont: {
            width: '1140px',
            margin: '64px auto 0 auto',
            height: "70vh",
        },
        cover: {
            height: "422px",
        },
    },
    "@media only screen and (max-width: 1281px)": {
        cont: {
            width: '960px',
            margin: '64px auto 0 auto',
        },
        cover: {
            height: "355px",
        },
    },
    "@media only screen and (max-width: 1025px)": {
        cont: {
            width: '720px',
            margin: '64px auto 0 auto',
        },
        cover: {
            height: "267px",
        }
    },
    "@media only screen and (max-width: 768px)": {
        cont: {
            maxWidth: '540px',
            margin: '58px auto 0 auto',
        },
        cover: {
            height: "200px",
        },
    },
    "@media only screen and (max-width: 567px)": {
        cont: {
            maxWidth: '100%',
            margin: '58px auto 0 auto',
        },
    },
    cover: {
        width: "100%",
        display: "flex",
        alignItems: "flex-end"
    },
    inCont: {
        margin: "0 auto",
    },
    avatar: {
        width: "200px",
        height: "220px",
        margin: "15px 30px",
    },
    name: {
        fontSize: "40px",
        margin: "30px",
        textTransform: 'capitalize',
    }
}))

const ProfilePage = () => {

    const classes = useStyles()

    const user = useSelector(getUserData)
    return (
        <Box className={classes.cont}>
            <Loader loading={!user.avatar}>
                <CardMedia image={user.cover} className={classes.cover}>
                    <CardMedia image={user.avatar} className={classes.avatar} />
                    <Box className={classes.name}>{user.name}</Box>
                </CardMedia>
                <Box>{user.email}</Box>
                <Box>lastname</Box>
                <Box></Box>
            </Loader>
        </Box>
    );
};

export default ProfilePage;