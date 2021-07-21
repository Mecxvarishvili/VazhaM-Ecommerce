import React from 'react';
import { Box, Grid, TextField } from '@material-ui/core';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    titlCont: {
        marginTop: "62px",
        backgroundColor: "#4f4f4f",
        display: "flex",
        justifyContent: "center",
    },
    title: {
        height: "100px",
    },
    container: {
        width: "1140px",
        display: "flex",
        justifyContent: "center",
        margin: "0 auto",
    },
    inCont: {

    }
}))

const SignIn = () => {

    const classes = useStyles()

    const formik = useFormik({
      initialValues: {
        email: '',
        password: '',
      },
      validationSchema: Yup.object({
        email: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        password: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
      }),
      onSubmit: values => {
      },
    });
    return (
        <Box>
            <Box className={classes.titlCont}>
                <Box classname={classes.title}>Sign In</Box>
            </Box>
            <Grid container className={classes.container}>
                <Grid  className={classes.inCont} item md={6}>
                    <form onSubmit={formik.handleSubmit}> 
                      <Box className={classes.email}>Add New Product</Box>
                      <TextField size="small" id="outlined-basic" label="Your Email" variant="outlined"  id="email" type="text" {...formik.getFieldProps('email')} />
                      {formik.touched.email && formik.errors.email ? (<div>{formik.errors.email}</div>) : null}

                      <TextField size="small" id="outlined-basic" label="Your Password" variant="outlined"  id="password" type="text" {...formik.getFieldProps('password')} />
                      {formik.touched.password && formik.errors.password ? (<div>{formik.errors.password}</div>) : null}

                      <button type="submit">Submit</button>
                    </form>
                </Grid>
            </Grid>
        </Box>
    );
};

export default SignIn;