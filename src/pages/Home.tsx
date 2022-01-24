import { Fragment, useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Container,
  Box,
} from "@mui/material";
import { LoadingButton, Masonry } from "@mui/lab";

import AuthContext from "../context/AuthContext";
import { eCommerceAxios } from "../axios";
import Loading from "../components/Loading";
import AllProductsContext from "../context/AllProductsContext";

const Home = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingButton, setIsLoadingButton] = useState(false);
  const [buyingId, setBuyingId] = useState<number>(0);

  const { setAllProducts, showAllProducts, setShowAllProducts } =
    useContext(AllProductsContext);
  const { isAuth } = useContext(AuthContext);

  const accessToken = localStorage.getItem("accessToken");

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
        url: "/carts",
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
        setShowAllProducts(data.data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [setAllProducts, setShowAllProducts]);

  const loadingAddToCartButton = (
    <LoadingButton
      loading={isLoadingButton}
      loadingIndicator="Loading..."
      size="small"
    >
      Add to Cart
    </LoadingButton>
  );

  const display = (
    <Fragment>
      <Typography variant="h3" gutterBottom mt={3} textAlign="center">
        All Products
      </Typography>

      <Masonry columns={{ xs: 1, sm: 3, md: 4 }} spacing={2}>
        {showAllProducts.map((product) => (
          <Box key={product.id}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
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
                <Link to={`/productdetail/${product.id}`}>
                  <Button size="small">Detail</Button>
                </Link>

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
          </Box>
        ))}
      </Masonry>
    </Fragment>
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
      {isLoading ? <Loading /> : display}
    </Container>
  );
};

export default Home;
