import React, { useContext } from "react";
import { useGetDogsQuery } from "../../services/dogData";
import { Container, Grid, Box, Typography } from "@mui/material";
import { ThemeContext } from "../../contexts/ThemeProvider";

const DogPage = () => {
  const { data, isError, isLoading } = useGetDogsQuery();
  const { theme } = useContext(ThemeContext);

  if (isLoading) {
    return <Typography variant="h3">Loading . . . </Typography>;
  }
  return (
    <React.Fragment>
      <Container
        maxWidth="lg"
        disableGutters
        sx={{ bgcolor: theme ? "gray" : "wheat" }}
      >
        <Grid container spacing={1}>
          {data?.message?.map((image, idx) => {
            return (
              <Grid size={{ xs: 12, md: 6, lg: 3 }}>
                <Box
                  sx={{
                    width: 200,
                    height: 260,
                    ml: 6,
                    mt: 2,
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
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default DogPage;
