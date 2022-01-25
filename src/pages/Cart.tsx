import * as React from 'react';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Typography } from '@mui/material';
import Photo from '../assets/app-store.png';
import './Cart.css';
import axios from 'axios';
import { eCommerceAxios } from "../axios";
import PriceContext from '../context/PriceContext';

const Cart = () => {
  const navigate = useNavigate();
  const URL = "http://3.0.145.2/carts";
  const accessToken = localStorage.getItem("accessToken");
  const [carts, setCarts] = useState<any[]>([]);
  let price = useContext(PriceContext);
  
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

  const handleRemoveItem = async(item: any) => {
    try {
      await eCommerceAxios({
        method: "DELETE",
        headers: { Authorization: `Bearer ${accessToken}` },
        url: `/carts/1`
      });
    } catch (err) {
      console.log(err);
    } finally {
      fetchData();
    };
    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${accessToken}`
    //   },
    // };
    // axios
    //   .delete(URL + `/${item.product.id}` + "", config)
    //   .then((res) => {
    //     fetchData();
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //   })
    //   .finally(
    //   );
  }

  let total_price = 0;
  for (let object of carts) {
    total_price = total_price + object.product.harga;
  }
  price = total_price;
  let id_set = new Set();
  for (let object of carts) {
    id_set.add(object.product.id);
  }


  if(carts.length == 0) {
    return (
      <div>
        <Typography variant="h3" gutterBottom mt={3} textAlign="center">
          Cart
        </Typography>
      <div className='cart-main-container'>
        <div className='cart-first-column m-2'>
          Your cart is empty ..
        </div>
        <div className='cart-second-column m-2'>
          order history
          <Box
            sx={{
              width: 300,
              height: 300,
              backgroundColor: 'lightgrey',
              flexgrow: 1
            }}>
            <Grid container spacing={1}>
              <Grid item xs={4}>
                <img src={Photo} width="100px"/>
              </Grid>
              <Grid item xs={4}>
                <img src={Photo} width="100px"/>
              </Grid>
              <Grid item xs={4}>
                <img src={Photo} width="100px"/>
              </Grid>
              <Grid item xs={4}>
                <img src={Photo} width="100px"/>
              </Grid>
            </Grid>
          </Box>
        </div>
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <Typography variant="h3" gutterBottom mt={3} textAlign="center">
          Cart
        </Typography>
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
                <h3 className="cart-card-title">Rp {item.product.harga}</h3>
                <Button
                  onClick={() => handleRemoveItem(item)}
                  variant="outlined" size="small" color="error">Remove
                </Button>
              </div>
            </div>
          ))}
          <div className='cart-right-alignment m-2'>
            <p>Jenis Barang:</p><br />
            <p>{id_set.size}</p><br />
            <p>Total Pembayaran:</p><br />
            <p>Rp {price}</p><br />
            <Button
              className='cart-add-button m-2'
              onClick={() => handleConfirmItem()}
              variant="contained" size="small">Confirm
            </Button>
          </div>
        </div>
        <div className='cart-second-column m-2'>
          order history
          <Box
            sx={{
              width: 300,
              height: 300,
              backgroundColor: 'lightgrey',
              flexgrow: 1
            }}>
            <Grid container spacing={1}>
              <Grid item xs={4}>
                <img src={Photo} width="100px"/>
              </Grid>
              <Grid item xs={4}>
                <img src={Photo} width="100px"/>
              </Grid>
              <Grid item xs={4}>
                <img src={Photo} width="100px"/>
              </Grid>
              <Grid item xs={4}>
                <img src={Photo} width="100px"/>
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>
      </div>
    )
  }
}

export default Cart;
