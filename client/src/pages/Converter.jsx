import {
  Box,
  Button,
  Container,
  LinearProgress,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Swap } from "../assets/images";
import { Header } from "../components";
import Spinbox from "../components/SpinBox";
import { CoinList, SingleCoin } from "../config/api";
import Footer from "../components/Footer";

const Converter = () => {
  const [value, setValue] = useState(0);
  const [coins, setCoins] = useState(null);
  const [currentCoin, setCurrentCoin] = useState("bitcoin");
  const [currentCurrency, setCurrentCurrency] = useState("INR");
  const [currentPrice, setCurrentPrice] = useState(0);
  const [swapDirection, setSwapDirection] = useState("COIN-CURR");
  const [loading, setLoading] = useState(false);
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  const useStyles = makeStyles(() => ({
    converter: {
      display: "flex",
      flexDirection:
        swapDirection === "COIN-CURR" ? "column" : "column-reverse",
      justifyContent: "center",
      [darkTheme.breakpoints.up("md")]: {
        flexDirection: swapDirection === "COIN-CURR" ? "row" : "row-reverse",
      },
      alignItems: "center",
      gap: 8,
    },
    container: {
      display: "flex",
      paddingTop: 25,
      paddingBottom: 100,
      justifyContent: "center",
      alignItems: "center",
    },
    converterWrapper: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "#16171A",
      gap: 20,
      padding: 40,
      marginTop: 30,
      borderRadius: 10,
    },
    swapImage: {
      transform: "rotate(90deg)",
      [darkTheme.breakpoints.up("md")]: {
        transform: "rotate(0deg)",
      },
      cursor: "pointer",
    },
  }));

  const classes = useStyles();
  const currencyList = [
    { id: "AED", text: "United Arab Emirates Dirham (AED)" },
    { id: "ARS", text: "Argentine Peso (ARS)" },
    { id: "AUD", text: "Australian Dollar (AUD)" },
    { id: "BDT", text: "Bangladeshi Taka (BDT)" },
    { id: "BHD", text: "Bahraini Dinar (BHD)" },
    { id: "BMD", text: "Bermudian Dollar (BMD)" },
    { id: "BRL", text: "Brazil Real (BRL)" },
    { id: "CAD", text: "Canadian Dollar (CAD)" },
    { id: "CHF", text: "Swiss Franc (CHF)" },
    { id: "CLP", text: "Chilean Peso (CLP)" },
    { id: "CZK", text: "Czech Koruna (CZK)" },
    { id: "DKK", text: "Danish Krone (DKK)" },
    { id: "GBP", text: "British Pound Sterling (GBP)" },
    { id: "HKD", text: "Hong Kong Dollar (HKD)" },
    { id: "HUF", text: "Hungarian Forint (HUF)" },
    { id: "ILS", text: "Israeli New Shekel (ILS)" },
    { id: "INR", text: "Indian Rupee (INR)" },
    { id: "JPY", text: "Japanese Yen (JPY)" },
    { id: "KWD", text: "Kuwaiti Dinar (KWD)" },
    { id: "LKR", text: "Sri Lankan Rupee (LKR)" },
    { id: "MMK", text: "Burmese Kyat (MMK)" },
    { id: "MXN", text: "Mexican Peso (MXN)" },
    { id: "MYR", text: "Malaysian Ringgit (MYR)" },
    { id: "NGN", text: "Nigerian Naira (NGN)" },
    { id: "NOK", text: "Norwegian Krone (NOK)" },
    { id: "NZD", text: "New Zealand Dollar (NZD)" },
    { id: "PHP", text: "Philippine Peso (PHP)" },
    { id: "PKR", text: "Pakistani Rupee (PKR)" },
    { id: "PLN", text: "Polish Zloty (PLN)" },
    { id: "SAR", text: "Saudi Riyal (SAR)" },
    { id: "SEK", text: "Swedish Krona (SEK)" },
    { id: "SGD", text: "Singapore Dollar (SGD)" },
    { id: "THB", text: "Thai Baht (THB)" },
    { id: "TRY", text: "Turkish Lira (TRY)" },
    { id: "UAH", text: "Ukrainian hryvnia (UAH)" },
    { id: "VEF", text: "Venezuelan bolívar fuerte (VEF)" },
    { id: "VND", text: "Vietnamese đồng (VND)" },
    { id: "ZAR", text: "South African Rand (ZAR)" },
    { id: "XDR", text: "IMF Special Drawing Rights (XDR)" },
  ];

  const resetConverter = () => {
    setCurrentCoin("bitcoin");
  };

  const fetchCurrentPrice = async () => {
    setLoading(true);
    const { data } = await axios.get(SingleCoin(currentCoin));
    const currentPrice =
      data?.market_data?.current_price[currentCurrency.toLowerCase()];
    console.log(currentPrice);
    setCurrentPrice(currentPrice);
    setLoading(false);
  };
  const fetchCoins = async () => {
    setLoading(true);
    const { data } = await axios.get(CoinList("INR"));
    console.log(data);
    setCoins(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  useEffect(() => {
    fetchCurrentPrice();
  }, [currentCoin, currentCurrency]);
  return (
    <>
      {loading && <LinearProgress style={{ backgroundColor: "gold" }} />}

      {coins && (
        <ThemeProvider theme={darkTheme}>
          <Header currencySelect={false} />
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
              <Spinbox value={value} setValue={setValue}></Spinbox>
              <Box className={classes.converter}>
                <Select
                  value={currentCoin}
                  onChange={(e) => {
                    setCurrentCoin(e.target.value);
                  }}
                  variant="outlined"
                  style={{
                    width: 300,
                    height: 40,
                  }}
                >
                  {coins.map((coin) => (
                    <MenuItem value={`${coin?.id}`}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 10,
                        }}
                      >
                        <img src={coin?.image} height={20} alt="" />{" "}
                        <div>{`${
                          coin?.name
                        } (${coin?.symbol?.toUpperCase()})`}</div>
                      </div>
                    </MenuItem>
                  ))}
                </Select>
                <img
                  onClick={() =>
                    setSwapDirection(
                      swapDirection === "CURR-COIN" ? "COIN-CURR" : "CURR-COIN"
                    )
                  }
                  src={Swap}
                  alt="swap"
                  height={35}
                  className={classes.swapImage}
                />

                <Select
                  variant="outlined"
                  style={{
                    width: 300,

                    height: 40,
                  }}
                  value={currentCurrency}
                  onChange={(e) => setCurrentCurrency(e.target.value)}
                >
                  {currencyList.map((currency) => (
                    <MenuItem value={currency?.id}>{currency.text}</MenuItem>
                  ))}
                </Select>
              </Box>
              <Typography
                variant="subtitle2"
                style={{
                  fontWeight: "bold",
                }}
              >
                {swapDirection === "COIN-CURR"
                  ? `${value} ${currentCoin} = ${(value * currentPrice).toFixed(
                      6
                    )} ${currentCurrency}`
                  : `${value} ${currentCurrency} = ${(
                      value / currentPrice
                    ).toFixed(6)} ${currentCoin}`}
              </Typography>
              <Button
                onClick={resetConverter}
                variant="contained"
                color="primary"
              >
                Reset
              </Button>{" "}
            </Box>
          </Container>
          <Footer />
        </ThemeProvider>
      )}
    </>
  );
};

export default Converter;
