import { Fragment, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

import Loading from "./Loading";
import { eCommerceAxios } from "../axios";

const FormModal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const emailRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();
  const usernameRef = useRef<HTMLInputElement>();
  const addressRef = useRef<HTMLInputElement>();
  const phoneRef = useRef<HTMLInputElement>();

  const isPathLogin = location.pathname === "/login";

  const handleLogin = () => {
    navigate("/");
  };

  const handleRegister = async () => {
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    const username = usernameRef.current?.value;
    const address = addressRef.current?.value;
    const phone = phoneRef.current?.value;

    setIsLoading(true);

    try {
      await eCommerceAxios({
        method: "POST",
        url: "/users",
        data: {
          username,
          email,
          password,
          address,
          phone,
        },
      });
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }

    navigate("/login");
  };

  const handleClose = () => {
    navigate("/");
  };

  const additionalFormRegistration = (
    <Fragment>
      <TextField
        autoFocus
        margin="dense"
        id="username"
        label="User Name"
        type="text"
        fullWidth
        variant="standard"
        inputRef={usernameRef}
      />
      <TextField
        autoFocus
        margin="dense"
        id="address"
        label="Address"
        type="text"
        fullWidth
        variant="standard"
        inputRef={addressRef}
      />
      <TextField
        autoFocus
        margin="dense"
        id="phone"
        label="Phone"
        type="number"
        fullWidth
        variant="standard"
        inputRef={phoneRef}
      />
    </Fragment>
  );

  const dialog = (
    <Dialog open={true} onClose={handleClose}>
      <DialogTitle>{isPathLogin ? "Login" : "Register"}</DialogTitle>

      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="email"
          label="Email Address"
          type="email"
          fullWidth
          variant="standard"
          inputRef={emailRef}
        />
        <TextField
          autoFocus
          margin="dense"
          id="password"
          label="Password"
          type="password"
          fullWidth
          variant="standard"
          inputRef={passwordRef}
        />

        {!isPathLogin && additionalFormRegistration}
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>

        {isPathLogin ? (
          <Button onClick={handleLogin}>Login</Button>
        ) : (
          <Button onClick={handleRegister}>Register</Button>
        )}
      </DialogActions>
    </Dialog>
  );

  const loading = (
    <div
      style={{
        height: "50vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Loading />
    </div>
  );

  return <div>{isLoading ? loading : dialog}</div>;
};

export default FormModal;
