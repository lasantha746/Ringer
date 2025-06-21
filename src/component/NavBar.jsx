import React, { useState } from "react";
import { Heart, ShoppingCart, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav
      className="w-full px-4 py-4 bg-[#FAFAFA] fixed top-0 left-0 shadow-md alltop"
      style={{
        borderBottomLeftRadius: "2rem",
        borderBottomRightRadius: "2rem",
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
        zIndex: "9999",
      }}
    >
      <div className="z-[9999] mx-auto flex items-center justify-between flex-wrap">

        {/* Logo & Hamburger for Mobile */}
        <div className="w-full flex items-center justify-between lg:hidden">
          <img src="/images/logo.png" alt="Logo" className="h-10 w-10 object-contain" />
          <button onClick={toggleMenu}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex justify-between items-center w-full">
          {/* Left Links */}
          <div className="flex gap-2 flex-wrap">
            <Link onClick={(e) => { e.preventDefault(); window.location.href = "/"; }} className="px-5 py-2 rounded-full text-sm font-medium bg-[#E1E1E1] hover:bg-[#d4d4d4] font-inter font-normal text-base">Home</Link>
            <Link onClick={(e) => { e.preventDefault(); window.location.href = "/shop"; }} className="px-5 py-2 rounded-full text-sm font-medium bg-[#E1E1E1] hover:bg-[#d4d4d4] font-inter font-normal text-base">Shop</Link>
            <Link to="/about" onClick={() => window.scrollTo(0, 0)} className="px-5 py-2 rounded-full text-sm font-medium bg-[#E1E1E1] hover:bg-[#d4d4d4] font-inter font-normal text-base">About</Link>
          </div>

          {/* Center Icon */}
          <div className="mx-auto lg:mx-0 order-first lg:order-none">
            <img src="/images/logo.png" alt="Logo" className="h-10 w-10 object-contain" />
          </div>

          {/* Right Links & Icons */}
          <div className="flex gap-2 items-center flex-wrap">
            <Link onClick={(e) => { e.preventDefault(); window.location.href = "/search_Page"; }} className="px-5 py-2  rounded-full text-sm font-medium bg-[#E1E1E1] hover:bg-[#d4d4d4] font-inter font-normal text-base">Search</Link>
            <Link to="/createAccount" onClick={() => window.scrollTo(0, 0)} className="px-5 py-2 rounded-full text-sm font-medium bg-[#E1E1E1] hover:bg-[#d4d4d4] font-inter font-normal text-base">Account</Link>
            <Link onClick={(e) => { e.preventDefault(); window.location.href = "/wishlist"; }} className="p-2 rounded-full bg-[#E1E1E1] hover:bg-[#d4d4d4]">
              <Heart size={18} />
            </Link>
            <Link onClick={(e) => { e.preventDefault(); window.location.href = "/cart"; }} className="p-2 rounded-full bg-[#E1E1E1] hover:bg-[#d4d4d4]">
              <ShoppingCart size={18} />
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="w-full flex flex-col gap-3 mt-4 lg:hidden">
            <Link to="/" onClick={() => {
              toggleMenu();
              window.scrollTo(0, 0);
            }} className="px-5 py-2 rounded-full bg-[#E1E1E1] hover:bg-[#d4d4d4] text-base font-inter">Home</Link>
            <Link to="/shop" onClick={() => {
              toggleMenu();
              window.scrollTo(0, 0);
            }} className="px-5 py-2 rounded-full bg-[#E1E1E1] hover:bg-[#d4d4d4] text-base font-inter">Shop</Link>
            <Link to="/about" onClick={() => {
              toggleMenu();
              window.scrollTo(0, 0);
            }} className="px-5 py-2 rounded-full bg-[#E1E1E1] hover:bg-[#d4d4d4] text-base font-inter">About</Link>
            <Link to="/search" onClick={() => {
              toggleMenu();
              window.scrollTo(0, 0);
            }} className="px-5 py-2 rounded-full bg-[#E1E1E1] hover:bg-[#d4d4d4] text-base font-inter">Search</Link>
            <Link to="/account" onClick={() => {
              toggleMenu();
              window.scrollTo(0, 0);
            }} className="px-5 py-2 rounded-full bg-[#E1E1E1] hover:bg-[#d4d4d4] text-base font-inter">Account</Link>
            <div className="flex gap-3 justify-center">
              <Link to="/wishlist" onClick={() => window.scrollTo(0, 0)} className="p-3 rounded-full bg-[#E1E1E1] hover:bg-[#d4d4d4]">
                <Heart size={18} />
              </Link>
              <Link to="/cart" onClick={() => window.scrollTo(0, 0)} className="p-3 rounded-full bg-[#E1E1E1] hover:bg-[#d4d4d4]">
                <ShoppingCart size={18} />
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
