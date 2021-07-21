import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, TextField } from '@material-ui/core';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import SubmitedProduct from './SubmitedProduct';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "column",
    margin: "0 auto",
    maxWidth: "400px",
  }
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
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      price: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      description: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      image: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      category: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
    }),
    onSubmit: values => {
      setIsLoading(true)
    },
  });
  return (
    isLoading ?  <CircularProgress /> :
    <SubmitedProduct submit={submit}>
      <form onSubmit={formik.handleSubmit} className={classes.container}> 
        <Box className={classes.title}>Add New Product</Box>
        <TextField size="small" id="outlined-basic" label="Title" variant="outlined"  id="title" type="text" {...formik.getFieldProps('title')} />
        {formik.touched.title && formik.errors.title ? (<div>{formik.errors.title}</div>) : null}

        <TextField size="small" id="outlined-basic" label="Price" variant="outlined"  id="price" type="text" {...formik.getFieldProps('price')} />
        {formik.touched.price && formik.errors.price ? (<div>{formik.errors.price}</div>) : null}

        <TextField size="small" id="outlined-basic" label="Description" variant="outlined" id="description" type="text" {...formik.getFieldProps('description')} />
        {formik.touched.description && formik.errors.description ? (<div>{formik.errors.description}</div>) : null}

        <TextField size="small" id="outlined-basic" label="Enter Image Url" variant="outlined"  id="image" type="text" {...formik.getFieldProps('image')} />
        {formik.touched.image && formik.errors.image ? (<div>{formik.errors.image}</div>) : null}

        <TextField size="small" id="outlined-basic" label="Category" variant="outlined"  id="category" type="text" {...formik.getFieldProps('category')} />
        {formik.touched.category && formik.errors.category ? (<div>{formik.errors.category}</div>) : null}

        <button type="submit">Submit</button>
      </form>
    </SubmitedProduct>
  );
};

export default ProductFormik;

{/* <form onSubmit={formik.handleSubmit}>
<TextField size="small" id="outlined-basic" label="Title" variant="outlined"  id="title" type="text" {...formik.getFieldProps('title')} />
{formik.touched.title && formik.errors.title? (<div>{formik.errors.title}</div>) : null}

<TextField size="small" id="outlined-basic" label="Price" variant="outlined"  id="price" type="text" {...formik.getFieldProps('price')} />
{formik.touched.price && formik.errors.price? (<div>{formik.errors.price}</div>) : null}

<TextField size="small" id="outlined-basic" label="Description" variant="outlined" id="description" type="text" {...formik.getFieldProps('description')} />
{formik.touched.description && formik.errors.description ? (
  <div>{formik.errors.description}</div>
) : null}

<TextField size="small" id="outlined-basic" label="Enter Image Url" variant="outlined"  id="image" type="text" {...formik.getFieldProps('image')} />
{formik.touched.image && formik.errors.image? (<div>{formik.errors.image}</div>) : null}

<TextField size="small" id="outlined-basic" label="Category" variant="outlined"  id="category" type="text" {...formik.getFieldProps('category')} />
{formik.touched.category && formik.errors.category? (<div>{formik.errors.category}</div>) : null}

<button type="submit">Submit</button>
</form> */}