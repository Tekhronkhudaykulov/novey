import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Card from "../../components/card";
import Input from "../../components/input";
import PagePath from "../../components/pagePath";
import Seo from "../../components/seo";

const Search = () => {
  const { productSeachList } = useSelector((state) => state.productSlice);

  const dispatch = useDispatch();
  let [searchParams, setSearchParams] = useSearchParams();

  const params = Object.fromEntries([...searchParams]);

  useEffect(() => {
    dispatch.productSlice.productSearchLoad(params.query);
  }, []);

  return (
    <>
      <PagePath />
      <section class="search-result">
        <div class="search-result__container">
          <h3 class="search-result__title title">Результаты поиска</h3>
          <div class="search-result__form form">
            <Input />
          </div>
          <div class="search-result__items">
            {productSeachList.length > 0
              ? productSeachList.map((item, indx) => (
                  <div key={indx}>
                    <Card product={item} />
                  </div>
                ))
              : "Hech narsa yoq "}
          </div>
        </div>
      </section>
      <Seo />
    </>
  );
};

export default Search;
