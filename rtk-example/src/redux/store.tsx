import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./CounterSlice";
import UserSlice from "./UserSlic";
import UsersApiSlice from "./UsersApiSlice";

export const store=configureStore({
    reducer:{
        counter:CounterSlice,
        user:UserSlice,
        user1:UsersApiSlice
    }
})

export type rootReducer=ReturnType<typeof store.getState>;
export type AppDispatch=typeof store.dispatch;