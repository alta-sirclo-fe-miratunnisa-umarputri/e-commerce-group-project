import * as React from 'react';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";
import ProfileImage from '../assets/app-store.png';
import './Profile.css';
import axios from 'axios';
import { eCommerceAxios } from "../axios";

export interface profile {
  id: number;
  username: string;
  email: string;
  address: string;
  phone: string;
}

const Profile = () => {
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
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(
      )
  }

  const handleEditProfile = () => {
    navigate("/editprofile");
  }

  const handleEditPassword = () => {
    navigate("/editpassword");
  }

  const handleDeleteAccount = async(profile: any) => {
    try {
      await eCommerceAxios({
        method: "DELETE",
        headers: { Authorization: `Bearer ${accessToken}` },
        url: `/users`
      });
    } catch (err) {
      console.log(err);
    } finally {
      fetchData();
    };

    navigate("/");
    // delete account
  }

  return (
    <div>
      <Typography variant="h3" gutterBottom mt={3} textAlign="center">
        My Profile
      </Typography>
    <div className='profile-main-container'>
      <div className='profile-photo-container'>
        <img
          src={ ProfileImage } width="200px" height="200px" alt=""/>
      </div>
      <div className='profile-table-container'>
        <table>
          <tbody>
            <tr>
              <td>Username</td>
            </tr>
            <tr>
              <td>{profile.username}</td>
            </tr>
            <tr>
              <td>E-mail</td>
            </tr>
            <tr>
              <td>{profile.email}</td>
            </tr>
            <tr>
              <td>Handphone Number</td>
            </tr>
            <tr>
              <td>{profile.phone}</td>
            </tr>
            <tr>
              <td>Address</td>
            </tr>
            <tr>
              <td>{profile.address}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='profile-button-container'>
        <Button 
          className='profile-button1'
          onClick={() => handleEditProfile()}
          variant="outlined" size="small">Edit Profile
          </Button> <br />
        <Button 
          className='profile-button2'
          onClick={() => handleEditPassword()}
          variant="outlined" size="small">Change Password
          </Button> <br />
        <Button
          className='profile-button3' 
          onClick={() => handleDeleteAccount(profile)}
          variant="outlined" size="small" color="error">Delete Account
          </Button>
      </div>
    </div>
    </div>
  )
};

export default Profile;
