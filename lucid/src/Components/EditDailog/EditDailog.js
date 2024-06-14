import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import { deepPurple, grey } from '@mui/material/colors';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: deepPurple,
    background: {
      default: grey[900],
      paper: grey[800],
    },
    text: {
      primary: '#ffffff',
      secondary: grey[500],
    },
  },
});

const FormDialog = ({ open, setOpen, selectedProduct, handleSave }) => {

  const [quantity, setQuantity] = useState(selectedProduct.quantity)
  const [value, setValue] = useState(parseInt(selectedProduct.value.substring(1)))
  const [price, setPrice] = useState(parseInt(selectedProduct.price.substring(1)))
  const [category, setCategory] = useState(selectedProduct.category)


  const handleSubmit = () => {
    const updatedProduct = {
      category: category,
      name: selectedProduct.name,
      price: `$${price || 0}`,
      quantity: quantity,
      value: `$${value || 0}`,
    }
    handleSave(updatedProduct)
  }


  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Dialog open={open}>
        <DialogTitle>
          <div>Edit Product</div>
          <div>{selectedProduct.name}</div>
          </DialogTitle>

        <DialogContent>
          <div className='col-1'>
            <TextField
              sx={{margin: '1rem'}}
              className='mx-1'
              name="category"
              label="Category"
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
            <TextField
            sx={{margin: '1rem'}}
              name="price"
              label="Price"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className='col-1'>
          <TextField
              sx={{margin: '1rem'}}
              name="quantity"
              label="Qunatity"
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
            <TextField
              sx={{margin: '1rem'}}
              name="value"
              label="Value"
              type="number"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}  color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="secondary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
};

export default FormDialog;
