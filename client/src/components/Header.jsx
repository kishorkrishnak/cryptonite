import {
  AppBar,
  Box,
  MenuItem,
  Select,
  Toolbar,
  Typography
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import { CryptoState } from "../CryptoContext";

const Header = () => {
  const useStyles = makeStyles(() => ({
    title: {
      flex: 1,
      color: "gold",
      // fontFamily
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

  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              className={classes.title}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              CryptoZen
            </Typography>
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
          </Toolbar>
        </AppBar>
      </Box>

      {/* <AppBar color="primary" position="static">
        <Container>
          <Toolbar >
            <Link to={"/"}>
              <Typography sx={{ flexGrow: 1 }} > CryptoZen</Typography>
            </Link>
          
          </Toolbar>
        </Container>
      </AppBar> */}
    </ThemeProvider>
  );
};

export default Header;
