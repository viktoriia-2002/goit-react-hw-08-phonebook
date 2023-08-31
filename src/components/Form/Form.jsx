import React, { useState } from "react";
import {
  FormControl,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import operations from "../../redux/auth/auth-operations";

// registered email:  "snowe@gmail.com" name : "Johne Snowe" password : "snow12452345343!"

const Form = ({ type }) => {
  const dispath = useDispatch();
  const navigate = useNavigate();

  const isLoginForm = type === "login";
  const isRegisterForm = type === "register";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    isLoginForm && dispath(operations.logIn({ email, password }));
    isRegisterForm && dispath(operations.register({ name, email, password }));
    isRegisterForm && setName("");
    setEmail("");
    setPassword("");
    navigate("/contacts");
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <>
      {isLoginForm ? "Log In" : "Registered"}
      <form onSubmit={onSubmit}>
        <FormControl className="slider">
          {isRegisterForm && (
            <TextField
              id="outlined-basic"
              label="Name*"
              onChange={handleNameChange}
              value={name}
              variant="outlined"
              name="name"
            />
          )}

          <TextField
            id="outlined-basic"
            label="Email Address*"
            onChange={handleEmailChange}
            value={email}
            variant="outlined"
            name="email"
          />

          <TextField
            id="outlined-basic"
            label="Password*"
            variant="outlined"
            value={password}
            onChange={handlePasswordChange}
            name="password"
          />

          <Button variant="contained" type="submit">
            {isLoginForm ? "Log in" : "Registered"}
          </Button>
          {isRegisterForm && (
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Remember me"
              name="password"
            />
          )}
        </FormControl>
      </form>
    </>
  );
};

export default Form;
