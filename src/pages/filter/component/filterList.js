import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Card from "../../../components/card";
import FilterSelect from "./filterSelect";

const FilterList = () => {
  const { categoryByIdList } = useSelector((state) => state.productSlice);
  const dispatch = useDispatch();

  let [searchParams, setSearchParams] = useSearchParams();

  const params = Object.fromEntries([...searchParams]);

  // useEffect(() => {
  //   const currentParams = Object.fromEntries([...searchParams]);
  //   if (currentParams.page === undefined) {
  //     setSearchParams({ ...currentParams, page: 1, per_page: 10 });
  //   }
  //   dispatch.productSlice.productFetchByCategoryLoad(params.id);
  // }, [params.id]);

  useEffect(() => {
    dispatch.productSlice.productFetchByCategoryLoad(params.id);
  }, []);
  return (
    <section class="filter">
      <div class="filter__container">
        <h2 class="filter__title title">Доступные мобильные телефоны</h2>
        <div class="filter__body">
          <FilterSelect />
          <div class="filter__items">
            {categoryByIdList.length > 0
              ? categoryByIdList.map((item) => <Card product={item} />)
              : "Tovar yoq"}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilterList;
