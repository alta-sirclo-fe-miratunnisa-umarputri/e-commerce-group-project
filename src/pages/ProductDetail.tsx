import { Container, Grid, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { eCommerceAxios } from "../axios";
import { Product } from "../interfaces/Product";
import style from "./ProductDetail.module.css";

const ProductDetail = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({} as Product);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await eCommerceAxios({
          method: "GET",
          url: `/products/${id}`,
        });

        console.log("data =>", data.data);
        setDetails(data.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  console.log("detail", details);

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

          <Button variant="contained" sx={{ marginTop: 3 }} fullWidth>
            Order
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductDetail;
