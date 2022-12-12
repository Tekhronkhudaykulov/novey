import React from "react";
import Benefits from "../../components/benefits";
import Rolik from "../../components/rolik";
import AboutCompany from "./components/aboutCompany";
import CareraItem from "./components/carera";
import HomePageBanner from "./components/homePageBanner";
import HomePageSummary from "./components/homePageSummary";

const Home = () => {
  return (
    <div className="home-page">
      <HomePageBanner
        title="Добро пожаловать в Novey"
        description="NOVEY - надежный и функциональный"
      />
      <HomePageSummary />
      <AboutCompany />
      <Benefits />
      <CareraItem />
      <Rolik />
    </div>
  );
};

export default Home;
