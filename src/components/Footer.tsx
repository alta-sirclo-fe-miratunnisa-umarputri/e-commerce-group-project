import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import style from "./Footer.module.css";
import logo from "../assets/logo.png";
import visaMaster from "../assets/visa-master.png";
import gooAppStore from "../assets/goo-app-store.png";

const Footer = () => {
  return (
    <footer className={style.position}>
      <Box py={{ xs: 1, sm: 1 }} bgcolor="text.secondary">
        <Container maxWidth="lg">
          <Grid container>
            <Grid
              item
              xs={12}
              sm={4}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img src={logo} alt="logo-footer" className={style.logoSirclo} />
            </Grid>

            <Grid
              item
              xs={12}
              sm={4}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={visaMaster}
                alt="visa-master"
                className={style.logoVisaMaster}
              />
            </Grid>

            <Grid
              item
              xs={12}
              sm={4}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                src={gooAppStore}
                alt="google-app-store"
                className={style.logoGooApp}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
