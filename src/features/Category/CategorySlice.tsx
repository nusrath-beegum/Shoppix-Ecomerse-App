import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


interface CategoryState {
  categories: string[];
  products: any[];
  loading: boolean;
  error: string | null;
}

const initialState: CategoryState = {
  categories: [],
  products: [],
  loading: false,
  error: null,
};


export const fetchCategories = createAsyncThunk<string[]>(
  'categories/fetchCategories',
  async () => {
    const response = await axios.get('https://fakestoreapi.com/products/categories');
    return response.data;
  }
);


export const fetchProductsByCategory = createAsyncThunk<any[], string>(
  'categories/fetchProductsByCategory',
  async (category) => {
    const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
    return response.data;
  }
);


export const fetchAllProducts = createAsyncThunk<any[]>(
  'categories/fetchAllProducts',
  async () => {
    const response = await axios.get('https://fakestoreapi.com/products');
    return response.data;
  }
);

const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
   
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch categories';
      })
    
      .addCase(fetchProductsByCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProductsByCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch products';
      })
    
      .addCase(fetchAllProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch all products';
      });
  },
});

export default categorySlice.reducer;
export const selectCategories = (state: { categories: CategoryState }) =>
  state.categories.categories;
export const selectProducts = (state: { categories: CategoryState }) =>
  state.categories.products;
export const selectCategoriesLoading = (state: { categories: CategoryState }) =>
  state.categories.loading;
export const selectProductsLoading = (state: { categories: CategoryState }) =>
  state.categories.loading;
export const selectCategoriesError = (state: { categories: CategoryState }) =>
  state.categories.error;
