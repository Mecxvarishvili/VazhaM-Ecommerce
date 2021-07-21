import React from 'react';
import { Box, Button, TextField } from '@material-ui/core';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles(() => ({

}))

const SignUp = () => {
    const classes = useStyles()
    const formik = useFormik({
      initialValues: {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        phone: '',
      },
      validationSchema: Yup.object({
        firstName: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        lastName: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        email: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        email: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        password: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        phone: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
      }),
      onSubmit: values => {
      },
    });
    return (
        <Box>
            <Box>
                <Box>Sign In</Box>
            </Box>
            <Box>
                <Box>
                    <form onSubmit={formik.handleSubmit} className={classes.container}> 
                        <Box className={classes.email}>Add New Product</Box>
                        <TextField size="small" id="outlined-basic" label="First name" variant="outlined"  id="firstName" type="text" {...formik.getFieldProps('firstName')} />
                        {formik.touched.firstName && formik.errors.firstName ? (<div>{formik.errors.firstName}</div>) : null}

                        <TextField size="small" id="outlined-basic" label="Last name" variant="outlined"  id="lastName" type="text" {...formik.getFieldProps('lastName')} />
                        {formik.touched.lastName && formik.errors.lastName ? (<div>{formik.errors.lastName}</div>) : null}


                        <TextField size="small" id="outlined-basic" label="Your firstName" variant="outlined"  id="email" type="text" {...formik.getFieldProps('email')} />
                        {formik.touched.email && formik.errors.email ? (<div>{formik.errors.email}</div>) : null}

                        <TextField size="small" id="outlined-basic" label="Your Password" variant="outlined"  id="password" type="text" {...formik.getFieldProps('password')} />
                        {formik.touched.password && formik.errors.password ? (<div>{formik.errors.password}</div>) : null}

                        <TextField size="small" id="outlined-basic" label="Your Password" variant="outlined"  id="password" type="text" {...formik.getFieldProps('password')} />
                        {formik.touched.password && formik.errors.password ? (<div>{formik.errors.password}</div>) : null}

                        <TextField size="small" id="outlined-basic" label="Phone number" variant="outlined"  id="phone" type="text" {...formik.getFieldProps('phone')} />
                        {formik.touched.phone && formik.errors.phone ? (<div>{formik.errors.phone}</div>) : null}

                        <button type="submit">Submit</button>
                    </form>
                </Box>
            </Box>
        </Box>
    );
};

export default SignUp;