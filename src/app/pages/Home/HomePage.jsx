import React from "react";
import {
  Home,
  HomeMax,
  LiveHelpOutlined,
  LocalBarOutlined,
} from "@mui/icons-material";
import { Container } from "@mui/material";
import { amber, purple, pink } from "@mui/material/colors";

const HomePage = () => {
  return (
    <React.Fragment>
      <Container disableGutters maxWidth="lg">
        <Home fontSize="large" color="secondary" />
        <Home fontSize="large" color="info" />
        <Home fontSize="large" color="error" />
        <Home fontSize="large" sx={{ color: amber[500] }} />
        <Home fontSize="large" sx={{ color: pink[400] }} />
        <LiveHelpOutlined fontSize="large" sx={{ color: pink[400] }} />
        <LocalBarOutlined fontSize="large" sx={{ color: pink[400] }} />
      </Container>
    </React.Fragment>
  );
};

export default HomePage;
