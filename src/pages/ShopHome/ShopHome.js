import React from "react";
import BannerForShop from "../../components/bannerForShop";
import Seo from "../../components/seo";
import NewProduct from "./component/newProduct";
import PopularProduct from "./component/popularProducts";
import PromotionalProduct from "./component/promotionalProduct";
import Benefits from "../../components/benefits";

const ShopHome = () => {
  return (
    <>
      <BannerForShop />
      <PopularProduct />
      <PromotionalProduct />
      <NewProduct />
      <Seo />
      <Benefits />
    </>
  );
};

export default ShopHome;
