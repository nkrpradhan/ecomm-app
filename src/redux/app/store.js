import addCart from "../features/cartSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    addCart: addCart,
  },
});

export default store;
