import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import {Link} from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Blog from "../assets/blog.png";
import Google from "../assets/google.png";


const theme = createTheme({
    palette: {
      primary: {
        main: "#046582",
      },
    },
  });

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm" sx={{ maxHeight: "89vh" }}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: "10px",
            boxShadow: "5px 5px 10px black",
            background: "#efefef",
            padding: "2rem",
            overflow: "hidden",
            maxWidth: "500px",
          }}
        >
          <Box component={"div"} sx={{ backgroundColor:"primary.main", borderRadius:"50%", padding:"0.5rem"}}>
            <img src={Blog} alt="Blog log" width={"180px"} height={"180px"} />
          </Box>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
          >
            <TextField
              margin="normal"
              fullWidth
              name="email"
              label="Email Address"
              type="email"
              id="email"
              error
              helperText="Email is required"
            />
            <TextField
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              error
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, ":hover":{background:"lightgray", color:"primary.main"}}}
              
            >
              Login
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, background:"#fff", color:"black", ":hover":{background:"lightgray"}}}
            >
              With &nbsp; &nbsp;<img src={Google} alt="google logo" width={"100px"}/>
            </Button>
            <Grid container>
            <Grid item xs>
                <Link style={{ textDecoration: "none", color: "#046582", cursor:"pointer" }}
                    to="/Register">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
              Don't have an account? &nbsp;
              <Link
                    style={{ textDecoration: "none", color: "#046582", cursor:"pointer" }}
                    to="/Login"
                  >
                    Sign Up
                  </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
