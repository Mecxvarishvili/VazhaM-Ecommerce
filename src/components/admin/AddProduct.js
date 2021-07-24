import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import ProductFormik from './ProductFormik';
import { Box, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    margin: "0 20px",
    border: '1px solid #1266f1',
    width: "450px",
    height: "530px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  title: {
    display: "flex",
    justifyContent: "center"
  },
  button: {
      color: "white",
      backgroundColor: "#1266f1",
      fontSize: "12px",
      padding: "10px",
      "&:hover": {
          backgroundColor: "#1266f1",
      }
  },
}));

const AddProduct = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Button className={classes.button} onClick={handleOpen}>Add Product </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <ProductFormik />
          </div>
        </Fade>
      </Modal>
    </Box>
  );
}

export default AddProduct;