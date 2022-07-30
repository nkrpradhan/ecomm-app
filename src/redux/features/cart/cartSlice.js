import { createSlice, current } from "@reduxjs/toolkit";

export const initialState = { cart: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      const product = action.payload;

      const productExist = state.cart.findIndex((item) => {
        return item.id === product.id;
      });
      console.log("productExist or not--", productExist);
      if (productExist >= 0) {
        console.log("product exists");
        state.cart[productExist].quantity =
          Number(state.cart[productExist].quantity) + Number(product.quantity);
      } else {
        state.cart.push(product);
      }
    },
    incrementCart: (state, action) => {
      const product = action.payload;
      const productIndex = state.cart.findIndex((item) => {
        return item.id === product.id;
      });

      state.cart[productIndex].quantity =
        Number(state.cart[productIndex].quantity) + 1;
    },
    decrementCart: (state, action) => {
      const product = action.payload;
      const productIndex = state.cart.findIndex((item) => {
        return item.id === product.id;
      });

      state.cart[productIndex].quantity =
        Number(state.cart[productIndex].quantity) - 1;
    },
    deleteProduct: (state, action) => {
      const product = action.payload;
      const productIndex = state.cart.findIndex((item) => {
        return item.id === product.id;
      });

      state.cart.length > 0 && state.cart.splice(productIndex, 1);
    },
  },
});

export default cartSlice.reducer;
export const { addCart, incrementCart, decrementCart, deleteProduct } =
  cartSlice.actions;
