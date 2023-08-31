import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";

import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import { authSelectors } from "../../redux/auth";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Navbar.module.css";
import operations from "../../redux/auth/auth-operations";

const pages = (isLoggedIn) =>
  [
    { page: "Home", path: "/" },
    { page: "Contacts", path: "/contacts" },
    isLoggedIn ? null : { page: "Register", path: "/register" },
    isLoggedIn ? null : { page: "Log in", path: "/login" },
  ].filter(Boolean);

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const dispath = useDispatch();

  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  const userName = useSelector(authSelectors.getUsername);

  console.log({ userName });

  const handleLogOut = () => {
    // dispath();
    dispath(operations.logOut());
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { md: "flex" } }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            {pages(isLoggedIn).map(({ page, path }) => (
              <Link
                to={path}
                style={{ textDecoration: "none", color: "inherit" }}
                key={page}
              >
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              </Link>
            ))}
            <Box className={styles.userName}>{userName}</Box>
          </Box>
          {isLoggedIn && (
            <Button onClick={handleLogOut} variant="outlined" color="error">
              Log out
            </Button>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
