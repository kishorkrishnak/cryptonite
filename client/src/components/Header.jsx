import MenuIcon from "@mui/icons-material/Menu";
import { MenuItem, Select } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CryptoState } from "../CryptoContext";
import { Logo } from "../assets/images";
const drawerWidth = 240;

function Header(props) {
  const navigate = useNavigate();
  const currencyList = [
    "AED",
    "ARS",
    "AUD",
    "BDT",
    "BHD",
    "BMD",
    "BRL",
    "CAD",
    "CHF",
    "CLP",
    "CZK",
    "DKK",
    "GBP",
    "HKD",
    "HUF",
    "ILS",
    "INR",
    "JPY",
    "KWD",
    "LKR",
    "MMK",
    "MXN",
    "MYR",
    "NGN",
    "NOK",
    "NZD",
    "PHP",
    "PKR",
    "PLN",
    "SAR",
    "SEK",
    "SGD",
    "THB",
    "TRY",
    "UAH",
    "VEF",
    "VND",
    "ZAR",
    "XDR",
  ];

  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const { currency, setCurrency } = CryptoState();
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;
  const useStyles = makeStyles(() => ({
    title: {
      flex: 1,
      color: "white",
      fontWeight: "bold",
      cursor: "pointer",
    },
    brand: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "fit-content",
      gap: 6,
    },
  }));
  const classes = useStyles();

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        onClick={() => navigate("/")}
        variant="h5"
        className={classes.title}
      >
        <div className={classes.brand}>
          <img src={Logo} alt="logo" height={35} />
          Cryptonite
        </div>
      </Typography>
      <Divider />
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          justifyContent: "center",
          gap: 2,
          paddingX: 3,
        }}
      >
        {props.currencySelect && (
          <Select
            variant="outlined"
            style={{
              width: 100,
              height: 40,
              marginRight: 15,
            }}
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <MenuItem value={"USD"}>USD</MenuItem>
            <MenuItem value={"INR"}>INR</MenuItem>
          </Select>
        )}
        <Button
          onClick={() => navigate("/news")}
          variant="contained"
          color="primary"
        >
          News
        </Button>{" "}
        <Button
          onClick={() => navigate("/converter")}
          variant="contained"
          color="primary"
        >
          Convert
        </Button>{" "}
        <Button variant="contained" color="warning">
          Login
        </Button>
      </List>
    </Box>
  );

  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="static"
          color="transparent"
          component="nav"
          sx={{
            justifyContent: "center",
            boxShadow: "none",
          }}
        >
          <Toolbar>
            <Typography
              onClick={() => navigate("/")}
              variant="h5"
              className={classes.title}
            >
              <div className={classes.brand}>
                <img src={Logo} alt="logo" height={35} />
                Cryptonite
              </div>
            </Typography>
            {props.currencySelect && (
              <Select
                variant="outlined"
                style={{
                  width: 100,
                  height: 40,
                  marginRight: 15,
                }}
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
              >
                {currencyList.map((currency) =><MenuItem value={currency}>{currency}</MenuItem>)}
                
              </Select>
            )}
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Button
                onClick={() => navigate("/news")}
                sx={{ marginLeft: 0.5 }}
                variant="contained"
                color="primary"
              >
                News
              </Button>{" "}
              <Button
                onClick={() => navigate("/converter")}
                variant="contained"
                color="primary"
              >
                Convert
              </Button>{" "}
              <Button variant="contained" color="warning">
                Login
              </Button>
            </Box>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            container={container}
            anchor="right"
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </Box>
    </ThemeProvider>
  );
}

Header.propTypes = {
  window: PropTypes.func,
};

export default Header;
