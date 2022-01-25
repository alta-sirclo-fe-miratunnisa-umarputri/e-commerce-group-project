import { Fragment, useRef, useState } from "react";

import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  Button,
  TextField,
  RadioGroup,
  Container,
  Typography,
} from "@mui/material";
import { eCommerceAxios } from "../axios";

const Order = () => {
  const accessToken = localStorage.getItem("accessToken");
  const totalPayment = 25000;

  const [cardType, setCardType] = useState("");
  const nameRef = useRef<HTMLInputElement>();
  const streetRef = useRef<HTMLInputElement>();
  const cityRef = useRef<HTMLInputElement>();
  const stateRef = useRef<HTMLInputElement>();
  const zipRef = useRef<HTMLInputElement>();
  const cardRef = useRef<HTMLInputElement>();
  const cvvRef = useRef<HTMLInputElement>();

  const handleCardType = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCardType((event.target as HTMLInputElement).value);
  };

  const handleOrder = async () => {
    console.log("order");

    const name = nameRef.current?.value;
    const street = streetRef.current?.value;
    const city = cityRef.current?.value;
    const state = stateRef.current?.value;
    const zip = zipRef.current?.value;
    const card = cardRef.current?.value;
    const cvv = cvvRef.current?.value;
    console.log(name, street, city, state, zip, card, cvv, cardType);

    try {
      await eCommerceAxios({
        method: "POST",
        headers: { Authorization: `Bearer ${accessToken}` },
        url: "/orders",
        data: {
          cart_id: [20, 22, 29],
          address: {
            street,
            city,
            state,
            zip: parseInt(zip!),
          },
          credit_card: {
            type: cardType,
            name,
            number: card,
            cvv: parseInt(cvv!),
          },
          total: totalPayment,
        },
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Fragment>
      <Typography variant="h3" gutterBottom mt={3} textAlign="center">
        Order Confirmation
      </Typography>

      <Container maxWidth="sm">
        <Typography sx={{ marginTop: 4 }} fontWeight={400} variant="h6">
          Ship to :
        </Typography>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Name"
          type="text"
          fullWidth
          variant="standard"
          inputRef={nameRef}
        />

        <Typography sx={{ marginTop: 2 }} fontWeight={400} variant="h6">
          Address :
        </Typography>
        <TextField
          autoFocus
          margin="dense"
          id="street"
          label="Street"
          type="text"
          fullWidth
          variant="standard"
          maxRows={4}
          multiline
          inputRef={streetRef}
        />
        <TextField
          autoFocus
          margin="dense"
          id="city"
          label="City"
          type="text"
          fullWidth
          variant="standard"
          inputRef={cityRef}
        />
        <TextField
          autoFocus
          margin="dense"
          id="state"
          label="State"
          type="text"
          fullWidth
          variant="standard"
          inputRef={stateRef}
        />
        <TextField
          autoFocus
          margin="dense"
          id="zip"
          label="Zip Code"
          type="number"
          fullWidth
          variant="standard"
          inputRef={zipRef}
        />

        <Typography sx={{ marginTop: 2 }} fontWeight={400} variant="h6">
          Payment :
        </Typography>
        <TextField
          autoFocus
          margin="dense"
          id="card-number"
          label="Card Number"
          type="text"
          fullWidth
          variant="standard"
          inputRef={cardRef}
        />
        <TextField
          autoFocus
          margin="dense"
          id="cvv"
          label="CVV Number"
          type="number"
          fullWidth
          variant="standard"
          inputRef={cvvRef}
        />

        <FormControl>
          <FormLabel id="payment-method" sx={{ marginTop: 2 }}>
            Card Type
          </FormLabel>
          <RadioGroup
            aria-labelledby="payment-method-choice"
            name="payment-choice"
            value={cardType}
            onChange={handleCardType}
          >
            <FormControlLabel value="visa" control={<Radio />} label="Visa" />
            <FormControlLabel
              value="mastercard"
              control={<Radio />}
              label="Mastercard"
            />
          </RadioGroup>
        </FormControl>

        <Typography sx={{ marginTop: 2 }} fontWeight={500} variant="h5">
          Your Total Payment : Rpxxxx
        </Typography>

        <Button sx={{ mt: 2, mb: 5 }} variant="contained" onClick={handleOrder}>
          Order
        </Button>
      </Container>
    </Fragment>
  );
};

export default Order;
