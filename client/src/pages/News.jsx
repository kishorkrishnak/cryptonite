import {
  Container,
  LinearProgress,
  Pagination,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import NewsCard from "../components/NewsCard";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Header } from "../components";

const News = () => {
  const [page, setPage] = useState(1);
  const [articles, setArticles] = useState(null);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://cors-anywhere-x0cn.onrender.com/https://cryptopanic.com/api/v1/posts/?auth_token=${
          process.env.REACT_APP_CRYPTOPANIC_API_KEY
        }&page=${[page]}`
      );
      setArticles(response.data.results);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  const useStyles = makeStyles({
    pagination: {
      "& .MuiPaginationItem-root": {
        color: "gold",
      },
    },
  });

  const classes = useStyles();

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <>
      {articles ? (
        <ThemeProvider theme={darkTheme}>
          <Header></Header>
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              paddingTop: 5,
            }}
          >
            <Typography variant="h4" sx={{ color: "greenyellow" }}>
              Stay Informed with the Latest Cryptocurrency Updates
            </Typography>

            {articles.map((article, index) => {
              return <NewsCard key={index} article={article}></NewsCard>;
            })}
          </Container>
          <Pagination
            count={20}
            style={{
              padding: 20,
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
            classes={{ ul: classes.pagination }}
            onChange={(_, value) => {
              setPage(value);
              window.scroll(0, 50);
            }}
          />
        </ThemeProvider>
      ) : (
        <LinearProgress style={{ backgroundColor: "gold" }} />
      )}
    </>
  );
};

export default News;
