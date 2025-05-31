import { Box, Container, Typography } from "@mui/material";
import React from "react";
import TestButton from "../../component/examples/TestButton";
import TestCheckBox from "../../component/examples/TestCheckBox";
import TestFloatingActionButton from "../../component/examples/TestFloatingActonButton";
import TestRadioButton from "../../component/examples/TestRadioButton";
import TestRating from "../../component/examples/TestRating";
import TestSwitch from "../../component/examples/TestSwitch";

const TestPage = () => {
  return (
    <React.Fragment>
      <Container disableGutters maxWidth={"lg"}>
        <Typography variant="h5" color="secondary" align="center" py={2}>
          Test Page
        </Typography>
        <Box
          component={"div"}
          sx={{ background: "violet", borderRadius: 2, p: 2 }}
        >
          {/* <TestButton /> */}
          {/* <TestCheckBox /> */}
          {/* <TestFloatingActionButton /> */}
          {/* <TestRadioButton /> */}
          {/* <TestRating /> */}
          <TestSwitch />
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default TestPage;
