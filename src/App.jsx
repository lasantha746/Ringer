import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import Customize from "./pages/Customize";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import CreateAccount from "./pages/CreateAccount";
import LogIn from "./pages/LogIn";
import Recovery from "./pages/Recovery";
import NewPassword from "./pages/NewPassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/productDetail" element={<ProductDetail />} />
        <Route path="/customize" element={<Customize />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path="/logIn" element={<LogIn />} />
        <Route path="/recovery" element={<Recovery />} />
        <Route path="/newPassword" element={<NewPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
