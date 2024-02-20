import { createSlice,PayloadAction } from "@reduxjs/toolkit";

type User={
    users:string[]
}

const initialState:User={
    users:[]
}

const UserSlice=createSlice({
    name:"users",
    initialState:initialState,
    reducers:{
        addUser:(state,action:PayloadAction<string>)=>{
            state.users.push(action.payload)
        },
        deleteUser:(state,action:PayloadAction<number>)=>{
            let index=action.payload;
            state.users.splice(index,1);
        },
        updateUser:(state,action:PayloadAction<{id:number,name:string}>)=>{
            let index=action.payload.id;
            let name=action.payload.name;
            state.users[index]=name;
        }
    }
})

export const{addUser,deleteUser,updateUser}=UserSlice.actions;
export default UserSlice.reducer;