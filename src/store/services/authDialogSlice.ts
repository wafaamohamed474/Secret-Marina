import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type AuthScreen = "login" | "register" | "forgot" | "verify" | "reset";

interface AuthDialogState {
  open: boolean;
  screen: AuthScreen;
}

const initialState: AuthDialogState = {
  open: false,
  screen: "login",
};

export const authDialogSlice = createSlice({
  name: "authDialog",
  initialState,
  reducers: {
    openDialog: (state, action: PayloadAction<AuthScreen>) => {
      (state.open = true), (state.screen = action.payload);
    },
    closeDialog: (state) => {
      state.open = false;
    },
    goTo: (state, action: PayloadAction<AuthScreen>) => {
      state.screen = action.payload;
    },
  },
});

export const { openDialog, closeDialog, goTo } = authDialogSlice.actions;
export default authDialogSlice.reducer;
