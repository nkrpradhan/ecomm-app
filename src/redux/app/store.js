import addCart from "../features/cart/cartSlice";
import setGlobalUser from "../features/user/userSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    addCart: addCart,
    userDetails: setGlobalUser,
  },
});

export default store;
