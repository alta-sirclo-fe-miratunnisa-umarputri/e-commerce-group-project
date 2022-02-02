import * as React from 'react';
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";
import { eCommerceAxios } from "../axios";
import { useState } from 'react';

const categories = [
  {
    value: '1',
    label: 'Makanan',
  },
  {
    value: '2',
    label: 'Alat tulis',
  },
  {
    value: '3',
    label: 'Elektronik',
  },
  {
    value: '4',
    label: 'Kecantikan',
  },
];

const AddItem = () => {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("accessToken");
  const [category, setCategory] = useState('2');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(event.target.value);
  };
  const [product, setProduct] = useState({
    category_id: 1,
    name: "",
    deskripsi: "",
    gambar: "",
    harga: 1,
    stock: 1
  })


  const handleAdd = async(item: any) => {
    try {
      await eCommerceAxios({
        method: "POST",
        headers: { Authorization: `Bearer ${accessToken}` },
        url: "/products",
        data: { 
          "category_id": 1,
          "name": item.name,
          "deskripsi": item.deskripsi,
          "gambar": item.gambar,
          "harga": item.harga,
          "stock": item.stock
        },
      });
    } catch (err) {
      console.log(err);
    };
    navigate("/myproduct");
  };

  const handleCancel = () => {
    navigate("/myproduct");
  };

  return (
    <div>
      <Dialog open={true} onClose={handleCancel}>
        <DialogTitle>Add Item</DialogTitle>
        <DialogContent>
          <TextField
            id="addItemCategory"
            select
            label="Item Category"
            fullWidth
            value={category}
            onChange={handleChange}
            SelectProps={{
              native: true,
            }}
            helperText="Select your product's category"
            variant="standard"
          >
          {categories.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
          </TextField>
          <TextField
            autoFocus
            margin="dense"
            id="addItemName"
            label="Item Name"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => setProduct({ ...product, name: e.target.value})}
          />
          <TextField
            autoFocus
            margin="dense"
            id="addItemImage"
            label="Item Image (url)"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => setProduct({ ...product, gambar: e.target.value})}
          />
          <TextField
            autoFocus
            margin="dense"
            id="addItemPrice"
            label="Item Price"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => setProduct({ ...product, harga: parseInt(e.target.value)})}
          />
          <TextField
            autoFocus
            margin="dense"
            id="addItemStock"
            label="Item Stock"
            type="number"
            fullWidth
            variant="standard"
            onChange={(e) => setProduct({ ...product, stock: parseInt(e.target.value)})}
          />
          <TextField
            id="addDescription"
            label="Description"
            type="text"
            multiline
            fullWidth
            maxRows={3}
            variant="standard"
            onChange={(e) => setProduct({ ...product, deskripsi: e.target.value})}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel}>Cancel</Button>
          <Button onClick={() => handleAdd(product)}>Add Item</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddItem;
