
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store/Store.tsx';

interface WishlistItem {
  id: number;
  title: string;
  image: string;
}


interface WishlistState {
  wishlist: any;
  items: WishlistItem[];
}

const initialState: WishlistState = {
  items: [],
  wishlist: undefined
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist(state, action: PayloadAction<WishlistItem>) {
      const itemExists = state.items.some(item => item.id === action.payload.id);
      if (!itemExists) {
        state.items.push(action.payload);
      }
    },
    removeFromWishlist(state, action: PayloadAction<number>) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export const selectWishlistItems = (state: RootState) => state.wishlist.items;

export default wishlistSlice.reducer;
