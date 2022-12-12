import "./assets/style.css";
import Home from "./pages/home/Home";
import Layout from "./components/Layout";
import Cooperation from "./pages/cooperation/cooperation";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Carera from "./pages/carera/carera";
import Distributors from "./pages/DISTRIBUTORS/DISTRIBUTORS";
import ShopHome from "./pages/ShopHome/ShopHome";
import Catalog from "./pages/catalog/catalog";
import Filter from "./pages/filter/filter";
import Favourite from "./pages/favorites/favourites";
import ProductInfo from "./pages/productInfo/productInfo";
import Basket from "./pages/basket/basket";
import Comparios from "./pages/comparison/comparios";
import Profile from "./pages/profile/profile";
import Search from "./pages/search/search";
import { useEffect, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import News from "./pages/news/news";
import CareraPage from "./pages/carera/carera";
import News1 from "./pages/news/component/News1";

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

function App() {
  const dispatch = useDispatch();
  const { isAuthLoading } = useSelector((state) => state.authSlice);

  useEffect(() => {
    dispatch.authSlice.checkIsAuthenticated();
  }, []);

  if (isAuthLoading) {
    return;
  }

  return (
    <BrowserRouter>
      <Wrapper>
        <Layout className="wrapper">
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/cooperation"} element={<Cooperation />} />
            <Route path={"/carera"} element={<CareraPage />} />
            <Route path={"/distributors"} element={<Distributors />} />
            <Route path={"/shopHomePage"} element={<ShopHome />} />
            <Route path={"/catalog"} element={<Catalog />} />
            <Route path={"/by-category"} element={<Filter />} />
            <Route path={"/favourite"} element={<Favourite />} />
            <Route path={"/productInfo/:id"} element={<ProductInfo />} />
            <Route path={"/basket"} element={<Basket />} />
            <Route path={"/compare"} element={<Comparios />} />
            <Route path={"/news"} element={<News />} />
            <Route path={"/newsDetail/:id"} element={<News1 />} />
            <Route path={"/profile"} element={<Profile />} />
            <Route path={"/search"} element={<Search />} />
          </Routes>
        </Layout>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
