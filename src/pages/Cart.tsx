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
              className='button3' 
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
              className='button3' 
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
              className='button3' 
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
      <div className='second-column'>
        order history
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nulla delectus perspiciatis aspernatur maxime inventore iure totam veniam excepturi? Consequatur excepturi asperiores exercitationem nostrum? Omnis quam neque qui ut facere!</h1>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis voluptatibus laudantium voluptate dolore perspiciatis nemo voluptates tempora repellat fuga, mollitia eos veritatis delectus molestias eveniet harum consequuntur? Tempora, nisi eligendi!</h1>
        <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero repellendus animi labore asperiores, quos placeat optio molestias distinctio quam magnam, et odit similique sed provident, quod temporibus laboriosam? Voluptatum, mollitia.</h1>
      </div>
    </div>
    
  )
}

export default Cart;