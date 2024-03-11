import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";

export const store = configureStore({
  reducer: {
    users: UserSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
