import {configureStore} from '@reduxjs/toolkit';
import ProdcutsSlice from './ProdcutsSlice';

export const store=configureStore({
    reducer:{
        productDetails:ProdcutsSlice
    }
})

export type rootState=ReturnType<typeof store.getState>;
export type AppDispatch=typeof store.dispatch;