import React, { useRef, useEffect, useState } from "react";
import { Heart, MapPin, Phone, Mail, Diamond, Compass, Smile } from 'lucide-react';
import { FaHandHoldingDroplet } from "react-icons/fa6";
import { GoHeart } from "react-icons/go";
import { LuDraftingCompass } from "react-icons/lu";
import { RiPokerDiamondsLine } from "react-icons/ri";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

import Navbar from "../component/NavBar.jsx";
import Footer from "../component/Footer.jsx";
import ReviewSlider from "../component/ReviewSlider.jsx";
import ImageCarousel from "../component/ImageCarousel.jsx";
import CursorWaterEffect from "../component/CursorWaterEffect.jsx";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
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
                    {/* <img className="z-[-1] absolute h-full object-cover" src="/images/heroSRC/heroContact.png" alt="" style={{ opacity: 0.32 }} /> */}
                    <video
                        className="z-[-1] absolute h-full object-cover"
                        src="/images/heroSRC/heroContact.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        style={{ opacity: 0.9 }}
                    ></video>
                    
                     <div className="text-center" style={{ opacity: 1 }}>
                        <h2 className="font-playfair font-[600] text-[70px] sm:text-[80px] md:text-[90px] lg:text-[100px] leading-snug sm:leading-tight md:leading-[1.2] lg:leading-[1.3] mb-5">
                            About
                        </h2>
                        <span className="font-poppins font-[300] text-[20px] sm:text-[25px] md:text-[30px] lg:text-[35px] mt-2 sm:mt-4 mb-4">
                            Welcome to [Your Shop Name]
                        </span>
                    </div>
                </div>
            </div>

            {/* Slider 01 Section */}
            <div
                ref={slider1Ref}
                className="sticky top-0 bg-[#FAFAFA] min-h-screen rounded-t-[4rem] md:rounded-t-[8rem] shadow-[0_-8px_16px_rgba(0,0,0,0.1)]"
                style={{ top: slider1Top, minHeight: 'calc(100vh + 4rem)' }}
            >
                <div className="p-5 md:p-10 pt-10 md:pt-20">
                    <div className="text-center px-0 sm:px-0 md:px-[10%] flex flex-col items-center">
                        <h2 className="font-playfair font-[600] text-[24px] md:text-[36px] mb-2">
                            Crafting More Than Jewelry — We Craft Moments
                        </h2>
                        <p className="font-poppins font-[300] text-[16px] md:text-[20px] mt-2 sm:mt-4 mb-4 w-full md:w-[80%]">
                            At [Your Shop Name], we believe that every ring tells a story — a promise, a milestone, a memory. Founded with a passion for precision and beauty, our brand blends traditional craftsmanship with cutting-edge technology to create rings as unique as the people who wear them.
                        </p>
                    </div>

                    <img className="w-full object-cover rounded-[60px] md:rounded-[200px] mt-16 md:mt-20 mb-16 md:mb-20" src="/images/about.png" alt="" />

                    <div className="text-center px-0 sm:px-0 md:px-[10%] flex flex-col items-center">
                        <h2 className="font-playfair font-[600] text-[24px] md:text-[36px] mb-2">
                            Our Story
                        </h2>
                        <p className="font-poppins font-[300] text-[16px] md:text-[20px] mt-2 sm:mt-4 mb-4 w-full md:w-[80%]">
                            Born from a love for timeless design and meaningful details, our journey began in a small studio with a big dream: to empower customers to be part of the design process. What started as a local jeweler's vision has now grown into a global destination for customized, handcrafted rings.
                        </p>
                    </div>

                    <div className="mt-16 md:mt-20 mb-16 md:mb-20">
                        <ImageCarousel />
                    </div>

                    <div className="text-center px-0 sm:px-0 md:px-[10%] flex flex-col items-center">
                        <h2 className="font-playfair font-[600] text-[24px] md:text-[36px] mb-2">
                            What We Stand For
                        </h2>
                        <p className="font-poppins font-[300] text-[16px] md:text-[20px] mt-2 sm:mt-4 mb-4 w-full md:w-[80%]">
                            Born from a love for timeless design and meaningful details, our journey began in a small studio with a big dream: to empower customers to be part of the design process. What started as a local jeweler's vision has now grown into a global destination for customized, handcrafted rings.
                        </p>
                    </div>

                    <div className="mt-10 md:mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto py-10">

                        <div className="bg-white rounded-[20px] px-6 py-10 shadow-sm text-center">
                            <GoHeart size={55} color="black" className="mx-auto mb-5" />
                            <h3 className="font-poppins font-[600] text-[16px] md:text-[20px] mb-3">Authenticity</h3>
                            <p className="font-poppins font-[300] text-[14px] md:text-[16px]">Handcrafted by skilled artisans, every ring is made with care and precision.</p>
                        </div>

                        <div className="bg-white rounded-[20px] px-6 py-10 shadow-sm text-center">
                            <RiPokerDiamondsLine size={55} color="black" className="mx-auto mb-5" />
                            <h3 className="font-poppins font-[600] text-[16px] md:text-[20px] mb-3">Ethical Sourcing</h3>
                            <p className="font-poppins font-[300] text-[14px] md:text-[16px]">We use conflict-free gemstones and responsibly sourced metals — beauty with integrity.</p>
                        </div>

                        <div className="bg-white rounded-[20px] px-6 py-10 shadow-sm text-center">
                            <LuDraftingCompass size={55} color="black" className="mx-auto mb-5" />
                            <h3 className="font-poppins font-[600] text-[16px] md:text-[20px] mb-3">Personal Expression</h3>
                            <p className="font-poppins font-[300] text-[14px] md:text-[16px]">Customize your ring, your way. Choose every detail to reflect your unique story.</p>
                        </div>

                        <div className="bg-white rounded-[20px] px-6 py-10 shadow-sm text-center">
                            <FaHandHoldingDroplet size={55} color="black" className="mx-auto mb-5" />
                            <h3 className="font-poppins font-[600] text-[16px] md:text-[20px] mb-3">Exceptional Service</h3>
                            <p className="font-poppins font-[300] text-[14px] md:text-[16px]">Enjoy expert support, fast delivery, and lifetime care from start to forever.</p>
                        </div>

                    </div>

                    <div className="mb-20">
                        <ReviewSlider />
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

export default About;
