import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const NewsCard = ({ article }) => {
  const useStyles = makeStyles({
    card: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      width: "98%",
      paddingTop: 10,
      paddingBottom: 10,
      borderBottom: "1px solid #2b3343",
    },
    subtitle: {
      color: "#929294",
    },
  });
  function timeAgo(timestamp) {
    console.log(timestamp);
    const date = new Date(timestamp);
    const now = new Date();
    const secondsAgo = Math.floor((now - date) / 1000);

    if (secondsAgo < 60) {
      return `${secondsAgo} second${secondsAgo === 1 ? "" : "s"} ago`;
    } else if (secondsAgo < 3600) {
      const minutesAgo = Math.floor(secondsAgo / 60);
      return `${minutesAgo} minute${minutesAgo === 1 ? "" : "s"} ago`;
    } else if (secondsAgo < 86400) {
      const hoursAgo = Math.floor(secondsAgo / 3600);
      return `${hoursAgo} hour${hoursAgo === 1 ? "" : "s"} ago`;
    } else if (secondsAgo < 604800) {
      const daysAgo = Math.floor(secondsAgo / 86400);
      return `${daysAgo} day${daysAgo === 1 ? "" : "s"} ago`;
    } else {
      const weeksAgo = Math.floor(secondsAgo / 604800);
      return `${weeksAgo} week${weeksAgo === 1 ? "" : "s"} ago`;
    }
  }
  function extractIdFromURL(url) {
    const pattern = /\/news\/(\d+)\//;
    const matches = url.match(pattern);
    if (matches && matches.length > 1) {
      return matches[1];
    } else {
      return null;
    }
  }
  const classes = useStyles();
  const articleId = extractIdFromURL(article.url).trim();
  console.log(articleId);

  return (
    <a
      target="_blank"
      href={`https://cryptopanic.com/news/click/${articleId}/`}
    >
      <div className={classes.card}>
        <Typography color="white" variant="h6">
          {article.title}
        </Typography>
        <Typography variant="subtitle2" className={classes.subtitle}>
          {article.source.title} • {timeAgo(article.published_at)}
        </Typography>
      </div>
    </a>
  );
};

export default NewsCard;
