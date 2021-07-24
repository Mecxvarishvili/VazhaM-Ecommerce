import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, TextField } from '@material-ui/core';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import SubmitedProduct from './SubmitedProduct';
import CircularProgress from '@material-ui/core/CircularProgress';
import Api from '../serializer/api'

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "0 auto",
    maxWidth: "350px",
  },
  title: {
    fontSize: "20px",
    fontWeight: "500",
    margin: "10px",
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

const ProductFormik = () => {
  const classes = useStyles()
  
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState('')
  const [submit, setSubmit] = useState(false)
  const formik = useFormik({
    initialValues: {
      title: '',
      price: '',
      description: '',
      image: '',
      category: '',
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .required('Enter Title'),
      price: Yup.string()
        .required('Enter Price'),
      description: Yup.string()
        .required('Enter Description'),
      image: Yup.string()
        .required('Enter image URL:'),
      category: Yup.string()
        .required('Enter Category'),
    }),
    onSubmit: () => {
      setIsLoading(true)
      Api.addProduct(formik)
      setIsLoading(false)
      setSubmit(true)
    },
  });
  return (
    isLoading ?  <CircularProgress /> :
    <SubmitedProduct submit={submit} >
      <form onSubmit={formik.handleSubmit} className={classes.container}> 
        <Box className={classes.title}>Add New Product</Box>
        <Box>
          <TextField className={classes.input} size="small" id="outlined-basic" label="Title" variant="outlined"  id="title" type="text" {...formik.getFieldProps('title')} />
          {formik.touched.title && formik.errors.title ? (<div className={classes.err}>{formik.errors.title}</div>) : null}

          <TextField className={classes.input} size="small" id="outlined-basic" label="Price" variant="outlined"  id="price" type="text" {...formik.getFieldProps('price')} />
          {formik.touched.price && formik.errors.price ? (<div className={classes.err}>{formik.errors.price}</div>) : null}

          <TextField className={classes.input} size="small" id="outlined-basic" label="Description" variant="outlined" id="description" type="text" {...formik.getFieldProps('description')} />
          {formik.touched.description && formik.errors.description ? (<div className={classes.err}>{formik.errors.description}</div>) : null}

          <TextField className={classes.input} size="small" id="outlined-basic" label="Enter Image Url" variant="outlined"  id="image" type="text" {...formik.getFieldProps('image')} />
          {formik.touched.image && formik.errors.image ? (<div className={classes.err}>{formik.errors.image}</div>) : null}

          <TextField className={classes.input} size="small" id="outlined-basic" label="Category" variant="outlined"  id="category" type="text" {...formik.getFieldProps('category')} />
          {formik.touched.category && formik.errors.category ? (<div className={classes.err}>{formik.errors.category}</div>) : null}
        </Box>

        <Button className={classes.button} type="submit">Submit</Button>
      </form>
    </SubmitedProduct>
  );
};

export default ProductFormik;
