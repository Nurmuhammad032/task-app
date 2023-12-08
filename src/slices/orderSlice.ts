import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

// This slice will be used to edit order. (get initial/default values)

interface IOrder {
  name: string;
  username: string;
  email: string;
  website: string;
}

interface IState {
  orderData: IOrder | null;
}

const initialState: IState = {
  orderData: null,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrderData: (state, action: PayloadAction<IOrder>) => {
      state.orderData = action.payload;
    },
    resetOrderData: (state) => {
      state.orderData = null;
    },
  },
});

export const { setOrderData, resetOrderData } = orderSlice.actions;
export const selectOrderData = (state: RootState) => state.order.orderData;

export default orderSlice.reducer;
