import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import Logo from "../assets/logo.png";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#046582",
    },
  },
});


export default function MenuAppBar() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

 
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <AppBar position="static">
          <Toolbar sx={{}}>
            <Stack style={{ flexGrow: 1 }}>
              <Link to="/">
                <img
                  src={Logo}
                  alt="Cerenity Logo"
                  width="30px"
                  height="30px"
                />
              </Link>
            </Stack>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Box
                component="span"
                sx={{
                  "&::before": {
                    content: '""',
                    display: "block",
                    width: "120px",
                    height: "2px",
                    color: "#fff",
                  },
                }}
              >
                Cerenity
              </Box>{" "}
              Blog
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
                <MenuItem onClick={handleClose}>
                  <Link
                    to={"/Login"}
                    style={{ textDecoration: "none", color: "#000" }}
                  >
                    Login
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link
                    to={"/Register"}
                    style={{ textDecoration: "none", color: "#000" }}
                  >
                    Register
                  </Link>
                </MenuItem>
              </Menu>
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
