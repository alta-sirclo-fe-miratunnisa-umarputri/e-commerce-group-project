import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Photo from '../assets/app-store.png';
import './Cart.css';
import axios from 'axios';

const Cart = () => {
  const navigate = useNavigate();
  const URL = "http://3.0.145.2/carts";
  const accessToken = localStorage.getItem("accessToken");
  const [carts, setCarts] = useState<any[]>([]);
  
  React.useEffect(() => {
    fetchData()
  }, [])

  const fetchData = () => {
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`
      },
    };
    axios
      .get(URL, config)
      .then((res) => {
        setCarts(res.data.data);
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(
      )
  }

  const handleConfirmItem = () => {
    navigate("/order");
  }

  const handleRemoveItem = (item: any) => {
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`
      },
    };
    axios
      .delete(URL + `/${item.product.id}` + "", config)
      .then((res) => {
        fetchData();
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(
      );
  }

  if(carts.length == 0) {
    return (
      <div className='cart-main-container'>
        <div className='cart-first-column m-2'>
          Your cart is empty ..
        </div>
        <div className='cart-second-column m-2'>
          order history
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum perspiciatis fugiat, laudantium hic ipsum aliquam adipisci in quis, eveniet corrupti ipsam minima corporis provident impedit voluptatum maxime eos voluptas aliquid.</h1>
        </div>
    </div>
    )
  } else {
    return (
      <div className='cart-main-container'>
        <div className='cart-first-column'>
          {carts.map((item: any, index) => (
            <div
              key={index}
              className="card flex-row flex-wrap m-2">
              <div className="card-header border-0">
                <img 
                  className="cart-image-sizing"
                  src={Photo} alt="" />
              </div>
              <div className="card-block px-2">
                <h6 className="card-text">{item.product.name}</h6>
                <h3 className="cart-card-title">{item.product.harga}</h3>
                <Button
                  onClick={() => handleRemoveItem(item)}
                  variant="outlined" size="small" color="error">Remove
                </Button>
              </div>
            </div>
          ))}
          <div>
            <Button
              className='cart-add-button m-2'
              onClick={() => handleConfirmItem()}
              variant="contained" size="small">Confirm
            </Button>
          </div>
        </div>
        <div className='cart-second-column m-2'>
          order history
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum perspiciatis fugiat, laudantium hic ipsum aliquam adipisci in quis, eveniet corrupti ipsam minima corporis provident impedit voluptatum maxime eos voluptas aliquid.</h1>
        </div>
      </div>
    )
  }
}

export default Cart;
