import React from 'react';
import { Box, Grid, TextField, Checkbox, FormControlLabel, Button, } from '@material-ui/core';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import { Link, useHistory } from 'react-router-dom';
import { SIGNUP, Admin, Home } from "../../serializer/routes"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import Api from '../../serializer/api' 
import { useDispatch, useSelector } from 'react-redux';
import { setLoggedIn, setToken, setUser } from '../../store/user/userActionCreator';
import { getToken } from '../../store/user/userSelector';
import { useState } from 'react';


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
        maxWidth: '540px',
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
          margin: " auto 10px",
      },
    },
    err: {
        color: "#ff5756",
        marginBottom: "20px",
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
    inCont: {

    },
    forInput: {
        margin: "5px auto",
        width: "100%",
    },
    bottom: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
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
        marginBottom: "60px",
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
    }
}))

const SignIn = () => {

    const history = useHistory()

    const classes = useStyles()

    const dispatch = useDispatch()

    const [ err, setErr ] = useState(false)


    const formik = useFormik({
      initialValues: {
        email: '',
        password: '',
      },
      validationSchema: Yup.object({
        email: Yup.string().email('Invalid email address').required('Enter your email address'),
        password: Yup.string()
          .min(8, 'Must be 8 characters or more')
          .required('Enter Password'),
      }),
      onSubmit: values => {
          dispatch(setLoggedIn(true))
          history.replace(Home)  
          localStorage.setItem("Token", "data.token.access_token")
        /* Api.getSignIn(values)
        .then(data => {
            if(data.errors) {
                setErr(true)
            } else {
                dispatch(setUser(data.user))
                dispatch(setToken(data.token))
                dispatch(setLoggedIn(true))
                localStorage.setItem("Token", data.token.access_token)
                history.replace(Home)  
            }
        }) */
      },
    });
    return (
        <Box>
            <Box className={classes.titlCont}>
                <Box className={classes.title}>Sign in</Box>
            </Box>
            <Grid container className={classes.container}>
                <Grid  className={classes.inCont} item xs={10} sm={6}>
                    <form onSubmit={formik.handleSubmit}> 
                        <Box>
                            <TextField className={classes.forInput} size="small" id="outlined-basic" label="Your Email" variant="outlined"  id="email" type="text" {...formik.getFieldProps('email')} />
                            {formik.touched.email && formik.errors.email ? (<div className={classes.err} >{formik.errors.email}</div>) : null}

                            <TextField className={classes.forInput} size="small" id="outlined-basic" label="Your Password" variant="outlined"  id="password" type="password" {...formik.getFieldProps('password')} />
                            {formik.touched.password && formik.errors.password ? (<div className={classes.err} >{formik.errors.password}</div>) : null}
                            {err ? <Box className={classes.err}>Email or password is not correct</Box> : <></> }
                            <Box className={classes.bottom}>
                                <FormControlLabel className={classes.remember} control={<BlueCheckbox name="rememberMe" />} label="REMEMBER ME" />
                                <Box className={classes.link}>Forgot password?</Box>
                            </Box>
                        </Box>
                        <Box className={classes.footerCont}>
                            <Button className={classes.button} type="submit">Sign In</Button>
                            <Box className={classes.free}>
                                Not a member?
                                <Link className={classes.link} to={SIGNUP}> Register</Link>
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
                        </Box>
                    </form>
                </Grid>
            </Grid>
        </Box>
    );
};

export default SignIn;