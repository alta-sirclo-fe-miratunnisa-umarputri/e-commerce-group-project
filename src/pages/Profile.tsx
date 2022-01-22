import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import ProfileImage from '../assets/app-store.png';
import './Profile.css'

const Profile = () => {
  const navigate = useNavigate();
  
  const handleEditProfile = () => {
    navigate("/editprofile");
  }

  const handleEditPassword = () => {
    navigate("/editpassword");
  }

  return (
    <div className='main-container'>
      <div className='photo-container'>
        <img
          src={ ProfileImage } width="200px" height="200px" alt=""/>
      </div>
      <div className='table-container'>
        <table>
          <tbody>
            <tr>
              <td>Username</td>
            </tr>
            <tr>
              <td>user.username</td>
            </tr>
            <tr>
              <td>E-mail</td>
            </tr>
            <tr>
              <td>user.email</td>
            </tr>
            <tr>
              <td>Handphone Number</td>
            </tr>
            <tr>
              <td>user.phonenumber</td>
            </tr>
            <tr>
              <td>Address</td>
            </tr>
            <tr>
              <td>user.address</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='button-container'>
        <Button 
          className='button1'
          onClick={() => handleEditProfile()}
          variant="outlined" size="small">Edit Profile
          </Button> <br />
        <Button 
          className='button2'
          onClick={() => handleEditPassword()}
          variant="outlined" size="small">Change Password
          </Button> <br />
        <Button
          className='button3' 
          variant="outlined" size="small" color="error">Delete Account
          </Button>
      </div>
    </div>
  );
};

export default Profile;
