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
import { useState } from "react";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Home = () => {
  const [isLogin, setIsLogin] = useState(false);

  const handleDetail = () => {
    console.log("detail");
  };

  const handleAddToCart = () => {
    console.log("add to cart");
  };

  return (
    <Container>
      <Typography variant="h3" gutterBottom mt={3} textAlign="center">
        All Products
      </Typography>

      <Grid container spacing={3}>
        {cards.map((card) => (
          <Grid item key={card} xs={12} sm={6} md={3}>
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <CardMedia
                component="img"
                image="https://source.unsplash.com/random"
                alt="random"
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  // gutterBottom
                  variant="h6"
                  component="h3"
                  fontWeight={400}
                >
                  Item's Name
                </Typography>
                <Typography variant="h5" component="h2" fontWeight={500}>
                  Rp xxxx
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
