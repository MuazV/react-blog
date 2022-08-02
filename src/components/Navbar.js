import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Logo from "../assets/logo.png";
import { Stack } from "@mui/material";

export default function MenuAppBar() {
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleChange = (e) => {
    setAuth(e.target.checked);
  };

  const handleMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <AppBar position="static">
        <Toolbar sx={{ }}>
          <Stack style={{  flexGrow:1 }}>
            <img src={Logo} alt="Cerenity Logo" width="30px" height="30px"/>
          </Stack>
          <Typography variant="h6" component="div" sx={{flexGrow:1}}>
            <Box component="span" sx={{"&::before":{content:'""', display:"block", width:"120px", height:"2px",  color:"#fff"}}}>Cerenity</Box>  Blog
          </Typography>
          <Stack>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Login</MenuItem>
              <MenuItem onClick={handleClose}>Register</MenuItem>
            </Menu>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
