import { configureStore } from '@reduxjs/toolkit'
import loginReducer from "../features/Login/LoginSlice.tsx"
import productReducer from "../features/Products/productSlice.tsx"
import cartReducer from "../features/Cart/CartSlice.tsx"
import categoryReducer from "../features/Category/CategorySlice.tsx"
import wishlistReducer from '../features/Wishlist/wishlistSlice.tsx';


export const store = configureStore({
  reducer: {
    login: loginReducer,
    products: productReducer,
    cart: cartReducer,
    categories: categoryReducer,
    wishlist: wishlistReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;