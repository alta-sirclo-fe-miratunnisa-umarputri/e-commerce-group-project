import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Button,
  Container,
} from "@mui/material";

import AuthContext from "../context/AuthContext";
import { eCommerceAxios } from "../axios";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

interface Product {
  category_id: number;
  deskripsi: string;
  gambar: string;
  harga: number;
  id: number;
  name: string;
  stock: number;
  [key: string]: any;
}

const Home = () => {
  const navigate = useNavigate();
  const [allProducts, setAllProducts] = useState<Product[]>([]);

  const { isAuth } = useContext(AuthContext);

  const handleDetail = () => {
    navigate("/productdetail");
  };

  const handleAddToCart = () => {
    if (!isAuth) {
      navigate("/login");
    } else {
      console.log("add to cart");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await eCommerceAxios({
          method: "GET",
          url: "/products",
        });

        setAllProducts(data.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
      <Typography variant="h3" gutterBottom mt={3} textAlign="center">
        All Products
      </Typography>

      <Grid container spacing={3}>
        {allProducts.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={3}>
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <CardMedia component="img" image={product.gambar} alt="random" />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" component="h3" fontWeight={400}>
                  {product.name}
                </Typography>
                <Typography variant="h5" component="h2" fontWeight={500}>
                  Rp{product.harga}
                </Typography>
              </CardContent>
              <CardActions sx={{ display: "flex", justifyContent: "end" }}>
                <Button size="small" onClick={handleDetail}>
                  Detail
                </Button>
                <Button size="small" onClick={handleAddToCart}>
                  Add to Cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
