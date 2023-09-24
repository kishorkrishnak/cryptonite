import React from "react";
import { Banner, CoinsTable, Header } from "../components";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <>
      <Header currencySelect={true} />
      <Banner />
      <CoinsTable />
      <Footer/>
    </>
  );
};

export default Home;
