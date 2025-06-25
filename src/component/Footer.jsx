import React, { useState } from "react";
import { Link } from "react-router-dom";


const Footer = () => {

  return (

    <div className="text-center flex flex-col items-center gap-6 px-5">
      {/* Logo */}
      <img src="/images/logo.png" alt="Logo" className="h-10 w-10 object-contain" />

      {/* Nav Links */}
      <div className="mt-1 flex gap-6 text-sm font-medium text-gray-700">
        <Link onClick={(e) => { e.preventDefault(); window.location.href = "/dashboard"; }} className="font-[400] text-[16px] text-[#000000] font-inter transition-transform duration-300 hover:scale-110">Home</Link>
        <a href="#" className="font-[400] text-[16px] text-[#000000] font-inter transition-transform duration-300 hover:scale-110">Shop</a>
        <a href="#" className="font-[400] text-[16px] text-[#000000] font-inter transition-transform duration-300 hover:scale-110">About</a>
        <Link onClick={(e) => { e.preventDefault(); window.location.href = "/contactUS"; }} className="font-[400] text-[16px] text-[#000000] font-inter transition-transform duration-300 hover:scale-110">Contact</Link>
      </div>

      {/* Subscribe Form */}
      <div className="mt-1 flex w-full max-w-md rounded-full border border-[#E6E6E6] focus:outline-none">
        <input
          type="email"
          placeholder="Your email address"
          className="flex-1 px-4 py-3 rounded-l-full focus:outline-none font-poppins text-[12px] md:text-[16px] placeholder-gray-500 placeholder:font-normal"
        />
        <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 font-poppins font-semibold text-[12px] md:text-[16px]">
          Subscribe
        </button>
      </div>

      {/* Social Media Icons */}
      <div className="flex gap-2 mt-1">
        {/* Replace these with your preferred icons/components */}
        <a href="#" className="w-[40px] h-[40px] bg-black rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110"><i className="fab fa-facebook-f text-white text-[18px]" /></a>
        <a href="#" className="w-[40px] h-[40px] bg-black rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110"><i className="fab fa-youtube text-white text-[18px]" /></a>
        <a href="#" className="w-[40px] h-[40px] bg-black rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110"><i className="fab fa-twitter text-white text-[18px]" /></a>
        <a href="#" className="w-[40px] h-[40px] bg-black rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110"><i className="fab fa-pinterest-p text-white text-[18px]" /></a>
        <a href="#" className="w-[40px] h-[40px] bg-black rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110"><i className="fab fa-instagram text-white text-[18px]" /></a>
      </div>

      {/* Copyright */}
      <p className="font-poppins font-normal text-[14px] text-[#808080] mt-1 mb-5">
        The Ringer © 2025, All Rights Reserved. Developed By <a href="https://c-lento.com/"><span className="font-semibold text-black">C‑LENTO</span></a>
      </p>
    </div>
  );
};

export default Footer;
