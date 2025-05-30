import { Box, Container, Typography } from "@mui/material";
import React from "react";
import TestButton from "../../component/examples/TestButton";

const TestPage = () => {
  return (
    <React.Fragment>
      <Container disableGutters maxWidth={"lg"}>
        <Typography variant="h5" color="secondary" align="center" py={2}>
          Test Page
        </Typography>
        <Box component={"div"} sx={{ background: "violet", borderRadius: 2 }}>
          <TestButton />
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default TestPage;
