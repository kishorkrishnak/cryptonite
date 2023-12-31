import { Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Carousel from "./Carousel";
const Banner = () => {
  
  const useStyles = makeStyles(() => ({
    bannerContent: {
      height: 440,
      display: "flex",
      flexDirection: "column",
      paddingTop: 25,
      justifyContent: "space-around",
    },
    tagline: {
      display: "flex",
      height: "40%",
      flexDirection: "column",
      justifyContent: "center",
      textAlign: "center",
    },
  }));

  const classes = useStyles();
  
  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
          <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
            }}
          >
            Cryptonite
          </Typography>

          <Typography
            variant="subtitle"
            style={{
              color: "darkgrey",
              textTransform: "capitalize",
            }}
          >
            Get all the info regarding your favorite cryptocurrencies
          </Typography>
        </div>
        <Carousel></Carousel>
      </Container>
    </div>
  );
};

export default Banner;
