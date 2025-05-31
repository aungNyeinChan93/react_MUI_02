import { Box, Container, Typography } from "@mui/material";
import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeProvider";
import { grey, blueGrey, cyan, brown, deepOrange } from "@mui/material/colors";
import TestButton from "../../component/examples/TestButton";
import TestCheckBox from "../../component/examples/TestCheckBox";
import TestFloatingActionButton from "../../component/examples/TestFloatingActonButton";
import TestRadioButton from "../../component/examples/TestRadioButton";
import TestRating from "../../component/examples/TestRating";
import TestSwitch from "../../component/examples/TestSwitch";

const TestPage = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <React.Fragment>
      <Container
        disableGutters
        maxWidth={"lg"}
        sx={{
          bgcolor: theme ? blueGrey[900] : deepOrange[100],
          padding: 1,
          minHeight: "100vh",
        }}
      >
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
