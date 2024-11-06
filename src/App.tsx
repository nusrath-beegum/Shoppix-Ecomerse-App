// src/App.tsx
import React from "react";
import { Provider } from "react-redux"; // Import Provider
import { store } from "./store/Store.tsx"; // Import the Redux store
import Login from "./features/Login/Login.tsx"; // Your Login component
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // For routing
import Home from "./components/Home.tsx";
import Product from "./features/Products/product.tsx";
import ProductDetail from "./components/ProductDetail.tsx";
import Cart from "./features/Cart/Cart.tsx";
import Wishlist from "./features/Wishlist/Wishlist.tsx";
import AboutUs from "./components/AboutUS.tsx";
import ContactUs from "./components/ContactUs.tsx";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
