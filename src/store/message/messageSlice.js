import { api } from "../../heplers/request";

export const messageSlice = {
  state: {
    reviewList: [],
  },
  reducers: {
    getReviewProductFuntion: (state, payload) => {
      return {
        ...state,
        reviewList: payload,
      };
    },
  },
  effects: {
    async sendMessageCareraLoad(payload) {
      const response = await api.post(`feedback/send-career`, payload);
    },
    async sendMessageAdminLoad(payload) {
      const response = await api.post(`feedback/send`, payload);
    },
    async sendMessageDis(payload) {
      const response = await api.post(`feedback/send-dis`, payload);
    },
    async sendReviewLoad(payload) {
      const response = await api.post(`product/set-review`, payload);
    },
    async GetReviewLoad(id) {
      const response = await api.get(`product/reviews?product_id=${id}`);
      this.getReviewProductFuntion(response.data.data);
    },
  },
};
