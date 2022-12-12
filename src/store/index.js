import loadingPlugin from "@rematch/loading";
import { init } from "@rematch/core";
import { authSlice } from "./auth/auth";
import { productSlice } from "./product/productSlice";
import { profileSlice } from "./profile/profileSlice";
import { basketSlice } from "./basket/basketSlice";
import { OtherSlice } from "./other/OtherSlice";
import { messageSlice } from "./message/messageSlice";
import { orderSlice } from "./orders/ordersSlice";

const store = init({
  models: {
    authSlice,
    productSlice,
    profileSlice,
    basketSlice,
    OtherSlice,
    messageSlice,
    orderSlice,
  },
  plugins: [loadingPlugin({ type: "full" })],
});

export default store;
