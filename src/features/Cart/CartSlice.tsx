import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';


interface CartItem {
  id: number;
  productId: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
}


interface CartState {
  cartItems: CartItem[];
  loading: boolean;
  error: string | null;
}

const initialState: CartState = {
  cartItems: [], 
  loading: false,
  error: null,
};


export const addCartItem = createAsyncThunk<CartItem, number>(
  'cart/addCartItem',
  async (productId) => {
    const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
    return {
      ...response.data,
      productId: response.data.id, 
      quantity: 1,
    };
  }
);


export const deleteCartItem = createAsyncThunk<void, number>(
  'cart/deleteCartItem',
  async (id) => {
    await axios.delete(`https://fakestoreapi.com/carts/${id}`);
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.cartItems.find(item => item.productId === action.payload.productId);

      if (existingItem) {
     
        existingItem.quantity += 1;
      } else {
       
        state.cartItems.push(action.payload);
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {

      state.cartItems = state.cartItems.filter(item => item.productId !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addCartItem.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addCartItem.fulfilled, (state, action) => {
        state.loading = false;

      
        const existingItem = state.cartItems.find(item => item.productId === action.payload.productId);

        if (existingItem) {
        
          existingItem.quantity += 1;
        } else {
        
          state.cartItems.push(action.payload);
        }
      })
      .addCase(addCartItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to add product to cart';
      })
      .addCase(deleteCartItem.fulfilled, (state, action) => {
        state.cartItems = state.cartItems.filter(
          (item) => item.productId !== action.meta.arg
        );
      });
  },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart } = cartSlice.actions;

export const selectCartItems = (state: { cart: CartState }) => state.cart.cartItems;
export const selectLoading = (state: { cart: CartState }) => state.cart.loading;
export const selectError = (state: { cart: CartState }) => state.cart.error;
