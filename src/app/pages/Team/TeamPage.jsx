import React from "react";
import TestFavTeam from "../../component/examples/TestFavTeam";
import { Container } from "@mui/material";
const TeamPage = () => {
  return (
    <React.Fragment>
      <Container disableGutters maxWidth="lg" sx={{ p: 2, bgcolor: "red" }}>
        <TestFavTeam />
      </Container>
    </React.Fragment>
  );
};

export default TeamPage;
