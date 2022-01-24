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
import Loading from "../components/Loading";
import { LoadingButton } from "@mui/lab";

interface Product {
  category_id: number;
  gambar: string;
  harga: number;
  id: number;
  name: string;
}

const Home = () => {
  const navigate = useNavigate();
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingButton, setIsLoadingButton] = useState(false);
  const [buyingId, setBuyingId] = useState<number>(0);

  const { isAuth } = useContext(AuthContext);

  const accessToken = localStorage.getItem("accessToken");

  const handleDetail = () => {
    navigate("/productdetail");
  };

  const handleAddToCart = async (id: number, price: number) => {
    setBuyingId(id);

    if (!isAuth) {
      navigate("/login");
      return;
    }

    setIsLoadingButton(true);
    try {
      await eCommerceAxios({
        method: "POST",
        headers: { Authorization: `Bearer ${accessToken}` },
        url: "carts",
        data: { product_id: id, qty: 1, subtotal: price },
      });
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoadingButton(false);
      setBuyingId(0);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const { data } = await eCommerceAxios({
          method: "GET",
          url: "/products",
        });

        setAllProducts(data.data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const loadingAddToCartButton = (
    <LoadingButton
      loading={isLoadingButton}
      loadingIndicator="Loading..."
      size="small"
    >
      Add to Cart
    </LoadingButton>
  );

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 2,
      }}
    >
      {isLoading && <Loading />}

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

                {buyingId === product.id ? (
                  loadingAddToCartButton
                ) : (
                  <Button
                    size="small"
                    onClick={() => handleAddToCart(product.id, product.harga)}
                  >
                    Add to Cart
                  </Button>
                )}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
