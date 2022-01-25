import * as React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from '@mui/material/Button';
import Photo from '../assets/app-store.png';
import './MyProduct.css';

const MyProduct = () => {
  const navigate = useNavigate();
  const URLget = "3.0.145.2/user-products";
  const URLdelete = "3.0.145.2/products/";
  const accessToken = localStorage.getItem("accessToken");
  const [products, setProducts] = useState({});

  useEffect(() => {
    fetchData()
  }, []);

  const fetchData = () => {
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`
      },
    };
    axios
      .get(URLget, config)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(
      )
  }

  const handleAddItem = () => {
    navigate("/additem");
  }

  const handleRemoveItem = () => {
    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${accessToken}`
    //   },
    // };
    // axios
    //   .delete(URLdelete + `${item.id}`, config)
    //   .then((res) => {
    //     fetchData();
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   })
    //   .finally(
    //   )
    navigate("/MyProduct");
  }

  return (
    <div className='myproduct-main-container'>
      <div>
        <Button
          className='myproduct-add-button m-2'
          onClick={() => handleAddItem()}
          variant="contained" size="small">Add Item
        </Button>
      </div>
      <div className="card flex-row flex-wrap m-2">
        <div className="card-header border-0">
          <img 
            className="myproduct-image-sizing"
            src={Photo} alt="" />
        </div>
        <div className="card-block px-2">
          <h6 className="card-text">item.name</h6>
          <h3 className="myproduct-card-title">item.price</h3>
          <Button
            onClick={() => handleRemoveItem()}
            variant="outlined" size="small" color="error">Remove
          </Button>
        </div>
      </div>
    </div>
    
  )
}

export default MyProduct;
