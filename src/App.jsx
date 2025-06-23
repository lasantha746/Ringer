import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./userPage/Home";
import Shop from "./userPage/Shop";
import ProductDetail from "./userPage/ProductDetail";
import Customize from "./userPage/Customize";
import Wishlist from "./userPage/Wishlist";
import Cart from "./userPage/Cart";
import CreateAccount from "./userPage/CreateAccount";
import LogIn from "./userPage/LogIn";
import Recovery from "./userPage/Recovery";
import NewPassword from "./userPage/NewPassword";
import SearchPage from "./userPage/SearchPage";
import ContactUS from "./userPage/ContactUS";
import About from "./userPage/About";
import Dashboard from "./userPage/Dashboard";

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
        <Route path="/searchPage" element={<SearchPage />} />
        <Route path="/contactUS" element={<ContactUS />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
