import { createSlice,PayloadAction,createAsyncThunk } from "@reduxjs/toolkit";

type Product={
   id:number,
   price:number,
   image:string,
   title:string
}

type InitialState={
    products:Product[],
    cartDetails:Product[],
    status:boolean,
    error :string
    totalprice:number
}

const initialState:InitialState={
    products:[],
    cartDetails:[],
    status:false,
    error:'',
    totalprice:0
}

export const fetchProducts=createAsyncThunk("fetch/api",async()=>{
    try{
        let res=await fetch("https://fakestoreapi.com/products");
        let data=await res.json();
        return data;
    }catch(error:any){
        throw new error()
    }
})
const ProductsSlice=createSlice({
    name:"products",
    initialState:initialState,
    reducers:{
        addToCart:(state,action:PayloadAction<Product>)=>{
            state.cartDetails.push(action.payload);
            let priceArray=state.cartDetails.map(obj=>Math.round(obj.price));
            state.totalprice=priceArray.reduce((a,b)=>a+b);

        },
        removeFromCart:(state,action:PayloadAction<number>)=>{
           let index=state.cartDetails.findIndex(obj=>obj.id===action.payload);
           if(index>-1){
            state.cartDetails.splice(index,1);
             if(state.cartDetails.length===0){
                state.totalprice=0;
             }else{
                let priceArray=state.cartDetails.map(obj=>Math.round(obj.price));
            state.totalprice=priceArray.reduce((a,b)=>a+b);
             }
           }
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.pending,(state)=>{
            state.status=true;
        })
        builder.addCase(fetchProducts.fulfilled,(state,action:PayloadAction<Product[]>)=>{
            state.status=false;
            state.products=action.payload
        })
        builder.addCase(fetchProducts.rejected,(state,action)=>{
            state.status=false;
            state.products=[];
            state.error=action.error.message || "something went wrong"
        })
    }
})
export const{addToCart,removeFromCart}=ProductsSlice.actions;
export default ProductsSlice.reducer;