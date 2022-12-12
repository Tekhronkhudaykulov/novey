import { api } from "../../heplers/request";

export const productSlice = {
  state: {
    popularProductList: [],
    viewProductIdList: [],
    similarProductList: [],
    newProductList: [],
    productSeachList: [],
    productModal: false,
    productPriceDownList: [],
    categoryProductList: [],
    categoryByIdList: [],
  },
  reducers: {
    popularProductFunction: (state, payload) => {
      return {
        ...state,
        popularProductList: payload,
      };
    },
    newProductFuntion: (state, payload) => {
      return {
        ...state,
        newProductList: payload,
      };
    },
    viewProductIdFunction: (state, payload) => {
      return {
        ...state,
        viewProductIdList: payload,
      };
    },
    similarProductFunction: (state, payload) => {
      return {
        ...state,
        similarProductList: payload,
      };
    },
    productSearchForKey: (state, payload) => {
      return {
        ...state,
        productSeachList: payload,
      };
    },
    productModalFunction: (state, isModal) => ({
      ...state,
      productModal: isModal,
    }),
    productPriceDownFunction: (state, payload) => ({
      ...state,
      productPriceDownList: payload,
    }),
    categoryProductFuntion: (state, payload) => ({
      ...state,
      categoryProductList: payload,
    }),
    CategoryProductByIdFunction: (state, payload) => ({
      ...state,
      categoryByIdList: payload,
    }),
  },
  effects: {
    async loadGetPopularProduct() {
      const response = await api.get("/product?sort=popular");
      this.popularProductFunction(response.data.data);
    },
    async loadNewProductFunction() {
      const response = await api.get("/product?sort=recently");
      this.newProductFuntion(response.data.data);
    },
    async loadGetProductId(id) {
      const response = await api.get(`/product/detail?id=${id}`);
      this.viewProductIdFunction(response.data.data);
    },
    async loadGetSimilarProduct(id) {
      const response = await api.get(
        `/product/related-products?product_id=${id}`
      );
      this.similarProductFunction(response.data.data);
    },
    async productSearchLoad(payload) {
      const response = await api.get(`product/search?query=${payload}`);
      this.productSearchForKey(response.data.data);
    },
    async productPriceDownLoad() {
      const response = await api.get(`product?sort=price_down`);
      this.productPriceDownFunction(response.data.data);
    },
    async productFetchCategoryLoad() {
      const response = await api.get(`category?type=product`);
      this.categoryProductFuntion(response.data.data);
    },
    async productFetchByCategoryLoad(id) {
      const response = await api.get(`product/by-category?id=${id}`);
      this.CategoryProductByIdFunction(response.data.data);
    },
  },
};
