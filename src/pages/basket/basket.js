import React from "react";
import Benefits from "../../components/benefits";
import PagePath from "../../components/pagePath";
import Seo from "../../components/seo";
import BasketInfo from "./component/BasketInfo";
import MethodPayment from "./component/MethodPayment";

const Basket = () => {
  return (
    <>
      <PagePath />
      <BasketInfo />
      <MethodPayment />
      <Seo />
      <Benefits />
    </>
  );
};

export default Basket;
