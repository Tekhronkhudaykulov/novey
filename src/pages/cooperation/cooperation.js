import React from "react";
import CooperationBanner from "./components/cooperationBanner";
import CooperationNovey from "./components/cooperationNovey";
import CooperationPostEmail from "./components/cooperationPostEmail";

const Cooperation = () => {
  return (
    <div className="home-page">
      <CooperationBanner />
      <CooperationNovey />
      <CooperationPostEmail />
    </div>
  );
};

export default Cooperation;
