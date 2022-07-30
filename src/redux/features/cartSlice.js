import { createSlice, current } from "@reduxjs/toolkit";

export const initialState = {cart:[]};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      
      const product = action.payload;
     

      console.log("cart destr--", current(state.cart));
      const productExist = state.cart.findIndex((item) => {
        console.log("inside find", product, item);
        return item.id === product.id;
      });
      console.log("productExist or not--", productExist);
      if (productExist >= 0) {
        console.log("product exists");
        state.cart[productExist].quantity++;
      } else {
        const prodwithquant = { ...product, quantity: 1 };
        state.cart.push(prodwithquant);
      }
    },
  },
});

export default cartSlice.reducer;
export const { addCart } = cartSlice.actions;
