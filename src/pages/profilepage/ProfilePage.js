import { Box, Button, CardMedia, Grid, makeStyles, TextField } from '@material-ui/core';
import React from 'react';
import { getUserData } from '../../store/user/userSelector';
import { useSelector } from 'react-redux';
import Loader from '../../components/Loader';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Api from '../../serializer/api';

const useStyles = makeStyles(() => ({
    "@media only screen and (max-width: 12000px)": {
        cont: {
            width: '1140px',
            margin: '64px auto 0 auto',
            minHeight: "70vh",
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
    },
    input: {
      width: "350px",
      marginTop: "20px",
    },
    err: {
      color: "#ff5756",
      fontSize: "14px",
      marginTop: "3px"
    },
    title: {
        fontSize: "40px",
        /* textAlign: "center" */
    },
    inCont: {
        display: "flex",
        flexDirection: "column",
        alignItems: 'center',
    },
    button: {
        color: "white",
        backgroundColor: "#1266f1",
        fontSize: "12px",
        padding: "10px 20px",
        marginTop: "20px",
        "&:hover": {
            backgroundColor: "#1266f1",
        }
    },
}))

const ProfilePage = () => {

    const classes = useStyles()

    const user = useSelector(getUserData)

    const formik = useFormik({
      initialValues: {
        name: '',
        email: '',
        description: '',
      },
      validationSchema: Yup.object({
        name: Yup.string()
            .required('Enter Title'),
        email: Yup.string()
            .required('Enter Price'),
        description: Yup.string()
            .required('Enter Price'),
      }),
      onSubmit: (value, {resetForm}) => {
        Api.updateUser(formik)
        resetForm()
        console.log('hello')
      },
    });
    return (
        <Box className={classes.cont}>
            <Loader loading={!user.avatar}>
                <CardMedia image={user.cover} className={classes.cover}>
                    <CardMedia image={user.avatar} className={classes.avatar} />
                    <Box className={classes.name}>{user.name}</Box>
                </CardMedia>
                <Box className={classes.inCont}>
                    <Box className={classes.title}>Account info</Box>
                    <Box>
                        <Box>Email: {user.email}</Box>
                        <Box>lastname</Box>
                        <Box></Box>
                    </Box>
                </Box>
                <Box className={classes.inCont}>
                    <Box className={classes.title}>Update Account</Box>
                    <form onSubmit={formik.handleSubmit}  className={classes.inCont}> 
                        <TextField className={classes.input} size="small" id="outlined-basic" label="Name" variant="outlined"  id="name" type="text" {...formik.getFieldProps('name')} />
                        {formik.touched.name && formik.errors.name ? (<div className={classes.err}>{formik.errors.name}</div>) : null}

                        <TextField className={classes.input} size="small" id="outlined-basic" label="Email" variant="outlined"  id="email" type="text" {...formik.getFieldProps('email')} />
                        {formik.touched.email && formik.errors.email ? (<div className={classes.err}>{formik.errors.email}</div>) : null}

                        <TextField className={classes.input} size="small" id="outlined-basic" label="Description" variant="outlined" id="description" type="text" {...formik.getFieldProps('description')} />
                        {formik.touched.description && formik.errors.description ? (<div className={classes.err}>{formik.errors.description}</div>) : null}

                        <Button className={classes.button} type="submit">Submit</Button>

                    </form>
                </Box>
            </Loader>
        </Box>
    );
};

export default ProfilePage;