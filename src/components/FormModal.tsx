import { useNavigate, useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Fragment } from "react";

const FormModal = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isPathLogin = location.pathname === "/login";

  const handleLogin = () => {
    navigate("/");
  };

  const handleRegister = () => {
    navigate("/");
  };

  const handleClose = () => {
    navigate("/");
  };

  return (
    <div>
      <Dialog open={true} onClose={handleClose}>
        {isPathLogin ? (
          <DialogTitle>Login</DialogTitle>
        ) : (
          <DialogTitle>Register</DialogTitle>
        )}

        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
          />
          {!isPathLogin && (
            <Fragment>
              <TextField
                autoFocus
                margin="dense"
                id="username"
                label="User Name"
                type="text"
                fullWidth
                variant="standard"
              />
              <TextField
                autoFocus
                margin="dense"
                id="address"
                label="Address"
                type="text"
                fullWidth
                variant="standard"
              />
              <TextField
                autoFocus
                margin="dense"
                id="phone"
                label="Phone"
                type="number"
                fullWidth
                variant="standard"
              />
            </Fragment>
          )}
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
    </div>
  );
};

export default FormModal;
