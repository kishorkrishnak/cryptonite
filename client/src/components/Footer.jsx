import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { Logo } from "../assets/images";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        color: "white",
        borderTop: "1px solid grey",
        display: "flex",
        width: "100%",
        alignItems: "center",
        padding:7,
        justifyContent: "space-between",
      }}
    >
      
        <Box
          sx={{
            width: 350,
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
            justifyContent: "center",
            gap: 3,
          }}
        >
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
              fontWeight: "bold",
            }}
            variant="h4"
            color="white"
          >
            <img src={Logo} alt="logo" height={40} />
            CRYPTONITE
          </Typography>
          <Typography variant="body2" color="white">
            We are Cryptonite, providing realtime information about
            cryptocurrent market
          </Typography>

          <Box>
            <Typography variant="body2" color="#7A7A7A" align="center">
              {"Copyright © "}
              <Link color="inherit" href="https://your-website.com/">
                Cryptonite
              </Link>{" "}
              {new Date().getFullYear()}
              {"."}
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            gap: 15,
          }}
        >
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
            <Typography variant="h6" color="white" gutterBottom>
              Links
            </Typography>
            <Typography variant="body2" color="white">
              News
            </Typography>
            <Typography variant="body2" color="white">
              Convert
            </Typography>
            <Typography variant="body2" color="white">
              Login
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >
            <Typography variant="h6" color="white" gutterBottom>
              Social
            </Typography>
            <Link href="https://www.twitter.com/" color="inherit">
              <Twitter /> Twitter
            </Link>
            <Link href="https://www.facebook.com/" color="inherit">
              <Facebook /> Facebook
            </Link>
            <Link href="https://www.instagram.com/" color="inherit">
              <Instagram /> Instagram
            </Link>
          </Box>
        </Box>
    </Box>
  );
}
