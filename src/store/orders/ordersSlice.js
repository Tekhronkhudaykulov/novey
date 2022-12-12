import { api } from "../../heplers/request";

export const orderSlice = {
  state: {
    orderList: {},
  },
  reducers: {
    sendOrderFunction: (state, payload) => {
      return {
        ...state,
        orderList: payload,
      };
    },
  },
  effects: {
    async sendOrderLoad(payload) {
      const response = await api.post(`order/send`, payload);
      this.sendOrderFunction(response.data.data);
    },
  },
};
