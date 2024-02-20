import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export interface counter{
    count:number,
}

const initialState:counter={
    count:0
}

const CounterSlice=createSlice({
    name:"counter",
    initialState:initialState,
    reducers:{
        increment:(state)=>{
            state.count+=1;
        },
        decrement:(state)=>{
            state.count-=1;
        },
        incrementByValue:(state,action:PayloadAction<number>)=>{
            state.count+=action.payload;
        },
        reset:(state)=>{
            state.count=0;
        }
    }
})

export const{increment,decrement,incrementByValue,reset}=CounterSlice.actions;
export default CounterSlice.reducer;