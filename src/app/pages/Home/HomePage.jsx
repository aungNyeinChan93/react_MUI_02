import React from "react";
import { Home } from "@mui/icons-material";
import { Container } from "@mui/material";

const HomePage = () => {
  return (
    <React.Fragment>
      <Container disableGutters maxWidth="lg">
        <Home fontSize="large" color="secondary" />
        <Home fontSize="large" color="secondary" />
        <Home fontSize="large" color="secondary" />
      </Container>
    </React.Fragment>
  );
};

export default HomePage;
