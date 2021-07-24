import React from 'react';
import { Box, Grid, TextField, Checkbox, FormControlLabel, Button, } from '@material-ui/core';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import { Link } from 'react-router-dom';
import { SIGNIN } from "../serializer/routes"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons' 


const BlueCheckbox = withStyles({
    root: {
      color: blue[700],
      '&$checked': {
        color: blue[700],
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);

const useStyles = makeStyles(() => ({
    err: {
      fontSize: "15px",
        color: "#ff5756",
        marginBottom: "20px",
    },
    nameErr: {
      fontSize: "15px",
      color: "#ff5756",
      marginBottom: "15px",
    },
    titlCont: {
        height: "130px",
        margin: "62px auto 32px auto",
        backgroundColor: "#fbfbfb",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: "28px",
        fontWeight: "500",
        color: "#4f4f4f",
    },
    "@media only screen and (max-width: 12000px)": {
      container: {
          maxWidth: "1140px",
          display: "flex",
          justifyContent: "center",
          margin: "0 auto",
      },
    },
    "@media only screen and (max-width: 1200px)": {
      name: {
        flexBasis: "220px",
        width: "100%",
      },
      container: {
        width: '960px',
          display: "flex",
          justifyContent: "center",
          margin: "0 auto",
      },
    },
    "@media only screen and (max-width: 990px)": {
      container: {
        width: '720px',
          display: "flex",
          justifyContent: "center",
          margin: "0 auto",
      },
    },
    "@media only screen and (max-width: 768px)": {
      container: {
        maxWidth: '560px',
          display: "flex",
          justifyContent: "center",
          margin: "0 auto",
      },
    },
    "@media only screen and (max-width: 567px)": {
      container: {
        maxWidth: '100%',
          display: "flex",
          justifyContent: "center",
          padding: " auto 10px",
      },
    },
    nameCont: {
      display: "flex",
      justifyContent: "space-between",
    },
    name: {
      flexBasis: "48%",
    },
    firstName: {
      width: "100%",
      marginBottom: "5px",
    },
    lastName: {
      width: "100%",
      marginBottom: "5px",
    },
    forInput: {
        margin: "5px auto",
        width: "100%",
    },
    bottom: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    remember: {
        color: "#6c757d",
        fontWeight: "400",
        "& .MuiTypography-body1": {
            fontSize: "13px",
        }
    },
    link: {
        textDecoration: "none",
        color: "#007bff",
        fontSize: "16px",
    },
    footerCont: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    button: {
        width: "100px",
        height: "40px",
        backgroundColor: "#1266f1",
        color: "white",
        borderRadius: "6px",
        fontSize: "12px",
        margin: "20px 0",
        "&:hover": {
            backgroundColor: "#1266f1",
        },
    },
    iconCont: {
        display: "flex",
        justifyContent: "center",
        marginBottom: "30px",
    },
    icon: {
        width: "20px",
        height: "20px",
        color: "white",
    },
    fbIcon: {
        marginRight: "5px",
        width: "36px",
        height: "36px",
        borderRadius: "50%",
        backgroundColor: "#3b5998",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    twIcon: {
        marginRight: "5px",
        width: "36px",
        height: "36px",
        borderRadius: "50%",
        backgroundColor: "#55acee",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    liIcon: {
        marginRight: "5px",
        width: "36px",
        height: "36px",
        borderRadius: "50%",
        backgroundColor: "#0082ca",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    ghIcon: {
        marginRight: "5px",
        width: "36px",
        height: "36px",
        borderRadius: "50%",
        backgroundColor: "#333333",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    free: {
        color: "#4f4f4f",
        marginBottom: "16px",
    },
    line: {
      width: "100%",
      height: "1px",
      backgroundColor: "#c4c4c4",
      marginBottom: "16px",
    },
    terms: {
      color: "#4f4f4f",
      marginBottom: "50px",
    }
}))

const SignUp = () => {

    const classes = useStyles()

    const formik = useFormik({
      initialValues: {
        email: '',
        password: '',
      },
      validationSchema: Yup.object({
        firstName: Yup.string()
          .required('Enter your first name'),
        lastName: Yup.string()
          .required('Enter your last name'),
        email: Yup.string().email('Invalid email address').required('An email is required'),
        password: Yup.string()
          .min(8, 'Must be 8 characters or more')
          .required('Enter Password'),
        phone: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Enter phone number')
      }),
      onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
      },
    });
    return (
        <Box>
            <Box className={classes.titlCont}>
                <Box className={classes.title}>Sign up</Box>
            </Box>
            <Grid container className={classes.container}>
                <Grid  className={classes.inCont} item xs={10} sm={6}>
                    <form onSubmit={formik.handleSubmit}> 
                        <Box> 
                          <Box className={classes.nameCont}>
                            <Box className={classes.name}>
                              <TextField className={classes.firstName} size="small" id="outlined-basic" label="First name" variant="outlined"  id="firstName" type="text" {...formik.getFieldProps('firstName')} />
                              {formik.touched.firstName && formik.errors.firstName ? (<div className={classes.nameErr} >{formik.errors.firstName}</div>) : null}
                            </Box>
                            <Box className={classes.name}>
                              <TextField className={classes.lastName} size="small" id="outlined-basic" label="Last name" variant="outlined"  id="lastName" type="text" {...formik.getFieldProps('lastName')} />
                              {formik.touched.lastName && formik.errors.lastName ? (<div className={classes.nameErr} >{formik.errors.lastName}</div>) : null}
                            </Box>
                          </Box>

                            <TextField className={classes.forInput} size="small" id="outlined-basic" label="Your Email" variant="outlined"  id="email" type="text" {...formik.getFieldProps('email')} />
                            {formik.touched.email && formik.errors.email ? (<div className={classes.err} >{formik.errors.email}</div>) : null}

                            <TextField className={classes.forInput} size="small" id="outlined-basic" label="Your Password" variant="outlined"  id="password" type="password" {...formik.getFieldProps('password')} />
                            {formik.touched.password && formik.errors.password ? (<div className={classes.err} >{formik.errors.password}</div>) : null}

                            <TextField className={classes.forInput} size="small" id="outlined-basic" label="Phone number" variant="outlined"  id="phone" type="text" {...formik.getFieldProps('phone')} />
                            {formik.touched.phone && formik.errors.phone ? (<div className={classes.err} >{formik.errors.phone}</div>) : null}

                            <Box className={classes.bottom}>
                                <FormControlLabel className={classes.remember} control={<BlueCheckbox name="subscribe" />} label="SUBSCRIBE TO OUR NEWSLETTER" />
                            </Box>
                        </Box>
                        <Box className={classes.footerCont}>
                            <Button className={classes.button} type="submit">SIGN UP</Button>
                            <Box className={classes.free}>
                            Already have an account?
                                <Link className={classes.link} to={SIGNIN}> Sign in</Link>
                            </Box>
                            <Box className={classes.free}>or sign in with:</Box>
                            <Box className={classes.iconCont}>
                                <Box className={classes.fbIcon}>
                                <FontAwesomeIcon className={classes.icon} icon={faFacebookF} />
                                </Box>
                                <Box className={classes.twIcon}>
                                <FontAwesomeIcon className={classes.icon} icon={faTwitter} />
                                </Box>
                                <Box className={classes.liIcon}>
                                <FontAwesomeIcon className={classes.icon} icon={faLinkedinIn} />
                                </Box>
                                <Box className={classes.ghIcon}>
                                <FontAwesomeIcon className={classes.icon} icon={faGithub} />
                                </Box>
                            </Box>
                            <Box className={classes.line} />
                            <Box className={classes.terms}>By clicking Sign up you agree to our <Link className={classes.link}>terms of service</Link></Box>
                        </Box>
                    </form>
                </Grid>
            </Grid>
        </Box>
    );
};

export default SignUp;