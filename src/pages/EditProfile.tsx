import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { eCommerceAxios } from "../axios";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";


export interface profile {
  id?: number;
  username: string;
  email: string;
  address: string;
  phone: string;
}

const EditProfile = () => {
  const navigate = useNavigate();
  const URL = "http://3.0.145.2/users";
  const accessToken = localStorage.getItem("accessToken");
  const [profile, setProfile] = useState({
    id: "",
    username: "",
    email: "",
    address: "",
    phone: ""
  });
  
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
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(
      )
  }


  const handleSave = async(profile: any) => {
    console.log(profile);
    try {
      await eCommerceAxios({
        method: "PUT",
        headers: { Authorization: `Bearer ${accessToken}` },
        url: "/users",
        data: {
          "username": profile.username,
          "email": profile.email,
          "address": profile.address,
          "phone": profile.phone,
          "password": profile.password
        }
      });
    } catch (err) {
      console.log(err);
    } finally {
      fetchData();
    };
    navigate("/profile");
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
            defaultValue={profile.username}
            onChange={(e) => setProfile({ ...profile, username: e.target.value})}
          />
          <TextField
            autoFocus
            margin="dense"
            id="editEmail"
            label="Email"
            type="email"
            fullWidth
            variant="standard"
            defaultValue={profile.email}
            onChange={(e) => setProfile({ ...profile, email: e.target.value})}
          />
          <TextField
            autoFocus
            margin="dense"
            id="editHandphoneNumber"
            label="HandphoneNumber"
            type="text"
            fullWidth
            variant="standard"
            defaultValue={profile.phone}
            onChange={(e) => setProfile({ ...profile, phone: e.target.value})}
          />
          <TextField
            id="editAddress"
            label="Address"
            type="text"
            multiline
            fullWidth
            maxRows={5}
            variant="standard"
            defaultValue={profile.address}
            onChange={(e) => setProfile({ ...profile, address: e.target.value})}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel}>Cancel</Button>
          <Button onClick={() => handleSave(profile)}>Save Changes</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EditProfile;
