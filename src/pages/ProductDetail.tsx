import { Container, Grid, Button, Typography } from "@mui/material";

import dummyImg from "../assets/logo.png";

const ProductDetail = () => {
  return (
    <Container sx={{ marginTop: "100px" }}>
      <Typography variant="h4" fontWeight={500} marginBottom={2} gutterBottom>
        Product Detail
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} md={5}>
          <img src={dummyImg} alt="item" />
        </Grid>
        <Grid item xs={12} md={7}>
          <Typography variant="h6" fontWeight={500} gutterBottom>
            {`Nama Product`}
          </Typography>

          <Typography variant="subtitle1" fontWeight={300} gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            iaculis nulla id maximus semper. In blandit semper orci et porta.
            Vestibulum id lacus ornare, vehicula quam non, convallis erat. Proin
            odio nulla, varius vel felis eu, scelerisque lacinia lorem. Proin
            ultrices ultrices magna sit amet porta. Praesent lacus tellus,
            sagittis id nunc consectetur, bibendum imperdiet lacus. Donec eu
            velit felis.
          </Typography>

          <Typography variant="h5" fontWeight={400}>
            Rpxxxxx
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
