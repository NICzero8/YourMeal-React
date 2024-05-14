import { createSlice } from "@reduxjs/toolkit";

const calculateTotals = (items) => {
  const totals = items.reduce(
    (totals, item) => {
      totals.totalQuantity += item.quantity;
      totals.totalPrice += item.price * item.quantity;
      return totals;
    },
    { totalQuantity: 0, totalPrice: 0 }
  );

  totals.totalPrice > 599
    ? (totals.freeDelivery = true)
    : ((totals.freeDelivery = false) || (totals.totalPrice += 400));
  return totals;
};

const initialProducts = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const totals = calculateTotals(initialProducts);

const initialState = {
  productsInCart: initialProducts,
  totalPrice: totals.totalPrice,
  totalQuantity: totals.totalQuantity,
  freeDelivery: totals.freeDelivery,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let cartItem = state.productsInCart.find(
        (itemIncart) => itemIncart.id == action.payload.id
      );

      if (cartItem) {
        ++cartItem.quantity;
      } else {
        state.productsInCart.push(action.payload);
      }

      const totals = calculateTotals(state.productsInCart);
      state.totalPrice = totals.totalPrice;
      state.totalQuantity = totals.totalQuantity;
      state.freeDelivery = totals.freeDelivery;
    },

    removeFromCart: (state, action) => {
      let cartItem = state.productsInCart.find(
        (itemIncart) => itemIncart.id == action.payload.id
      );

      if (cartItem.quantity > 1) {
        --cartItem.quantity;
      } else {
        const newProductsInCart = state.productsInCart.filter((item) => {
          return item != cartItem;
        });
        state.productsInCart = newProductsInCart;
      }

      const totals = calculateTotals(state.productsInCart);
      state.totalPrice = totals.totalPrice;
      state.totalQuantity = totals.totalQuantity;
      state.freeDelivery = totals.freeDelivery;
    },

    clearCart: (state) => {
      state.productsInCart = [];
      state.totalPrice = 0;
      state.totalQuantity = 0;
      state.freeDelivery = false;
    },
  },
});

export const { addToCart, removeFromCart, clearCart} = cartSlice.actions;

export default cartSlice.reducer;
