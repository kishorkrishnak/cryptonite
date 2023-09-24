import React from "react";
import { Banner, CoinsTable, Header } from "../components";
const Home = () => {
  return (
    <>
      <Header currencySelect={true} />
      <Banner />
      <CoinsTable />
    </>
  );
};

export default Home;
