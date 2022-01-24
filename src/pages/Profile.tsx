import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import ProfileImage from '../assets/app-store.png';
import './Profile.css';
import axios from 'axios';

const Profile = () => {
  const navigate = useNavigate();
  const URL = "http://3.0.145.2/users";
  const accessToken = localStorage.getItem("accessToken");
  const [profile, setProfile] = useState<any[]>([]);
  
  React.useEffect(() => {
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
        console.log(res.data);
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

  const handleDeleteAccount = () => {
    navigate("/");
    // delete account
  }

  return (
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
              <td>{profile[0]}</td>
            </tr>
            <tr>
              <td>E-mail</td>
            </tr>
            <tr>
              <td>{profile[1]}</td>
            </tr>
            <tr>
              <td>Handphone Number</td>
            </tr>
            <tr>
              <td>{profile[2]}</td>
            </tr>
            <tr>
              <td>Address</td>
            </tr>
            <tr>
              <td>{profile[5]}</td>
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
          onClick={() => handleDeleteAccount()}
          variant="outlined" size="small" color="error">Delete Account
          </Button>
      </div>
    </div>
  )
};

export default Profile;
