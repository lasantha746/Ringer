import React, { useRef, useEffect, useState } from "react";
import { Eye, EyeOff } from 'lucide-react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

import Navbar from "../component/NavBar.jsx";
import Footer from "../component/Footer.jsx";
import CursorWaterEffect from "../component/CursorWaterEffect.jsx";

gsap.registerPlugin(ScrollTrigger);

const NewPassword = () => {
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

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    return (
        <div className="relative w-full bg-[#FAFAFA]">

            {<Navbar />}

            {/* Sticky Image Viewer */}
            <div className="h-[100vh] relative sticky top-0 bg-[#FFFFFF]">
                <div className="sticky top-0 h-screen w-full flex justify-center items-center">
                    <img className="z-[-1] absolute h-full object-cover" src="/images/heroSRC/heroWishlist.png" alt="" style={{ opacity: 0.32 }} />
                    <div className="text-center" style={{ opacity: 1 }}>
                        <h2 className="font-playfair font-[600] text-[70px] sm:text-[80px] md:text-[90px] lg:text-[100px] leading-snug sm:leading-tight md:leading-[1.2] lg:leading-[1.3] mb-5">
                            Account
                        </h2>
                        <span className="font-poppins font-[300] text-[20px] sm:text-[25px] md:text-[30px] lg:text-[35px] mt-2 sm:mt-4 mb-4">
                            Manage your activities
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

                <div className="min-h-screen bg-[#FAFAFA] flex items-center justify-center px-4 pb-8 pt-8 md:pt-16 md:pb-16">
                    <div className="bg-white w-full md:w-[70%] rounded-[30px] p-5 md:p-10">
                        {/* Title */}
                        <h2 className="font-playfair font-[600] text-[25px] md:text-[30px] mb-6 flex items-center gap-2">
                            <img className="me-1" src="/images/loginicon.png" alt="" />
                            Create New Password
                        </h2>

                        {/* Form */}
                        <form className="space-y-4">

                            <div className="relative">
                                <label className="font-inter font-[500] text-[14px] text-[#525252] md:text-[16px] mb-2 block">New Password</label>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className="w-full p-3 px-5 md:p-4 md:px-7 rounded-[12px] md:rounded-[20px] bg-[#FAFAFA] placeholder-[#C2C2C2] focus:outline-none font-inter font-[500] text-[14px] text-[#525252] md:text-[16px]"
                                    placeholder="••••••••"
                                />
                                <span onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-10 md:top-[50px] cursor-pointer opacity-50">
                                    {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                                </span>
                            </div>

                            <div className="relative">
                                <label className="font-inter font-[500] text-[14px] text-[#525252] md:text-[16px] mb-2 block">Confirm Password</label>
                                <input
                                    type={showConfirm ? "text" : "password"}
                                    className="w-full p-3 px-5 md:p-4 md:px-7 rounded-[12px] md:rounded-[20px] bg-[#FAFAFA] placeholder-[#C2C2C2] focus:outline-none font-inter font-[500] text-[14px] text-[#525252] md:text-[16px]"
                                    placeholder="••••••••"
                                />
                                <span onClick={() => setShowConfirm(!showConfirm)} className="absolute right-4 top-10 md:top-[50px] cursor-pointer opacity-50">
                                    {showConfirm ? <Eye size={20} /> : <EyeOff size={20} />}
                                </span>
                            </div>

                            <div></div>
                            {/* Primary Button */}
                            <button
                                type="submit"
                                className="w-full bg-black text-white rounded-full py-3 hover:bg-opacity-90 transition font-inter font-[500] text-[14px] md:text-[16px]"
                            >
                                Change Password
                            </button>

                        </form>

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

export default NewPassword;
