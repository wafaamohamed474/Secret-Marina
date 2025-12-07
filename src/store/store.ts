import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./services/authApi";
import authDialogReducer  from "./services/authDialogSlice";
import bookDialogReducer from "./services/bookDialogSlice"


export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    authDialog: authDialogReducer,
    bookDialog : bookDialogReducer
  },
  middleware: (getDefault) => getDefault().concat(authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
