import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Avatar,
  Menu,
  MenuItem,
  TextField,
} from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircle from "@mui/icons-material/AccountCircle";
import logo from "../../assets/logo.png"; // Update with your logo path
import { useAuth } from "../../context/AuthContext";
import { products } from "../Products/ProductData";
import ProductSearch from "../Products/ProductSearch";

const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate(); // For navigating to the selected product
  const [anchorEl, setAnchorEl] = useState(null);
  const { isAuth, logout } = useAuth();

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSearch = (event, value) => {
    if (value) {
      navigate(`/products/${value.id}`); // Navigate to the product details page
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* Header */}
      <AppBar
        position="static"
        sx={{ bgcolor: "background.header", boxShadow: "auto" }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Logo */}
          <Box display="flex" alignItems="center">
            <IconButton
              component={Link}
              to="/"
              edge="start"
              color="inherit"
              sx={{ mr: 2 }}
            >
              <img src={logo} alt="Logo" style={{ width: 100, height: 50 }} />
            </IconButton>
          </Box>

          {/* Search Bar */}
          <ProductSearch handleSearch={handleSearch} />

          {/* Navigation Links */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 8 }}>
            <Typography
              component={Link}
              to="/"
              sx={navLinkStyles(location.pathname === "/")}
            >
              Home
            </Typography>
            <Typography
              component={Link}
              to="/iphone"
              sx={navLinkStyles(location.pathname === "/iphone")}
            >
              Iphone
            </Typography>
            <Typography
              component={Link}
              to="/android"
              sx={navLinkStyles(location.pathname === "/android")}
            >
              Android
            </Typography>
            <Typography
              component={Link}
              to="/accessories"
              sx={navLinkStyles(location.pathname === "/accessories")}
            >
              Accessories
            </Typography>
          </Box>

          {/* User Actions */}
          <Box display="flex" alignItems="center" gap={2}>
            <IconButton color="inherit" component={Link} to="/cart">
              <ShoppingCartIcon />
            </IconButton>
            {isAuth() === "true" ? (
              <>
                <IconButton color="inherit" onClick={handleProfileMenuOpen}>
                  <AccountCircle />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleProfileMenuClose}
                  anchorOrigin={{ vertical: "top", horizontal: "right" }}
                  transformOrigin={{ vertical: "top", horizontal: "right" }}
                >
                  <MenuItem
                    onClick={handleProfileMenuClose}
                    component={Link}
                    to="/profile"
                  >
                    Profile
                  </MenuItem>
                  <MenuItem onClick={logout}>Logout</MenuItem>
                </Menu>
              </>
            ) : (
              <Typography variant="body1" sx={{ mr: 2 }}>
                <Link to="/login">Login</Link> or{" "}
                <Link to="/register">Register</Link>
              </Typography>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Box
        component="main"
        sx={{ flex: 1, p: 3, bgcolor: "background.default" }}
      >
        <Outlet />
      </Box>

      {/* Footer */}
      <Box
        component="footer"
        sx={{ textAlign: "center", p: 2, bgcolor: "background.default" }}
      >
        <Typography variant="body2">
          © {new Date().getFullYear()} E-Commerce. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

const navLinkStyles = (isActive) => ({
  textDecoration: "none",
  color: isActive ? "primary.main" : "text.primary",
  fontWeight: isActive ? "bold" : "normal",
  "&:hover": {
    color: "primary.main",
  },
});

export default Layout;
