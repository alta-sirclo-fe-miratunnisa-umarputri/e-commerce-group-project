import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Button,
} from "@mui/material";

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
