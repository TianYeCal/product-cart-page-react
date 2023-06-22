import { createSlice } from "@reduxjs/toolkit";
import {
  product1,
  product2,
  product3,
  product4,
  product1Small,
  product2Small,
  product3Small,
  product4Small,
} from "../../images";
const initialState = {
  showCart: false,
  amount: 0,
  showCartItem: false,
  productImg: [product1, product2, product3, product4],
  productImgSmall: [product1Small, product2Small, product3Small, product4Small],
  index: 0,
  showLightBox: false,
  showModal: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increase: (state) => {
      state.amount = state.amount + 1;
    },
    decrease: (state) => {
      state.amount = state.amount - 1;
      if (state.amount < 0) state.amount = 0;
    },
    toggleCart: (state) => {
      state.showCart = !state.showCart;
    },
    showCartBtn: (state) => {
      if (state.amount === 0) return;
      state.showCartItem = true;
    },
    deleteCartItem: (state) => {
      state.showCartItem = false;
    },
    showLightBoxBtn: (state) => {
      state.showLightBox = true;
    },
    closeLightBoxBtn: (state) => {
      state.showLightBox = false;
    },
    nextMainPic: (state) => {
      state.index = state.index + 1;
      if (state.index > 3) state.index = 0;
    },
    lastMainPic: (state) => {
      state.index = state.index - 1;
      if (state.index < 0) state.index = 3;
    },
    openModal: (state) => {
      state.showModal = true;
    },
    closeModal: (state) => {
      state.showModal = false;
    },
    changeMainPic: (state, { payload }) => {
      state.index = payload;
    },
  },
});
export const {
  increase,
  decrease,
  toggleCart,
  showCartBtn,
  deleteCartItem,
  showLightBoxBtn,
  closeLightBoxBtn,
  nextMainPic,
  lastMainPic,
  openModal,
  closeModal,
  changeMainPic,
} = cartSlice.actions;
export default cartSlice.reducer;
