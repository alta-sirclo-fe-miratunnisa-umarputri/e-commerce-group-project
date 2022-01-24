import { Fragment, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { LoadingButton } from "@mui/lab";
import { Container, Grid, Typography } from "@mui/material";

import { eCommerceAxios } from "../axios";
import Loading from "../components/Loading";
import AuthContext from "../context/AuthContext";
import { Product } from "../interfaces/Product";
import style from "./ProductDetail.module.css";

const ProductDetail = () => {
  const [details, setDetails] = useState({} as Product);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingButton, setIsLoadingButton] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const { isAuth } = useContext(AuthContext);

  const accessToken = localStorage.getItem("accessToken");

  const handleOrder = async () => {
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
        data: { product_id: parseInt(id!), qty: 1, subtotal: details.harga },
      });
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoadingButton(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const { data } = await eCommerceAxios({
          method: "GET",
          url: `/products/${id}`,
        });

        setDetails(data.data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const display = (
    <Fragment>
      <Typography variant="h3" gutterBottom mt={3} textAlign="center">
        Product Detail
      </Typography>

      <Grid container spacing={6} mt={1}>
        <Grid item xs={12} md={7}>
          <img
            src={details.gambar && details.gambar}
            alt="item"
            className={style.image}
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <Typography variant="h6" fontWeight={500} gutterBottom>
            {details.name && details.name}
          </Typography>

          <Typography variant="subtitle1" fontWeight={300} gutterBottom>
            {details.deskripsi && details.deskripsi}
          </Typography>

          <Typography variant="h5" fontWeight={400}>
            Rp{details.harga && details.harga}
          </Typography>

          <LoadingButton
            onClick={handleOrder}
            loading={isLoadingButton}
            loadingIndicator="Loading..."
            variant="contained"
            sx={{ marginTop: 3 }}
            fullWidth
          >
            Order
          </LoadingButton>
        </Grid>
      </Grid>
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

export default ProductDetail;
