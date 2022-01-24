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
        const { data } = res.data;
        setCarts(data);
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

  const handleRemoveItem = () => {
    navigate("/cart");
  }

  if(carts.length == 0) {
    return (
      <div className='main-container'>
        <div className='first-column m-2 fixed-content'>
          Your cart is empty ..
        </div>
        <div className='second-column m-2'>
          order history
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum perspiciatis fugiat, laudantium hic ipsum aliquam adipisci in quis, eveniet corrupti ipsam minima corporis provident impedit voluptatum maxime eos voluptas aliquid.</h1>
        </div>
    </div>
    )
  } else {
    return (
      <div className='main-container'>
        <div className='first-column fixed-content'>
          {carts.map((product: any) => (
            <div className="card flex-row flex-wrap m-2">
              <div className="card-header border-0">
                <img 
                  className="image-sizing"
                  src={Photo} alt="" />
              </div>
              <div className="card-block px-2">
                <h6 className="card-text">{product.name}</h6>
                <h3 className="card-title">{product.harga}</h3>
                <Button
                  onClick={() => handleRemoveItem()}
                  variant="outlined" size="small" color="error">Remove
                </Button>
              </div>
            </div>
          ))}
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
}

export default Cart;
