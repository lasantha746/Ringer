import React, { useRef, useEffect, useState } from "react";
import { Heart, Star, StarHalf, ArrowLeft, ArrowRight, Search, X } from 'lucide-react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

import Navbar from "../component/NavBar.jsx";
import Footer from "../component/Footer.jsx";
import CursorWaterEffect from "../component/CursorWaterEffect.jsx";

gsap.registerPlugin(ScrollTrigger);

const Wishlist = () => {
    const slider1Ref = useRef(null);
    const slider2Ref = useRef(null);
    const [slider1Top, setSlider1Top] = useState("-4rem");
    const [slider2Top, setSlider2Top] = useState("-4rem");
    useEffect(() => {
        if (slider1Ref.current) {
            const windowHeight = window.innerHeight;
            const height = slider1Ref.current.offsetHeight - windowHeight;
            setSlider1Top(`-${height}px`);
        }
        if (slider2Ref.current) {
            const windowHeight = window.innerHeight;
            const height = slider2Ref.current.offsetHeight - windowHeight;
            setSlider2Top(`-${height}px`);
        }
    }, []);

    const wishlistItems = [
        {
            id: 1,
            name: 'Sample Ring Name',
            metal: 'Gold',
            size: '6',
            price: 400,
            image: '/images/product/p1.png'
        },
        {
            id: 2,
            name: 'Sample Ring Name',
            metal: 'Gold',
            size: '6',
            price: 40500,
            image: '/images/product/p1.png'
        },
        {
            id: 3,
            name: 'Sample Ring Name',
            metal: 'Gold',
            size: '6',
            price: 40500000,
            image: '/images/product/p1.png'
        }
    ];

    return (
        <div className="relative w-full bg-[#FAFAFA]">

            {<Navbar />}

            {/* Sticky Image Viewer */}
            <div className="h-[100vh] relative sticky top-0 bg-[#FFFFFF]">
                <div className="sticky top-0 h-screen w-full flex justify-center items-center">
                    {/* <img className="z-[-1] absolute h-full object-cover" src="/images/heroSRC/heroWishlist.png" alt="" style={{ opacity: 0.32 }} /> */}
                    <video
                        className="z-[-1] absolute h-full w-full object-cover"
                        src="/images/heroSRC/heroWishlistMain.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        style={{ opacity: 0.9 }}
                    ></video>

                    <div className="text-center" style={{ opacity: 1 }}>
                        <h2 className="font-playfair font-[600] text-[70px] sm:text-[80px] md:text-[90px] lg:text-[100px] leading-snug sm:leading-tight md:leading-[1.2] lg:leading-[1.3] mb-5">
                            Wishlist
                        </h2>
                        <span className="font-poppins font-[300] text-[20px] sm:text-[25px] md:text-[30px] lg:text-[35px] mt-2 sm:mt-4 mb-4">
                            Lorem ipsum dolor sit amet, consectetur
                        </span>
                    </div>
                </div>
            </div>

            {/* Slider 01 Section */}
            <div
                ref={slider1Ref}
                className="sticky top-0 bg-[#FAFAFA] min-h-screen p-5 md:p-10 pt-10 md:pt-20 rounded-t-[4rem] md:rounded-t-[8rem] shadow-[0_-8px_16px_rgba(0,0,0,0.1)]"
                style={{ top: slider1Top, minHeight: 'calc(100vh + 4rem)' }}
            >
                <div className="px-0 sm:px-0 md:px-[10px] mt-10 mb-12">
                    <h2 className="font-playfair font-[600] text-3xl sm:text-4xl md:text-[26px] lg:text-[36px] leading-snug sm:leading-tight md:leading-[1.2] lg:leading-[1.3] mb-5">
                        My Wishlist ({wishlistItems.length})
                    </h2>
                </div>

                <div className="space-y-3 pb-16">

                    <div
                        className="bg-white p-3 md:p-5 rounded-[20px] flex items-center justify-between"
                    >
                        {/* Left - Image and Info */}
                        <div className="font-inter font-[400] text-[12px] md:text-[14px] w-full">
                            Products
                        </div>

                        {/* Middle - Price */}
                        <div className="font-inter font-[400] text-[12px] md:text-[14px] text-center">
                            <div className="w-[120px] text-start">
                                Price
                            </div>
                        </div>

                        {/* Right - Add to Cart & Remove */}
                        <div className="font-inter font-[400] text-[12px] md:text-[14px] w-full">

                        </div>
                    </div>

                    {wishlistItems.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white p-3 md:p-5 rounded-[20px] flex flex-col sm:flex-row items-center justify-between gap-5"
                        >
                            {/* Left - Image and Info */}
                            <div className="flex items-center gap-4 w-full sm:w-auto">
                                <div className="w-[60px] h-[60px] rounded-[16px] bg-gray-300 flex-shrink-0 overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover border border-[#D9D9D9] rounded-[16px]"
                                    />
                                </div>
                                <div>
                                    <p className="font-inter font-[600] text-[16px] md:text-[18px]">{item.name}</p>
                                    <p className="font-inter font-[400] text-[12px] md:text-[14px] text-[#525252]">
                                        Metal: {item.metal} | Size: {item.size}
                                    </p>
                                </div>
                            </div>

                            {/* Middle - Price */}
                            <div className="font-inter font-[400] text-[12px] md:text-[14px] text-center w-full sm:w-auto">
                                <div className="w-[100px] text-start">
                                    Rs.{item.price.toLocaleString()}/=
                                </div>
                            </div>

                            {/* Right - Add to Cart & Remove */}
                            <div className="flex items-center gap-5 w-full sm:w-auto justify-end">
                                <button className="font-inter font-[500] text-[12px] md:text-[14px] bg-black text-white px-10 md:px-16 py-2 rounded-full">
                                    Add to Cart
                                </button>
                                <button className="bg-[#EEEEEE] p-2 rounded-full hover:bg-gray-300">
                                    <X size={18} className="text-[#818181] hover:text-[red] hover:font-bold" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            {/* Slider 02 Section (Footer) */}
            <div
                ref={slider2Ref}
                className="sticky top-0 bg-white p-5 md:p-10 pt-10 md:pt-20 rounded-t-[4rem] md:rounded-t-[8rem] shadow-[0_-8px_16px_rgba(0,0,0,0.1)]"
                style={{ top: slider2Top, minHeight: 'calc(4rem)' }}
            >
                <Footer />
            </div>


            <CursorWaterEffect />
        </div >
    );
};

export default Wishlist;
