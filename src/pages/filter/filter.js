import React from "react";
import FilterList from "./component/filterList";
import Seo from "../../components/seo";
import Benefits from "../../components/benefits";
import PagePath from "../../components/pagePath";
const Filter = () => {
  return (
    <>
      <PagePath />
      <FilterList />
      <Seo />
      <Benefits />
    </>
  );
};
export default Filter;
