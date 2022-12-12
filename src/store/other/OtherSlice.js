import { api } from "../../heplers/request";

export const OtherSlice = {
  state: {
    newList: [],
    advantageList: [],
    seoList: {},
    partnerList: [],
    sliderList: [],
    regionList: [],
    newsDetailList: {},
    deliveryList: [],
    paymentList: [],
    colors: [],
  },
  reducers: {
    //news
    newsFuntion: (state, payload) => {
      return {
        ...state,
        newList: payload,
      };
    },
    colorFuntion: (state, payload) => {
      return {
        ...state,
        colors: payload,
      };
    },
    //newsDetail
    newsDetailFuntion: (state, payload) => {
      return {
        ...state,
        newsDetailList: payload,
      };
    },
    //advantage
    advantageFuntion: (state, payload) => {
      return {
        ...state,
        advantageList: payload,
      };
    },
    //seo
    seoFuntion: (state, payload) => {
      return {
        ...state,
        seoList: payload,
      };
    },
    //partner
    partnerFuntion: (state, payload) => {
      return {
        ...state,
        partnerList: payload,
      };
    },
    //sliderForSite
    sliderFunction: (state, payload) => {
      return {
        ...state,
        sliderList: payload,
      };
    },
    //region
    regionFunction: (state, payload) => {
      return {
        ...state,
        regionList: payload,
      };
    },
    //delivery methods
    deliveryMethodFunction: (state, payload) => {
      return {
        ...state,
        deliveryList: payload,
      };
    },
    //payment methods
    paymentMethodFunction: (state, payload) => {
      return {
        ...state,
        paymentList: payload,
      };
    },
  },
  effects: () => ({
    //news
    async loadNews() {
      const response = await api.get("/news");
      this.newsFuntion(response.data.data);
    },
    //color
    async loadColors() {
      const response = await api.get("/color");
      this.colorFuntion(response.data.data);
    },
    //newsDetaild
    async loadNewsDetail(id) {
      const response = await api.get(`/news/detail?id=${id}`);
      this.newsDetailFuntion(response.data.data);
    },
    //adventage
    async loadAdvantage() {
      const response = await api.get("/advantage");
      this.advantageFuntion(response.data.data);
    },
    //seo
    async loadSeo() {
      const response = await api.get("/seo");
      this.seoFuntion(response.data.data);
    },
    //partner
    async loadPartner() {
      const response = await api.get("/partnertab");
      this.partnerFuntion(response.data.data);
    },
    //sliderForSite
    async loadSlider() {
      const response = await api.get("/slider?type=site");
      this.sliderFunction(response.data.data);
    },
    //region
    async loadRegion() {
      const response = await api.get("/category?type=region");
      this.regionFunction(response.data.data);
    },
    //delivery methods
    async loadDeliveryMethod() {
      const response = await api.get("/delivery");
      this.deliveryMethodFunction(response.data.data);
    },
    //payment methods
    async loadPaymentMethod() {
      const response = await api.get("/category?type=payment");
      this.paymentMethodFunction(response.data.data);
    },
  }),
};
