import axios from "axios";
import React, { useEffect, useState } from "react";

const TWITTER_API_URL = "https://api.twitter.com/2/tweets";

const getElonMuskTweets = async () => {
  try {
    const response = await axios.get(`${TWITTER_API_URL}/user_timeline`, {
      params: {
        screen_name: "elonmusk",
        tweet_fields: "text",
      },
      headers: {
        Authorization: `Bearer 1290938224177643521-aTLdQbiFjyLP8266Y2h3yyqK0T9Y1I`, // Replace with your actual Twitter API Bearer Token
      },
    });

 
    const cryptoTweets = response.data.filter((tweet) => {
      return tweet.text.includes("crypto");
    });

    return cryptoTweets;
  } catch (error) {
    console.error("Error fetching tweets:", error);
    throw error;
  }
};

const Tweets = () => {
  const [tweets, setTweets] = useState(null);

  useEffect(() => {
    // Fetch Elon Musk's crypto-related tweets when the component mounts
    async function fetchTweets() {
      try {
        const cryptoTweets = await getElonMuskTweets();
        setTweets(cryptoTweets);
      } catch (error) {
        console.error("Error fetching tweets:", error);
      }
    }

    fetchTweets();
  }, []);

  return (
    <>
      {tweets && (
        <div>
          <h1>Elon Musk's Crypto-Related Tweets</h1>
          <ul>
            {tweets.map((tweet) => (
              <li key={tweet.id}>{tweet.text}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Tweets;
