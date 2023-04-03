import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
  name: "basket",
  initialState: {
    money: 100000000000,
    basket: [],
    total: 100000000000,
  },
  reducers: {
    addToBasket: (state, action) => {
      const existingItem = state.basket.find((basketItem) => basketItem.id === action.payload.id);
      if (existingItem) {
        existingItem.count++;
      } else {
        state.basket = [...state.basket, { ...action.payload, count: 1 }];
      }
      state.total =
        state.money - state.basket.reduce((acc, item) => acc + item.price * item.count, 0);
    },
    deleteToBasket: (state, action) => {
      const existingItem = state.basket.find((basketItem) => basketItem.id === action.payload.id);
      if (existingItem) {
        if (existingItem.count === 1)
          state.basket = state.basket.filter((item) => item.id !== action.payload.id);
        else if (existingItem.count > 0) existingItem.count--;
      }
      state.total =
        state.money - state.basket.reduce((acc, item) => acc + item.price * item.count, 0);
    },
    countToBasket: (state, action) => {
      const existingItem = state.basket.find((basketItem) => basketItem.id === action.payload.id);
      if (existingItem) {
        if (action.payload.count <= 0)
          state.basket = state.basket.filter((item) => item.id !== action.payload.id);
        else if (existingItem.count > 0) existingItem.count = action.payload.count;
      } else {
        if (action.payload.count > 0)
          state.basket = [...state.basket, { ...action.payload, count: 1 }];
      }
      state.total =
        state.money - state.basket.reduce((acc, item) => acc + item.price * item.count, 0);
    },
  },
});

export const { addToBasket, deleteToBasket, countToBasket } = basketSlice.actions;

export default basketSlice.reducer;
