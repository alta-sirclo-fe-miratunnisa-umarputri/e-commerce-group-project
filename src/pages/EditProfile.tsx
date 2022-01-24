import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

const EditProfile = () => {
  const navigate = useNavigate();
  const URL = "http://3.0.145.2/users";
  const accessToken = localStorage.getItem("accessToken");
  const [profile, setProfile] = useState<any[]>([]);
  
  useEffect(() => {
    fetchData()
  }, []);

  const fetchData = () => {
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`
      },
    };
    axios
      .get(URL, config)
      .then((res) => {
        const profileExtract = res.data.data;
        setProfile(profileExtract);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(
      )
  }


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
            defaultValue={profile[0]}
          />
          <TextField
            autoFocus
            margin="dense"
            id="editEmail"
            label="Email"
            type="email"
            fullWidth
            variant="standard"
            defaultValue={profile[0]}
          />
          <TextField
            autoFocus
            margin="dense"
            id="editHandphoneNumber"
            label="HandphoneNumber"
            type="text"
            fullWidth
            variant="standard"
            defaultValue={profile[0]}
          />
          <TextField
            id="editAddress"
            label="Address"
            type="text"
            multiline
            fullWidth
            maxRows={5}
            variant="standard"
            defaultValue={profile[0]}
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
