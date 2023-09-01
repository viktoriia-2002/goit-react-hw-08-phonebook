// import React, { useState } from "react";
// import {
//   FormControl,
//   TextField,
//   Button,
//   FormControlLabel,
//   Checkbox,
// } from "@mui/material";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";

// import operations from "../../redux/auth/auth-operations";

// // registered email:  "snowe@gmail.com" name : "Johne Snowe" password : "snow12452345343!"

// const Form = ({ type }) => {
//   const dispath = useDispatch();
//   const navigate = useNavigate();

//   const isLoginForm = type === "login";
//   const isRegisterForm = type === "register";

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const onSubmit = (event) => {
//     event.preventDefault();
//     isLoginForm && dispath(operations.logIn({ email, password }));
//     isRegisterForm && dispath(operations.register({ name, email, password }));
//     isRegisterForm && setName("");
//     setEmail("");
//     setPassword("");
//     navigate("/contacts");
//   };

//   const handleNameChange = (event) => {
//     setName(event.target.value);
//   };

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   return (
//     <>
//       {isLoginForm ? "Log In" : "Registered"}
//       <form onSubmit={onSubmit}>
//         <FormControl className="slider">
//           {isRegisterForm && (
//             <TextField
//               id="outlined-basic"
//               label="Name*"
//               onChange={handleNameChange}
//               value={name}
//               variant="outlined"
//               name="name"
//             />
//           )}

//           <TextField
//             id="outlined-basic"
//             label="Email Address*"
//             onChange={handleEmailChange}
//             value={email}
//             variant="outlined"
//             name="email"
//           />

//           <TextField
//             id="outlined-basic"
//             label="Password*"
//             variant="outlined"
//             value={password}
//             onChange={handlePasswordChange}
//             name="password"
//           />

//           <Button variant="contained" type="submit">
//             {isLoginForm ? "Log in" : "Registered"}
//           </Button>
//           {isRegisterForm && (
//             <FormControlLabel
//               control={<Checkbox defaultChecked />}
//               label="Remember me"
//               name="password"
//             />
//           )}
//         </FormControl>
//       </form>
//     </>
//   );
// };

// export default Form;

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import autOperations from '../../redux/auth/auth-operations';
import { useNavigate } from 'react-router-dom';

const Copyright = props => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Viktoriia Roshchyna © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

const defaultTheme = createTheme();

const Form = ({ type }) => {
  const navigate = useNavigate();
  const isLoginForm = type === 'login';
  const isRegisterForm = type === 'register';
  const dispath = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const name = data.get('name');
    const email = data.get('email');
    const password = data.get('password');

    isRegisterForm &&
      dispath(
        autOperations.register({
          name,
          email,
          password,
        })
      );

    isLoginForm &&
      dispath(
        autOperations.logIn({
          email,
          password,
        })
      );
    navigate('/contacts');
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {isLoginForm ? 'Log In' : 'Registered'}
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            {isRegisterForm && (
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                autoFocus
              />
            )}
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {isLoginForm ? 'Log In' : 'Register'}
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
};

export default Form;

// email
// :
// "fordiii@gmail.com"
// name
// :
// "Johrtyikm Fordccsdc"
// password
// :
// "Johrtyikm123!"
