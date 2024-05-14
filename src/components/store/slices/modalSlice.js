import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedProduct: {},
  modalActive: false,
  isDeliveryWindow: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
    showModal: (state) => {
      state.modalActive = true;
    },
    closeModal: (state) => {
      state.modalActive = false;
      state.isDeliveryWindow && (state.isDeliveryWindow = false);
    },
    showDeliveryWindow: (state) => {
      state.isDeliveryWindow = true;
    },
  },
});

export const { setSelectedProduct, showModal, closeModal, showDeliveryWindow } = modalSlice.actions;

export default modalSlice.reducer;
