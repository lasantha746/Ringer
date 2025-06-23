import React, { useRef, useEffect, useState } from "react";
import { Heart, Star, StarHalf, ArrowLeft, ArrowRight, Search, X } from 'lucide-react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

import Navbar from "../component/NavBar.jsx";
import Footer from "../component/Footer.jsx";
import CursorWaterEffect from "../component/CursorWaterEffect.jsx";

gsap.registerPlugin(ScrollTrigger);

const SearchPage = () => {
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

    return (
        <div className="relative w-full bg-[#FAFAFA]">

            {<Navbar />}

            {/* Sticky Image Viewer */}
            <div className="h-[100vh] relative sticky top-0 bg-[#FFFFFF]">
                <div className="sticky top-0 h-screen w-full flex justify-center items-center">
                    <img className="z-[-1] absolute h-full object-cover" src="/images/heroSRC/heroWishlist.png" alt="" style={{ opacity: 0.32 }} />
                    <div className="text-center" style={{ opacity: 1 }}>
                        <h2 className="font-playfair font-[600] text-[70px] sm:text-[80px] md:text-[90px] lg:text-[100px] leading-snug sm:leading-tight md:leading-[1.2] lg:leading-[1.3] mb-5">
                            Search
                        </h2>
                        {/* Search Input */}
                        <div className="flex justify-center mt-4 w-[100%] md:w-[600px]">
                            <div className="relative w-full max-w-xl">
                                <input
                                    type="text"
                                    placeholder="Type Your Keywords..."
                                    className="font-inter bg-[#FAFAFA] w-full pl-6 pr-12 py-4 rounded-full shadow-md text-black-400 placeholder-black text-[14px] md:text-[16px] focus:outline-none"
                                />
                                <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-black-500 hover:text-black">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
                                    </svg>
                                </button>
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
                <div className="px-0 sm:px-0 md:px-[10px] mt-10 mb-6">
                    <h2 className="px-0 md:px-16 font-poppins text-[#000000] font-[400] text-[14px] md:text-[16px] flex items-center">
                        <span className="me-2 text-[#ED9E53] font-poppins font-[600] text-[14px] md:text-[16px]">02</span> results found.
                    </h2>
                </div>

                <div className="space-y-3 pb-16 px-0 md:px-16">

                    <div className="bg-white p-5 md:p-5 rounded-[20px]">
                        <div className="font-poppins font-[500] text-[20px] md:text-[24px] w-full mb-5">
                            Lorem ipsum dolor sit amet, consectetur
                        </div>
                        <div className="font-poppins font-[300] text-[12px] md:text-[16px] w-full mb-5">
                           Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                        </div>
                        <div className="font-inter font-[400] text-[12px] md:text-[16px] w-full text-[#FA8232] flex items-center">
                            Navigate to the page <ArrowRight size={20} className="ms-2"/> 
                        </div>
                    </div>

                    <div className="bg-white p-5 md:p-5 rounded-[20px]">
                        <div className="font-poppins font-[500] text-[20px] md:text-[24px] w-full mb-5">
                            Lorem ipsum dolor sit amet, consectetur
                        </div>
                        <div className="font-poppins font-[300] text-[12px] md:text-[16px] w-full mb-5">
                           Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                        </div>
                        <div className="font-inter font-[400] text-[12px] md:text-[16px] w-full text-[#FA8232] flex items-center">
                            Navigate to the page <ArrowRight size={20} className="ms-2"/> 
                        </div>
                    </div>

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

export default SearchPage;
