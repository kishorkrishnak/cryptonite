import {
  AppBar,
  Button,
  Container,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import { CryptoState } from "../CryptoContext";
const Header = () => {
  const navigate = useNavigate();
  const useStyles = makeStyles(() => ({
    title: {
      flex: 1,
      color: "gold",
      fontFamily: "Montserrat",
      fontWeight: "bold",
      cursor: "pointer",
    },
  }));

  const classes = useStyles();
  const { currency, setCurrency } = CryptoState();
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const customAppBar = {
    height: 80,
    justifyContent: "center",
  };
  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar sx={customAppBar} color="transparent" position="static">
        <Container>
          <Toolbar>
            <Typography
              onClick={() => navigate("/")}
              variant="h5"
              className={classes.title}
            >
              CryptoZen
            </Typography>
            <Select
              variant="outlined"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={currency}
              style={{ width: 100, height: 40, marginLeft: 15 }}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"INR"}>INR</MenuItem>
            </Select>
            <Button sx={{ marginLeft: 0.5 }} color="inherit">
              Login
            </Button>

            <Button
              onClick={() => navigate("/tweets")}
              sx={{ marginLeft: 0.5 }}
              color="inherit"
            >
              Elon Tweets
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
