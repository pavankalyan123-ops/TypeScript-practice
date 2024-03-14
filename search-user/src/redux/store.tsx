import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import InputSlice from "./InputSlice";

export const store = configureStore({
  reducer: {
    users: UserSlice,
    input: InputSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
