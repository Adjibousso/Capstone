import {createSlice, createAsyncThunk} from   "@reduxjs/toolkit";
 import axios from "axios";

export const fetchProducts = createAsyncThunk("products/fetchProducts", async ()=> {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data 
})
const initialState = {
    products :[],
}
 const productSlice = createSlice({
    name : "products",
    initialState,
    reducers:{
        setProducts(state,action) {
            state.products= action.payload
        }
    }


 })

  export const { setProducts } = productSlice.actions;
 export default productSlice.reducer