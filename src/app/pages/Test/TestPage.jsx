import { Box, Button, Container, Typography, Grid } from "@mui/material";
import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeProvider";
import { grey, blueGrey, cyan, brown, deepOrange } from "@mui/material/colors";
// import TestButton from "../../component/examples/TestButton";
import TestCheckBox from "../../component/examples/TestCheckBox";
import TestFloatingActionButton from "../../component/examples/TestFloatingActonButton";
import TestRadioButton from "../../component/examples/TestRadioButton";
import TestRating from "../../component/examples/TestRating";
import TestSwitch from "../../component/examples/TestSwitch";
import TestSelect from "../../component/examples/TestSelect";
import TestSlider from "../../component/examples/TestSlider";
import TestGrid from "../../component/examples/TestGrid";
import TestTextField from "../../component/examples/TestTextField";
import TestToggleButton from "../../component/examples/TestToggleButton";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../../features/counter/counterSlice";
import { useDispatch, useSelector } from "react-redux";
import { useGetDogsQuery } from "../../services/dogData";
import TestAvator from "../../component/examples/TestAvator";
import TestFavTeam from "../../component/examples/TestFavTeam";

const TestPage = () => {
  const { theme } = useContext(ThemeContext);

  const { count } = useSelector((store) => store.counter);
  const dispatch = useDispatch();

  const { data, isError, isLoading } = useGetDogsQuery();
  console.log(data);

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
          sx={{
            bgcolor: theme ? brown[900] : deepOrange[600],
            borderRadius: 2,
            p: 2,
            minHeight: 400,
          }}
        >
          {/* <Grid container spacing={3}>
            {data?.message?.map((image, idx) => {
              return (
                <Grid size={{ xs: 12, md: 6, lg: 3 }}>
                  <Box
                    sx={{
                      width: 200,
                      height: 260,
                      m: 1,
                      "&:hover": {
                        boxShadow: 5,
                        border: "2px solid red",
                        scale: 1.07,
                        transition: "0.3s",
                      },
                    }}
                    key={idx}
                    component={"img"}
                    src={image}
                    alt={`dog-${idx}`}
                  />
                </Grid>
              );
            })}
          </Grid> */}

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
          {/* <TestToggleButton /> */}
          {/* {count}
          <Button
            variant="text"
            color="info"
            onClick={() => dispatch(increment())}
          >
            +
          </Button> */}
          {/* <TestAvator /> */}
          <TestFavTeam />
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default TestPage;
