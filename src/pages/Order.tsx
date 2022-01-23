import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  List,
  ListItem,
  ListItemText,
  Radio,
  RadioGroup,
  Button,
} from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

// template items
const products = [
  {
    name: "Product 1",
    desc: "A nice thing",
    price: "$9.99",
  },
  {
    name: "Product 2",
    desc: "Another thing",
    price: "$3.45",
  },
  {
    name: "Product 3",
    desc: "Something else",
    price: "$6.51",
  },
  {
    name: "Product 4",
    desc: "Best thing of all",
    price: "$14.11",
  },
  { name: "Shipping", desc: "", price: "Free" },
];
const addresses = ["1 MUI Drive", "Reactville", "Anytown", "99999", "USA"];
const payments = [
  { name: "Card type", detail: "Visa" },
  { name: "Card holder", detail: "Mr John Smith" },
  { name: "Card number", detail: "xxxx-xxxx-xxxx-1234" },
  { name: "Expiry date", detail: "04/2024" },
];

const Order = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <Container
      sx={{
        marginTop: "100px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        boxShadow: 3,
        borderRadius: 5,
      }}
    >
      <Typography variant="h5" fontWeight={500} gutterBottom p={2}>
        {`Total Order Rpxxxx`}
      </Typography>

      <Typography variant="h6" fontWeight={400} gutterBottom p={2}>
        {`Address : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dapibus turpis quis elit varius ornare.`}
      </Typography>

      <form onSubmit={handleSubmit}>
        <FormControl variant="standard" sx={{ padding: 2 }}>
          <FormLabel id="payment-method" sx={{ marginTop: "9px" }}>
            Payment Method
          </FormLabel>
          <RadioGroup
            aria-labelledby="payment-method-choice"
            name="payment-choice"
          >
            <FormControlLabel value="visa" control={<Radio />} label="Visa" />
            <FormControlLabel
              value="mastercard"
              control={<Radio />}
              label="Mastercard"
            />
          </RadioGroup>

          <Button sx={{ mt: 2 }} type="submit" variant="contained">
            Order
          </Button>
        </FormControl>
      </form>
    </Container>
  );
};

export default Order;
