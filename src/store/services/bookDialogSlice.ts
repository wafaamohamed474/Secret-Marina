import { ServiceItem } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BookDialogState {
  activeDialog: "trip" | "activity" | "payment" | null;
  paymentData?: any;
}

const initialState: BookDialogState = {
  activeDialog: null,
  paymentData: undefined,
};

const bookDialogSlice = createSlice({
  name: "bookDialog",
  initialState,
  reducers: {
    openActivity: (state, action: PayloadAction<any>) => {
      state.activeDialog = "activity";
      state.paymentData = action.payload;  
    },
    openTrip: (state, action: PayloadAction<any>) => {
      state.activeDialog = "trip";
      state.paymentData = action.payload;  
    },
    openPayment: (state, action: PayloadAction<any>) => {
      state.activeDialog = "payment";
      state.paymentData = action.payload;
    },
    closeDialog: (state) => {
      state.activeDialog = null;
      state.paymentData = undefined;
    },
  },
});

export const { openActivity, openTrip, openPayment, closeDialog } =
  bookDialogSlice.actions;
export default bookDialogSlice.reducer;
