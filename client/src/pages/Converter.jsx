import {
  Box,
  Button,
  Container,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Header } from "../components";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Spinbox from "../components/SpinBox";

const Converter = () => {
  const useStyles = makeStyles(() => ({
    converter: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: 4,
    },
    container: {
      display: "flex",
      paddingTop: 25,
      justifyContent: "center",
      alignItems: "center",
    },
    converterWrapper: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "#131111",
      gap: 20,
      marginTop: 30,
    },

    title: {},
  }));
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  const classes = useStyles();
  const [currentCoin, setCurrentCoin] = useState("BTC");
  const [currentCurrency, setCurrentCurrency] = useState("INR");

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Header />
        <Container className={classes.container}>
          <Box>
            <Typography
              variant="h5"
              style={{
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Cryptocurrency Converter Calculator
            </Typography>
          </Box>

          <Box className={classes.converterWrapper}>
            <Spinbox></Spinbox>
            <Box className={classes.converter}>
              <Select
                variant="outlined"
                style={{
                  width: 100,
                  height: 40,
                  marginRight: 15,
                }}
              >
                <MenuItem value={"USD"}>USD</MenuItem>
                <MenuItem value={"INR"}>INR</MenuItem>
              </Select>

              <Select
                variant="outlined"
                style={{
                  width: 100,
                  height: 40,
                  marginRight: 15,
                }}
              >
                <MenuItem value={"USD"}>USD</MenuItem>
                <MenuItem value={"INR"}>INR</MenuItem>
              </Select>
            </Box>
            <Typography
              variant="subtitle2"
              style={{
                fontWeight: "bold",
              }}
            >
              1 United States Dollar "$" (USD) = 0.00051937 Gold Troy Ounce
              (XAU)
            </Typography>
            <Button variant="contained" color="primary">
              Refresh
            </Button>{" "}
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default Converter;
