import React, { useRef, useEffect, useState } from "react";
import { User, Package, Truck, Settings, LogOut } from 'lucide-react';
import { FaRegUser } from "react-icons/fa";
import { BsArrowRepeat } from "react-icons/bs";
import { GrUserSettings } from "react-icons/gr";
import { LuLogOut } from "react-icons/lu";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

import Navbar from "../component/NavBar.jsx";
import Footer from "../component/Footer.jsx";
import DashCom from "../component/DashCom.jsx";
import OrdeCom from "../component/OrdeCom.jsx";
import AccoCom from "../component/AccoCom.jsx";
import TracCom from "../component/TracCom.jsx";
import CursorWaterEffect from "../component/CursorWaterEffect.jsx";

gsap.registerPlugin(ScrollTrigger);

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState('dashboard');

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
    }, [activeTab]);


    return (
        <div className="relative w-full bg-[#FAFAFA]">

            {<Navbar />}

            {/* Sticky Image Viewer */}
            <div className="h-[100vh] relative sticky top-0 bg-[#FFFFFF]">
                <div className="sticky top-0 h-screen w-full flex justify-center items-center">
                    {/* <img className="z-[-1] absolute h-full object-cover" src="/images/heroSRC/heroWishlist.png" alt="" style={{ opacity: 0.32 }} /> */}
                    <video
                        className="z-[-1] absolute h-full object-cover"
                        src="/images/heroSRC/heroWishlist.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        style={{ opacity: 0.9 }}
                    ></video>
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
                <div className="px-0 sm:px-0 md:px-[10px] mt-10 mb-6">
                    <h2 className="font-playfair font-[600] text-3xl sm:text-4xl md:text-[26px] lg:text-[36px] leading-snug sm:leading-tight md:leading-[1.2] lg:leading-[1.3] mb-5">
                        My Account
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 pb-16">
                    {/* Sidebar */}
                    <div className="bg-white rounded-[2rem] p-6 flex flex-col gap-3 shadow-md h-fit">
                        <button
                            onClick={() => setActiveTab('dashboard')}
                            className={`group flex items-center gap-3 rounded-full py-2 px-4 font-poppins font-[400] text-[14px] md:text-[16px] transition-all duration-200
                            ${activeTab === 'dashboard' ? 'bg-black text-white' : 'bg-[#FAFAFA] text-black hover:bg-gray-100'}`}
                        >
                            <FaRegUser className={`w-4 h-4 ${activeTab === 'dashboard' ? 'text-[#FFFFFF]' : 'text-[#666666]'}`} />
                            Dashboard
                        </button>
                        <button
                            onClick={() => setActiveTab('orders')}
                            className={`group flex items-center gap-3 rounded-full py-2 px-4 font-poppins font-[400] text-[14px] md:text-[16px] transition-all duration-200
                            ${activeTab === 'orders' ? 'bg-black text-white' : 'bg-[#FAFAFA] text-black hover:bg-gray-100'}`}
                        >
                            <BsArrowRepeat className={`w-5 h-5 ${activeTab === 'orders' ? 'text-[#FFFFFF]' : 'text-[#666666]'}`} />
                            Order History
                        </button>
                        <button
                            onClick={() => setActiveTab('account')}
                            className={`group flex items-center gap-3 rounded-full py-2 px-4 font-poppins font-[400] text-[14px] md:text-[16px] transition-all duration-200
                            ${activeTab === 'account' ? 'bg-black text-white' : 'bg-[#FAFAFA] text-black hover:bg-gray-100'}`}
                        >
                            <GrUserSettings className={`w-4 h-4 ${activeTab === 'account' ? 'text-[#FFFFFF]' : 'text-[#666666]'}`} />
                            Account Management
                        </button>
                        <button className="group flex items-center gap-3 text-black bg-[#FAFAFA] rounded-full py-2 px-4 font-poppins font-[400] text-[14px] md:text-[16px] hover:bg-gray-100 transition-all duration-200">
                            <LuLogOut className="w-5 h-5 text-[#666666] rotate-180" />
                            Logout
                        </button>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-3">

                        {activeTab === 'dashboard' && <DashCom setActiveTab={setActiveTab} />}
                        {activeTab === 'orders' && <OrdeCom setActiveTab={setActiveTab} />}
                        {activeTab === 'account' && <AccoCom />}
                        {activeTab === 'track' && <TracCom />}

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

export default Dashboard;
