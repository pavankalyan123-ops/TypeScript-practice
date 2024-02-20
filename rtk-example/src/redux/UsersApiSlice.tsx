import { createSlice,PayloadAction,createAsyncThunk } from "@reduxjs/toolkit";

type User={
    id:number,
    name:string,
    email:string
}
type InitialState={
    users:User[],
    status:boolean,
    error:string
    
    
}
const initialState:InitialState={
    users:[],
    status:false,
    error:''    
}

export const fetchApi=createAsyncThunk("fetch/api",async()=>{
    try{
        let res=await fetch("https://jsonplaceholder.typicode.com/users");
        let data=await res.json();
        return data;
    }
    catch(error:any){
        throw new error;
    }
})

const UsersApiSlice=createSlice({
    name:'users',
    initialState:initialState,
    reducers:{
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchApi.pending,(state)=>{
            state.status=true;
        })
        builder.addCase(fetchApi.fulfilled,(state,action:PayloadAction<User[]>)=>{
            state.status=false;
            state.users=action.payload
        })
        builder.addCase(fetchApi.rejected,(state,action)=>{
            state.status=false;
            state.users=[];
            state.error=action.error.message || 'something went wrong'
        })
    }
})

export default UsersApiSlice.reducer