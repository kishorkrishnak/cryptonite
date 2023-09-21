import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useState } from "react";
import { MenuItem, Select } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import { Logo } from "../assets/images";
import { CryptoState } from "../CryptoContext";
const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

function Header(props) {
  const navigate = useNavigate();

  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const { currency, setCurrency } = CryptoState();
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const useStyles = makeStyles(() => ({
    title: {
      flex: 1,
      color: "gold",
      fontFamily: "Montserrat",
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

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
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
        <Button
          onClick={() => navigate("/tweets")}
          variant="contained"
          color="primary"
        >
          Elon Tweets
        </Button>
        <Button
          onClick={() => navigate("/tweets")}
          variant="contained"
          color="primary"
        >
          News
        </Button>{" "}
        <Button variant="contained" color="warning">
          Login
        </Button>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  const classes = useStyles();
  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="static"
          color="transparent"
          component="nav"
          sx={{
            height: 65,
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
                CryptoZen
              </div>
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
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Button
                onClick={() => navigate("/tweets")}
                sx={{ marginLeft: 0.5 }}
                variant="contained"
                color="primary"
              >
                Elon Tweets
              </Button>
              <Button
                onClick={() => navigate("/tweets")}
                sx={{ marginLeft: 0.5 }}
                variant="contained"
                color="primary"
              >
                News
              </Button>{" "}
              <Button
                variant="contained"
                color="warning"
              >
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
              keepMounted: true, // Better open performance on mobile.
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
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Header;
