import React, { useRef, useEffect, useState } from "react";
import { Heart, MapPin, Phone, Mail } from 'lucide-react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

import Navbar from "../component/NavBar.jsx";
import Footer from "../component/Footer.jsx";
import CursorWaterEffect from "../component/CursorWaterEffect.jsx";

gsap.registerPlugin(ScrollTrigger);

const ContactUS = () => {
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
                            Contact
                        </h2>
                        <span className="font-poppins font-[300] text-[20px] sm:text-[25px] md:text-[30px] lg:text-[35px] mt-2 sm:mt-4 mb-4">
                            We’re here to help
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
                            Get in Touch
                        </h2>
                        <p className="font-poppins font-[300] text-[16px] md:text-[20px] mt-2 sm:mt-4 mb-4 w-full md:w-[80%]">
                            Whether you have questions, need assistance with a custom design, or just want to say hello.
                        </p>
                    </div>

                    <div className="px-0 md:px-4 py-16 bg-[#FAFAFA]">
                        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Left Contact Info Boxes */}
                            <div className="space-y-6 col-span-1">

                                <div className="bg-white rounded-[20px] px-6 py-10 shadow-sm text-center">
                                    <Mail size={55} color="black" className="mx-auto mb-5" />
                                    <h3 className="font-poppins font-[600] text-[16px] md:text-[20px] mb-3">Email Us</h3>
                                    <p className="font-poppins font-[300] text-[14px] md:text-[16px]">support@[yourdomain].com</p>
                                </div>

                                <div className="bg-white rounded-[20px] px-6 py-10 shadow-sm text-center">
                                    <Phone size={55} color="black" className="mx-auto mb-5" />
                                    <h3 className="font-poppins font-[600] text-[16px] md:text-[20px] mb-3">Call Us</h3>
                                    <p className="font-poppins font-[300] text-[14px] md:text-[16px]">+94 [Your Number]</p>
                                </div>

                                <div className="bg-white rounded-[20px] px-6 py-10 shadow-sm text-center">
                                    <MapPin size={55} color="black" className="mx-auto mb-5" />
                                    <h3 className="font-poppins font-[600] text-[16px] md:text-[20px] mb-3">Visit Us</h3>
                                    <p className="font-poppins font-[300] text-[14px] md:text-[16px]">[Your Store/Studio Address]</p>
                                </div>

                            </div>

                            {/* Right Contact Form */}
                            <div className="col-span-1 md:col-span-2 bg-white rounded-[20px] p-6 md:p-10">
                                <h2 className="text-[20px] md:text-[30px] font-playfair font-[600] mb-8 flex items-center">
                                    <img src="/images/iconContact.png" alt="" className="me-3" />  Have a message for us?
                                </h2>
                                <form className="space-y-5">
                                    <div>
                                        <label className="font-inter font-[500] text-[14px] md:text-[16px] text-[#525252]">Full Name</label>
                                        <input
                                            type="text"
                                            placeholder="Ex: David Max"
                                            className="w-full bg-[#FAFAFA] placeholder-[#C2C2C2] px-5 py-4 rounded-[20px] outline-none text-[14px] md:text-[16px] mt-2"
                                        />
                                    </div>
                                    <div>
                                        <label className="font-inter font-[500] text-[14px] md:text-[16px] text-[#525252]">Email</label>
                                        <input
                                            type="email"
                                            placeholder="Ex: sampleemail@gmail.com"
                                            className="w-full bg-[#FAFAFA] placeholder-[#C2C2C2] px-5 py-4 rounded-[20px] outline-none text-[14px] md:text-[16px] mt-2"
                                        />
                                    </div>
                                    <div>
                                        <label className="font-inter font-[500] text-[14px] md:text-[16px] text-[#525252]">Subject</label>
                                        <input
                                            type="text"
                                            placeholder="Ex: subject here"
                                            className="w-full bg-[#FAFAFA] placeholder-[#C2C2C2] px-5 py-4 rounded-[20px] outline-none text-[14px] md:text-[16px] mt-2"
                                        />
                                    </div>
                                    <div>
                                        <label className="font-inter font-[500] text-[14px] md:text-[16px] text-[#525252]">Message</label>
                                        <textarea
                                            rows="4"
                                            placeholder="Type anything..."
                                            className="w-full bg-[#FAFAFA] placeholder-[#C2C2C2] px-5 py-4 rounded-[20px] outline-none text-[14px] md:text-[16px] mt-2"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full bg-black text-white py-3 rounded-full hover:bg-opacity-90 transition font-inter font-[500] text-[14px] md:text-[16px]"
                                    >
                                        Send
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-5 pb-40">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126325.51655851418!2d80.32091034606522!3d8.33531321075318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afcf4f99360e159%3A0xc111fe9ebc6dcf0e!2sAnuradhapura!5e0!3m2!1sen!2slk!4v1750524797647!5m2!1sen!2slk" width="100%" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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

export default ContactUS;
