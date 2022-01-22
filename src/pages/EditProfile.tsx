import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

const EditProfile = () => {
  const navigate = useNavigate();

  const handleSave = () => {
    navigate("/profile");
    // save changes to current profile
  };

  const handleCancel = () => {
    navigate("/profile");
  };

  return (
    <div>
      <Dialog open={true} onClose={handleCancel}>
        <DialogTitle>Edit Profile</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="editUsername"
            label="Username"
            type="text"
            fullWidth
            variant="standard"
            defaultValue="user.username"
          />
          <TextField
            autoFocus
            margin="dense"
            id="editEmail"
            label="Email"
            type="email"
            fullWidth
            variant="standard"
            defaultValue="user.email"
          />
          <TextField
            autoFocus
            margin="dense"
            id="editHandphoneNumber"
            label="HandphoneNumber"
            type="text"
            fullWidth
            variant="standard"
            defaultValue="user.phonenumber"
          />
          <TextField
            id="editAddress"
            label="Address"
            type="text"
            multiline
            fullWidth
            maxRows={5}
            variant="standard"
            defaultValue="user.address"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel}>Cancel</Button>
          <Button onClick={handleSave}>Save Changes</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EditProfile;