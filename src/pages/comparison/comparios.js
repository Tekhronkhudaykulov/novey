import React from "react";
import PagePath from "../../components/pagePath";
import SimilarProduct from "../../components/similarProduct";
import ComparePrice from "./component/ComparePrice";
import CompareTexnik from "./component/CompareTexnik";
import CompariosProduct from "./component/ComparisonProduct";
import Seo from "../../components/seo";

const Comparios = () => {
  return (
    <>
      <PagePath />
      <CompariosProduct />;
      <ComparePrice />
      <CompareTexnik />
      <SimilarProduct />
      <Seo />
    </>
  );
};
export default Comparios;
