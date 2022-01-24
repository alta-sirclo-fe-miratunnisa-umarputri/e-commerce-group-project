import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Photo from '../assets/app-store.png'
import './MyProduct.css';

const MyProduct = () => {
  const navigate = useNavigate();
  
  const handleAddItem = () => {
    navigate("/additem");
  }

  const handleRemoveItem = () => {
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
