import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./services/authApi";
import authDialogReducer  from "./services/authDialogSlice";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    authDialog: authDialogReducer
  },
  middleware: (getDefault) => getDefault().concat(authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
