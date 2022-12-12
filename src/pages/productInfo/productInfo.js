import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import Benefits from "../../components/benefits";
import PagePath from "../../components/pagePath";
import Seo from "../../components/seo";
import SimilarProduct from "../../components/similarProduct";
import ProductAbilty from "./component/ProductAbilty";
import ProductDescription from "./component/ProductDescription";
import ProductInfoList from "./component/ProductInfoList";
import ProductInfoVideo from "./component/ProductInfoVideo";
import SendReview from "./component/SendReview";

const ProductInfo = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch.productSlice.loadGetProductId(id);
  }, []);

  const { viewProductIdList } = useSelector((state) => state.productSlice);
  return (
    <>
      <PagePath />
      <ProductInfoList viewProductIdList={viewProductIdList} />
      {viewProductIdList?.video_link && <ProductInfoVideo />}
      <ProductAbilty />
      <ProductDescription viewProductCharackter={viewProductIdList} />
      <SendReview product={viewProductIdList} />
      <SimilarProduct />
      <Seo />
      <Benefits />
    </>
  );
};
export default ProductInfo;
