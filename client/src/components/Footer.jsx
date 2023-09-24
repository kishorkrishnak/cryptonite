import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box, Link, ThemeProvider, createTheme } from "@mui/material";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { Logo } from "../assets/images";

export default function Footer() {
  const useStyles = makeStyles(() => ({
    socialLink: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "7px",
    },
    footer: {
      color: "white",
      borderTop: "1px solid grey",
      display: "flex",
      width: "100%",
      alignItems: "center",
      paddingLeft: 70,
      paddingTop: 50,
      paddingBottom: 50,
      paddingRight: 70,
      [darkTheme.breakpoints.down("md")]: {
        paddingLeft: 10,
        flexDirection: "column",
        paddingRight: 10,
      },
      justifyContent: "space-between",
    },
    brand: {
      width: "350px",
      display: "flex",
      alignItems: "flex-start",
      flexDirection: "column",
      justifyContent: "center",
      gap: "10px",
      [darkTheme.breakpoints.down("md")]: {
        alignItems: "center",
        width: "99%",
      },
    },
    logo: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 3,
      fontWeight: "bold",
    },
    socials: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      gap: "5px",
    },
    brandDescription: {
      [darkTheme.breakpoints.down("md")]: {
        display: "none",
      },
    },
    links: {
      [darkTheme.breakpoints.down("md")]: {
        gap: "80px",
        marginTop: "20px",
      },
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "center",
      gap: "120px",
    },
  }));

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const classes = useStyles();

  return (
    <ThemeProvider theme={darkTheme}>
      <Box component="footer" className={classes.footer}>
        <Box className={classes.brand}>
          <Typography className={classes.logo} variant="h4" color="white">
            <img src={Logo} alt="logo" height={40} />
            CRYPTONITE
          </Typography>
          <Typography
            className={classes.brandDescription}
            variant="body2"
            color="white"
          >
            We are Cryptonite, providing realtime information about
            cryptocurrent market
          </Typography>

          <Box>
            <Typography variant="body2" color="#7A7A7A" align="center">
              {"Copyright © "}
              <Link
                underline="none"
                color="inherit"
                href="https://your-website.com/"
              >
                Cryptonite
              </Link>{" "}
              {new Date().getFullYear()}
              {"."}
            </Typography>
          </Box>
        </Box>

        <Box className={classes.links}>
          <Box>
            <Typography variant="h6" color="white" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="white">
              Pricing
            </Typography>
            <Typography variant="body2" color="white">
              FAQ
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" gutterBottom>
              Links
            </Typography>
            <Typography variant="body2">News</Typography>
            <Typography variant="body2">Convert</Typography>
            <Typography variant="body2">Login</Typography>
          </Box>

          <Box className={classes.socials}>
            <Typography variant="h6" color="white" gutterBottom>
              Social
            </Typography>
            <Link
              className={classes.socialLink}
              underline="none"
              href="https://www.twitter.com/"
              color="inherit"
            >
              <Twitter /> Twitter
            </Link>
            <Link
              className={classes.socialLink}
              underline="none"
              href="https://www.facebook.com/"
              color="inherit"
            >
              <Facebook /> Facebook
            </Link>
            <Link
              className={classes.socialLink}
              underline="none"
              href="https://www.instagram.com/"
              color="inherit"
            >
              <Instagram /> Instagram
            </Link>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
