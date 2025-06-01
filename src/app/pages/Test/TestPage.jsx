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
import TestSelect from "../../component/examples/TestSelect";
import TestSlider from "../../component/examples/TestSlider";
import TestGrid from "../../component/examples/TestGrid";
import TestTextField from "../../component/examples/TestTextField";

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
          sx={{ background: "cyan", borderRadius: 2, p: 2, minHeight: 400 }}
        >
          {/* <TestButton /> */}
          {/* <TestCheckBox /> */}
          {/* <TestFloatingActionButton /> */}
          {/* <TestRadioButton /> */}
          {/* <TestRating /> */}
          {/* <TestSwitch /> */}
          {/* <TestSelect /> */}
          {/* <TestSlider /> */}
          {/* <TestGrid /> */}
          {/* <TestTextField /> */}
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default TestPage;
