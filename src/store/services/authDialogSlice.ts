import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type AuthScreen = "login" | "register"  | "verify" ;

interface AuthDialogState {
  open: boolean;
  screen: AuthScreen;
  phone?: string;
}

const initialState: AuthDialogState = {
  open: false,
  screen: "login",
  phone: undefined,
};

export const authDialogSlice = createSlice({
  name: "authDialog",
  initialState,
  reducers: {
    openDialog: (
      state,
      action: PayloadAction<{ screen: AuthScreen; phone?: string }>
    ) => {
      state.open = true;
      state.screen = action.payload.screen;
      state.phone = action.payload.phone;
    },
    closeDialog: (state) => {
      state.open = false;
      state.phone = undefined;
    },
    goTo: (state, action: PayloadAction<AuthScreen>) => {
      state.screen = action.payload;
    },
  },
});

export const { openDialog, closeDialog, goTo } = authDialogSlice.actions;
export default authDialogSlice.reducer;
