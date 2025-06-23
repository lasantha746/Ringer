import React, { useRef, useEffect, useState } from "react";
import { Heart, Star, StarHalf, ArrowLeft, ArrowRight, Plus, Minus } from 'lucide-react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";

import Navbar from "../component/NavBar.jsx";
import Footer from "../component/Footer.jsx";
import ReviewSlider from "../component/ReviewSlider.jsx";
import CursorWaterEffect from "../component/CursorWaterEffect.jsx";

gsap.registerPlugin(ScrollTrigger);

const ProductDetail = () => {
    const slider0Ref = useRef(null);
    const slider1Ref = useRef(null);
    const slider2Ref = useRef(null);
    const [slider0Top, setSlider0Top] = useState("-4rem");
    const [slider1Top, setSlider1Top] = useState("-4rem");
    const [slider2Top, setSlider2Top] = useState("-4rem");
    useEffect(() => {
        if (slider0Ref.current) {
            const windowHeight = window.innerHeight;
            const height = slider0Ref.current.offsetHeight - windowHeight;
            setSlider0Top(`-${height}px`);
        }
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
    const navigate = useNavigate();

    const [quantity, setQuantity] = useState(1);

    const increment = () => setQuantity(quantity + 1);
    const decrement = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };
    return (
        <div className="relative w-full bg-[#FAFAFA]">

            {<Navbar />}

            {/* Sticky Image Viewer */}
            <div
                ref={slider0Ref}
                className="sticky top-0 bg-[#FFFFFF] min-h-screen pt-16 pb-32"
                style={{ top: slider0Top, minHeight: 'calc(100vh + 4rem)' }}
            >
                <div className="flex flex-col lg:flex-row">

                    {/* Left Section (Image & Controls) */}

                    <div className="w-full lg:w-1/2 flex flex-col items-center p-6 md:p-10 pt-3 md:pt-8 mb-5 " >
                        <div className="flex justify-start w-full pb-3 md:pb-2">
                            <ArrowLeft size={24} className="cursor-pointer" onClick={() => navigate(-1)} />
                        </div>

                        <div className="flex justify-start w-full">
                            <button className="mb-4 bg-black text-white px-5 py-2 rounded-full text-[12px] md:text-[14px] font-inter font-[400]">
                                Customise
                            </button>
                        </div>
                        <img
                            src="/images/product/p1.png"
                            alt="Ring"
                            className="max-w-[300px] w-full"
                        />
                        <div className="flex gap-2 mt-2">
                            <button className="w-[80px] h-[80px] text-[10px] md:text-[12px] font-inter font-[400] bg-[#FAFAFA] px-5 py-2 rounded-[12px] flex items-center flex-col">
                                <img className="mb-1" src="/images/font.png" alt="" />
                                Front
                            </button>
                            <button className="w-[80px] h-[80px] text-[10px] md:text-[12px] font-inter font-[400] bg-[#FAFAFA] px-5 py-2 rounded-[12px] flex items-center flex-col">
                                <img className="mb-1" src="/images/left.png" alt="" />
                                Side
                            </button>
                            <button className="w-[80px] h-[80px] text-[10px] md:text-[12px] font-inter font-[400] bg-[#FAFAFA] px-5 py-2 rounded-[12px] flex items-center flex-col">
                                <img className="mb-1" src="/images/top.png" alt="" />
                                Top
                            </button>
                        </div>
                    </div>

                    {/* Right Section (Details) */}
                    <div className="w-full lg:w-1/2 p-6 md:p-10 mb-5" >
                        <div className="w-full bg-[#FAFAFA] rounded-[20px] p-6">
                            <h1 className="text-[20px] md:text-[30px] font-[600] font-playfair mb-4">Sample Ring Name</h1>
                            <div className="mt-3 flex items-center space-x-1 text-xs mb-3">
                                <div className="flex">
                                    <Star className="w-4 h-4 me-1" fill="#ED9E53" stroke="none" />
                                    <Star className="w-4 h-4 me-1" fill="#ED9E53" stroke="none" />
                                    <Star className="w-4 h-4 me-1" fill="#ED9E53" stroke="none" />
                                    <Star className="w-4 h-4 me-1" fill="#ED9E53" stroke="none" />
                                    <Star className="w-4 h-4 me-1" fill="#D9D9D9" stroke="none" />
                                </div>

                                <span className="ms-2 text-[10px] md:text-[14px] font-[400] font-inter">(4.8 of 5)</span>
                            </div>
                            <p className="text-[#ED9E53] text-[16px] md:text-[22px] font-[600] font-inter mb-4">Rs:40,500/=</p>
                            <p className="text-[10px] md:text-[14px] font-[300] font-poppins leading-relaxed mb-16">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                            </p>

                            <div className="">
                                <div className="flex justify-between border-b border-gray-300 pb-7 mb-7">
                                    <span className="text-[14px] md:text-[16px] font-[500] font-inter flex items-center">
                                        <img className="me-2" src="/images/metal.png" alt="" />
                                        Metal Type
                                    </span>
                                    <span className="text-[14px] md:text-[16px] font-[400] font-inter">Silver</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300 pb-7 mb-7">
                                    <span className="text-[14px] md:text-[16px] font-[500] font-inter flex items-center">
                                        <img className="me-2" src="/images/gender.png" alt="" />
                                        Gender
                                    </span>
                                    <span className="text-[14px] md:text-[16px] font-[400] font-inter">Female</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300 pb-7 mb-7">
                                    <span className="text-[14px] md:text-[16px] font-[500] font-inter flex items-center">
                                        <img className="me-2" src="/images/cuting.png" alt="" />
                                        Cut & Shape
                                    </span>
                                    <span className="text-[14px] md:text-[16px] font-[400] font-inter">Brilliant</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300 pb-7 mb-7">
                                    <span className="text-[14px] md:text-[16px] font-[500] font-inter font-inter flex items-center">
                                        <img className="me-2" src="/images/stone.png" alt="" />
                                        Stone
                                    </span>
                                    <span className="text-[14px] md:text-[16px] font-[400] font-inter">Sapphire</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300 pb-7 mb-7">
                                    <span className="text-[14px] md:text-[16px] font-[500] font-inter flex items-center">
                                        <img className="me-2" src="/images/weight.png" alt="" />
                                        Weight
                                    </span>
                                    <span className="text-[14px] md:text-[16px] font-[400] font-inter">Lightweight (2–4 grams)</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300 pb-7 mb-7">
                                    <span className="text-[14px] md:text-[16px] font-[500] font-inter flex items-center">
                                        <img className="me-2" src="/images/iconSize.png" alt="" />
                                        Ring Size
                                    </span>
                                    <span className="text-[14px] md:text-[16px] font-[400] font-inter">US Size 6 (51.9 mm)</span>
                                </div>
                            </div>

                            {/* Cart Actions */}
                            <div className="flex items-center flex-col sm:flex-row mt-8 gap-3 bg-[#FFFFFF] p-4 rounded-[20px]">
                                <div className="flex items-center border rounded-full px-2 py-1.5">
                                    <button
                                        onClick={decrement}
                                        className="text-lg font-bold flex items-center rounded-full bg-[#EEEEEE] w-7 h-7 justify-center"
                                        aria-label="Decrease quantity"
                                    >
                                        <Minus size={14} />
                                    </button>
                                    <span className="px-2 text-[14px] md:text-[16px] font-[400] font-inter text-[#525252] w-10 text-center">
                                        {quantity}
                                    </span>
                                    <button
                                        onClick={increment}
                                        className="text-lg font-bold flex items-center rounded-full bg-[#EEEEEE] w-7 h-7 justify-center"
                                        aria-label="Increase quantity"
                                    >
                                        <Plus size={14} />
                                    </button>
                                </div>
                                <button className="w-full sm:w-auto flex-1 bg-black text-white px-6 py-2 rounded-full text-[14px] md:text-[16px] font-[400] font-inter">
                                    Add to Cart
                                </button>
                                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#EEEEEE] border-[2px] border-[#EEEEEE] focus:outline-none hover:border-[red]">
                                    <Heart size={22} className="hover:fill-[red] hover:stroke-[red]" fill="#EEEEEE" />  {/* stroke="none"  */}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Slider 01 Section */}
            <div
                ref={slider1Ref}
                className="sticky top-0 bg-[#FAFAFA] min-h-screen p-5 md:p-10 pt-10 md:pt-20 rounded-t-[4rem] md:rounded-t-[8rem] shadow-[0_-8px_16px_rgba(0,0,0,0.1)]"
                style={{ top: slider1Top, minHeight: 'calc(100vh + 4rem)' }}
            >
                <div className="text-center px-0 sm:px-0 md:px-[10%]">
                    <p className="font-inter font-normal text-lg sm:text-xl md:text-[20px] mb-7 sm:mb-4 bg-[#FFFFFF] rounded-[60px] px-6 py-2 inline-block">
                        Reviews
                    </p>
                    <h2 className="font-playfair font-semibold text-3xl sm:text-4xl md:text-[56px] lg:text-[72px] leading-snug sm:leading-tight md:leading-[1.2] lg:leading-[1.3] mb-5">
                        Customers Also Bought
                    </h2>
                    <p className="font-poppins font-light text-base sm:text-lg md:text-xl mt-2 sm:mt-4 mb-4">
                        Discover rings and accessories handpicked to complement your choice. From timeless styles to trending designs, complete your look with pieces our customers adore.
                    </p>
                </div>

                <div className="mb-20">

                    <ReviewSlider />

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

export default ProductDetail;
