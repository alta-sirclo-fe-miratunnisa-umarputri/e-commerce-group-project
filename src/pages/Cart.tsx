import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Photo from '../assets/app-store.png';
import './Cart.css';

const Cart = () => {
  const navigate = useNavigate();
  
  const handleConfirmItem = () => {
    navigate("/order");
  }

  const handleRemoveItem = () => {
    navigate("/cart");
  }

  return (
    <div className='main-container'>
      <div className='first-column fixed-content'>
        <div className="card flex-row flex-wrap m-2">
          <div className="card-header border-0">
            <img 
              className="image-sizing"
              src={Photo} alt="" />
          </div>
          <div className="card-block px-2">
            <h6 className="card-text">item.name</h6>
            <h3 className="card-title">item.price</h3>
            <Button
              onClick={() => handleRemoveItem()}
              variant="outlined" size="small" color="error">Remove
            </Button>
          </div>
        </div>
        <div className="card flex-row flex-wrap m-2">
          <div className="card-header border-0">
            <img 
              className="image-sizing"
              src={Photo} alt="" />
          </div>
          <div className="card-block px-2">
            <h6 className="card-text">item.name</h6>
            <h3 className="card-title">item.price</h3>
            <Button
              onClick={() => handleRemoveItem()}
              variant="outlined" size="small" color="error">Remove
            </Button>
          </div>
        </div>
        <div className="card flex-row flex-wrap m-2">
          <div className="card-header border-0">
            <img 
              className="image-sizing"
              src={Photo} alt="" />
          </div>
          <div className="card-block px-2">
            <h6 className="card-text">item.name</h6>
            <h3 className="card-title">item.price</h3>
            <Button
              onClick={() => handleRemoveItem()}
              variant="outlined" size="small" color="error">Remove
            </Button>
          </div>
        </div>
        <div>
          <Button
            className='add-button m-2'
            onClick={() => handleConfirmItem()}
            variant="contained" size="small">Confirm
          </Button>
        </div>
      </div>
      <div className='second-column m-2'>
        order history
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum perspiciatis fugiat, laudantium hic ipsum aliquam adipisci in quis, eveniet corrupti ipsam minima corporis provident impedit voluptatum maxime eos voluptas aliquid.</h1>
      </div>
    </div>
    
  )
}

export default Cart;
