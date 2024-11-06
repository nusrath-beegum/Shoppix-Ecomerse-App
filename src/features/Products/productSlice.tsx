import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export interface Product {
  rating: undefined;
  id: number;
  title: string;
  price: number;
  image: string;
  description?: string; 
}


interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
}


const initialState: ProductState = {
  products: [],
  loading: false,
  error: null,
};


export const fetchProducts = createAsyncThunk<Product[]>(
  "products/fetchProducts",
  async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data; 
  }
);


const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      });
  },
});


export default productSlice.reducer;


export const selectProducts = (state: { products: ProductState }) =>
  state.products.products;
export const selectLoading = (state: { products: ProductState }) =>
  state.products.loading;
export const selectError = (state: { products: ProductState }) =>
  state.products.error;
