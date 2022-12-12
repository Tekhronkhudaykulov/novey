import { api, formData } from "../../heplers/request";

// function removeEmpty(obj) {
//   return Object.keys(obj)
//     .filter(function (k) {
//       return obj[k] != null;
//     })
//     .reduce(function (acc, k) {
//       acc[k] = typeof obj[k] === "object" ? removeEmpty(obj[k]) : obj[k];
//       return acc;
//     }, {});
// }

// const compare = (o1, o2) =>
//   Object.keys(o1).reduce((diff, key) => {
//     if (o1[key] === o2[key]) return diff;
//     return {
//       ...diff,
//       [key]: o2[key],
//     };
//   }, {});

export const profileSlice = {
  state: {
    userList: {},
  },
  reducers: {
    getUserInformation: (state, payload) => {
      return {
        ...state,
        userList: payload.data,
      };
    },
  },
  effects: {
    async renameUserLoad(payload) {
      const response = await api.post("/user/update", formData(payload));
    },
    async getUserInformLoad() {
      const response = await api.get("/user/profile");
      this.getUserInformation(response.data);
    },
  },
};
