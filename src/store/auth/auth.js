import { api } from "../../heplers/request";

export const authSlice = {
  state: {
    isAuthenticated: false,
    isAuthLoading: true,
    authModal: false,
    loginModal: false,
    modalVerify: false,
    phone: [],
  },
  reducers: {
    checkIsAuthenticated: (state) => {
      const token = localStorage.getItem("@token");
      const isTokenExist = !!token;
      if (isTokenExist) {
        setAuthHeader("@token");
      }
      return {
        ...state,
        isAuthenticated: isTokenExist,
        isAuthLoading: false,
      };
    },
    setPhone: (state, payload) => ({
      ...state,
      phone: payload,
    }),
    setAuthModal: (state, isVisibale) => ({ ...state, authModal: isVisibale }),
    setLoginModal: (state, isVisibaleLogin) => ({
      ...state,
      loginModal: isVisibaleLogin,
    }),

    registerFunction: (state, payload) => ({
      ...state,
      authModal: false,
      modalVerify: true,
    }),
    loginFunction: (state, payload) => ({
      ...state,
      loginModal: false,
      modalVerify: false,
    }),
    verifyCodeFunction: (state, payload) => ({
      ...state,
      modalVerify: false,
      authModal: false,
      loginModal: false,
      isAuthenticated: true,
    }),
  },
  effects: {
    async loadData(payload) {
      try {
        api.defaults.headers.common["Authorization"] = null;
        const response = await api.post("/user/sign-up", payload);
        localStorage.setItem("@otp_token", response.data.data.token);
        this.registerFunction(response.data.data);
      } catch (e) {
        throw Error(e);
      }
    },
    async loadLoginData(payload) {
      try {
        api.defaults.headers.common["Authorization"] = null;
        const response = await api.post("/user/sign-in", payload);
        localStorage.setItem("@token", response.data.token);
        this.loginFunction(response.data);
      } catch (e) {
        throw Error(e);
      }
    },
    async loadVerifyCode(payload) {
      try {
        setAuthHeader("@otp_token");
        const response = await api.post("/user/send-code", payload);
        localStorage.setItem("@token", response.data.data.token);
        this.verifyCodeFunction(response.data);
        localStorage.removeItem("@otp_token");
        setAuthHeader("@token");
        refreshPage();
      } catch (e) {
        throw Error(e);
      }
    },
  },
};

function refreshPage() {
  window.location.reload(false);
}

const setAuthHeader = (key) => {
  const token = localStorage.getItem(key);
  if (!token) {
    throw Error("Token not exist");
  }
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};
