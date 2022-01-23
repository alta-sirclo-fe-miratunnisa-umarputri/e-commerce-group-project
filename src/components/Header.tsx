import { useState, MouseEvent } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import StoreIcon from "@mui/icons-material/Store";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import MoreIcon from "@mui/icons-material/MoreVert";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import { useNavigate, useLocation } from "react-router-dom";

import logo from "../assets/logo.png";
import style from "./Header.module.css";
import { Search, SearchIconWrapper, StyledInputBase } from "./HeaderStyle";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLogin, setIsLogin] = useState(false);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    useState<null | HTMLElement>(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const isShowingSearchBar =
    location.pathname === "/" || location.pathname === "/myproduct";

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event: MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleHome = () => {
    navigate("/");
  };

  const handleMyProduct = () => {
    navigate("/myproduct");
  };

  const handleProfile = () => {
    navigate("/profile");
  };

  const handleCart = () => {
    navigate("/cart");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const mobileMenuLogin = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" color="inherit" onClick={handleHome}>
          <HomeIcon />
        </IconButton>
        <p>Home</p>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" color="inherit" onClick={handleMyProduct}>
          <StoreIcon />
        </IconButton>
        <p>My Product</p>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" color="inherit" onClick={handleProfile}>
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" color="inherit" onClick={handleCart}>
          <ShoppingCartIcon />
        </IconButton>
        <p>Cart</p>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" color="inherit">
          <LogoutIcon />
        </IconButton>
        <p>Logout</p>
      </MenuItem>
    </Menu>
  );
  const mobileMenuNotLogin = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" color="inherit" onClick={handleLogin}>
          <LoginIcon />
        </IconButton>
        <p>Login</p>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" color="inherit">
          <AppRegistrationIcon />
        </IconButton>
        <p>Register</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <img alt="logo" src={logo} className={style.logo} />

          {isShowingSearchBar && (
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          )}

          <Box sx={{ flexGrow: 1 }} />

          {isLogin && (
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton size="large" color="inherit" onClick={handleHome}>
                <HomeIcon />
              </IconButton>
              <IconButton
                size="large"
                color="inherit"
                onClick={handleMyProduct}
              >
                <StoreIcon />
              </IconButton>
              <IconButton size="large" color="inherit" onClick={handleProfile}>
                <AccountCircle />
              </IconButton>
              <IconButton size="large" color="inherit" onClick={handleCart}>
                <ShoppingCartIcon />
              </IconButton>
              <IconButton size="large" color="inherit">
                <LogoutIcon />
              </IconButton>
            </Box>
          )}

          {!isLogin && (
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton size="large" color="inherit" onClick={handleLogin}>
                <LoginIcon />
              </IconButton>

              <IconButton size="large" color="inherit">
                <AppRegistrationIcon />
              </IconButton>
            </Box>
          )}

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {isLogin ? mobileMenuLogin : mobileMenuNotLogin}
    </Box>
  );
};

export default Header;
