import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Play, Pause } from 'lucide-react';

import Navbar from "../component/NavBar.jsx";
import ProductSlider from "../component/ProductSlider.jsx";
import Customisations from "../component/Customisations.jsx";
import CursorWaterEffect from "../component/CursorWaterEffect.jsx";

const TOTAL_FRAMES = 300;
const START_SHOW_NAVBAR_AT = 180;

const Home = () => {
    const canvasRef = useRef(null);
    const [images, setImages] = useState([]);
    const [showNavbar, setShowNavbar] = useState(false);


    const slider1Ref = useRef(null);
    const slider2Ref = useRef(null);
    const slider3Ref = useRef(null);
    const slider4Ref = useRef(null);
    const slider5Ref = useRef(null);
    const [slider1Top, setSlider1Top] = useState("-4rem");
    const [slider2Top, setSlider2Top] = useState("-4rem");
    const [slider3Top, setSlider3Top] = useState("-4rem");
    const [slider4Top, setSlider4Top] = useState("-4rem");
    const [slider5Top, setSlider5Top] = useState("-4rem");
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
        if (slider3Ref.current) {
            const windowHeight = window.innerHeight;
            const height = slider3Ref.current.offsetHeight - windowHeight;
            setSlider3Top(`-${height}px`);
        }
        if (slider4Ref.current) {
            const windowHeight = window.innerHeight;
            const height = slider4Ref.current.offsetHeight - windowHeight;
            setSlider4Top(`-${height}px`);
        }
        if (slider5Ref.current) {
            const windowHeight = window.innerHeight;
            const height = slider5Ref.current.offsetHeight - windowHeight;
            setSlider5Top(`-${height}px`);
        }
    }, []);

    //video play button
    const videoRef = useRef(null);
    const timeoutRef = useRef(null);  // to store timeout ID
    const [isPlaying, setIsPlaying] = useState(false);
    const [showIcon, setShowIcon] = useState(true);


    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const handlePause = () => {
            setIsPlaying(false);
            setShowIcon(true);
            clearTimeout(timeoutRef.current);
        };

        const handleEnded = () => {
            setIsPlaying(false);
            setShowIcon(true);
            clearTimeout(timeoutRef.current);
            video.pause();
        };

        video.addEventListener("pause", handlePause);
        video.addEventListener("ended", handleEnded);

        return () => {
            video.removeEventListener("pause", handlePause);
            video.removeEventListener("ended", handleEnded);
            clearTimeout(timeoutRef.current);
        };
    }, []);

    // Toggle play/pause on video or icon click
    const togglePlay = () => {
        const video = videoRef.current;
        if (!video) return;

        if (video.paused) {
            video.play();
            setIsPlaying(true);
            setShowIcon(true);
            clearTimeout(timeoutRef.current);  // clear old timeout if any
            timeoutRef.current = setTimeout(() => {
                setShowIcon(false);
            }, 1000);
        } else {
            video.pause();
            setIsPlaying(false);
            setShowIcon(true);
            clearTimeout(timeoutRef.current);
        }
    };

    // Load all images into memory
    useEffect(() => {
        const loadImages = async () => {
            const loadedImages = [];
            for (let i = 1; i <= TOTAL_FRAMES; i++) {
                const img = new Image();
                img.src = `/images/hero/img_${String(i).padStart(3, "0")}.jpg`;
                await new Promise((res) => {
                    img.onload = res;
                    img.onerror = res;
                });
                loadedImages.push(img);
            }
            setImages(loadedImages);
        };
        loadImages();
    }, []);

    // Draw first frame when images are loaded
    useEffect(() => {
        if (images.length === TOTAL_FRAMES) {
            const canvas = canvasRef.current;
            const context = canvas.getContext("2d");
            context.drawImage(images[0], 0, 0, canvas.width, canvas.height);
        }
    }, [images]);

    // Handle scroll and draw the correct frame
    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        const handleScroll = () => {
            if (!images.length) return;

            const scrollY = window.scrollY;
            const maxScroll = window.innerHeight * 3; // 300vh
            const progress = Math.min(1, scrollY / maxScroll);
            const currentFrame = Math.floor(progress * (TOTAL_FRAMES - 1));
            const image = images[currentFrame];

            if (image?.complete && image.naturalWidth !== 0) {
                context.clearRect(0, 0, canvas.width, canvas.height);
                context.drawImage(image, 0, 0, canvas.width, canvas.height);
                setShowNavbar(currentFrame >= START_SHOW_NAVBAR_AT);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [images]);

    // Resize canvas to match window
    useEffect(() => {
        const resizeCanvas = () => {
            const canvas = canvasRef.current;
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);
        return () => window.removeEventListener("resize", resizeCanvas);
    }, []);

    return (
        <div className="relative w-full bg-[#FAFAFA]">

            {showNavbar && <Navbar />}

            {/* Sticky Image Viewer */}
            <div className="h-[300vh] relative sticky top-0">
                <div className="sticky top-0 h-screen w-full">

                    <canvas
                        ref={canvasRef}
                        className="w-full h-full"
                        style={{ display: "block", objectFit: "cover" }}
                    />

                    {/* Scroll Down Icon */}
                    {showNavbar && (
                        <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 z-50 cursor-pointer text-center flex flex-col items-center justify-center animate-bounce">
                            <h4 className="text-sm mb-1 text-white font-inter font-normal text-base">Scroll</h4>
                            <img
                                src="/images/scrollicon.png"
                                alt="Scroll Down"
                                className="w-6 h-6 object-contain"
                                draggable="false"
                            />
                        </div>
                    )}

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
                        Products
                    </p>
                    <h2 className="font-playfair font-semibold text-3xl sm:text-4xl md:text-[56px] lg:text-[72px] leading-snug sm:leading-tight md:leading-[1.2] lg:leading-[1.3] mb-5">
                        Crafted for the Moment You’ll Never Forget
                    </h2>
                    <p className="font-poppins font-light text-base sm:text-lg md:text-xl mt-2 sm:mt-4 mb-4">
                        Our rings are designed with precision, love, and intention. Whether it’s a proposal, anniversary, or personal milestone—your story deserves brilliance.
                    </p>
                </div>
                <div className="mb-20">
                    <ProductSlider />
                </div>
            </div>

            {/* Slider 02 Section */}
            <div
                ref={slider2Ref}
                className="sticky top-0 bg-[#FFFFFF] min-h-screen p-5 md:p-10 pt-10 md:pt-20 rounded-t-[4rem] md:rounded-t-[8rem] shadow-[0_-8px_16px_rgba(0,0,0,0.1)]"
                style={{ top: slider2Top, minHeight: 'calc(100vh + 4rem)' }}
            >
                <div className="text-center px-0 sm:px-0 md:px-[10%]">
                    <p className="font-inter font-normal text-lg sm:text-xl md:text-[20px] mb-7 sm:mb-4 bg-[#FAFAFA] rounded-[60px] px-6 py-2 inline-block">
                        Testimonials
                    </p>

                    <h2 className="font-playfair font-semibold text-3xl sm:text-4xl md:text-[56px] lg:text-[72px] leading-snug sm:leading-tight md:leading-[1.2] lg:leading-[1.3] mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing sed do
                    </h2>


                    <p className="font-poppins font-light text-base sm:text-lg md:text-xl mt-2 sm:mt-4 mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                    </p>
                </div>

            </div>

            {/* Slider 03 Section */}
            <div
                ref={slider3Ref}
                className="sticky top-0 bg-[#FAFAFA] min-h-screen p-5 md:p-10 pt-10 md:pt-20 rounded-t-[4rem] md:rounded-t-[8rem] shadow-[0_-8px_16px_rgba(0,0,0,0.1)]"
                style={{ top: slider3Top, minHeight: 'calc(100vh + 4rem)' }}
            >
                <div className="text-center px-0 sm:px-0 md:px-[10%]">
                    <p className="font-inter font-normal text-lg sm:text-xl md:text-[20px] mb-7 sm:mb-4 bg-[#FFFFFF] rounded-[60px] px-6 py-2 inline-block">
                        How it Works
                    </p>

                    <h2 className="font-playfair font-semibold text-3xl sm:text-4xl md:text-[56px] lg:text-[72px] leading-snug sm:leading-tight md:leading-[1.2] lg:leading-[1.3] mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing sed do
                    </h2>



                </div>

            </div>

            {/* Slider 04 Section */}
            <div
                ref={slider4Ref}
                className="sticky top-0 bg-[#FFFFFF] min-h-screen p-5 md:p-10 pt-10 md:pt-20 rounded-t-[4rem] md:rounded-t-[8rem] shadow-[0_-8px_16px_rgba(0,0,0,0.1)]"
                style={{ top: slider4Top, minHeight: 'calc(100vh + 4rem)' }}
            >
                <div className="text-center px-0 sm:px-0 md:px-[10%] mb-10 pb-10">
                    <p className="font-inter font-normal text-lg sm:text-xl md:text-[20px] mb-7 sm:mb-4 bg-[#FAFAFA] rounded-[60px] px-6 py-2 inline-block">
                        Customisations
                    </p>

                    <h2 className="font-playfair font-semibold text-3xl sm:text-4xl md:text-[56px] lg:text-[72px] leading-snug sm:leading-tight md:leading-[1.2] lg:leading-[1.3] mb-10">
                        Lorem ipsum dolor sit amet, consectetur adipiscing sed do
                    </h2>

                    <Customisations />

                    <Link
                        to="/customise"
                        className="mt-10 px-8 py-5 rounded-full text-[14px] font-inter font-normal text-white bg-black hover:bg-[#1a1a1a] inline-flex items-center gap-2"
                    >
                        Customise Now <ArrowRight size={16} />
                    </Link>

                    <div className="relative w-full  mx-auto mt-40 cursor-pointer mb-10">
                        <video
                            ref={videoRef}
                            src="https://www.w3schools.com/html/mov_bbb.mp4"
                            className="border-[5px] border-[#969192] rounded-[20px] w-full"
                            playsInline
                            preload="metadata"
                            controls={false}
                            poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217" // sample poster image
                            onClick={togglePlay} // clicking video toggles play/pause
                        />

                        {showIcon && (
                            <button
                                onClick={(e) => {
                                    e.stopPropagation(); // prevent triggering video click twice
                                    togglePlay();
                                }}
                                className="absolute inset-0 flex items-center justify-center"
                                aria-label={isPlaying ? "Pause video" : "Play video"}
                            >
                                <div className="bg-white p-4 rounded-full shadow-md">
                                    {isPlaying ? (
                                        <Pause size={30} color="#969192" fill="#969192" />
                                    ) : (
                                        <Play size={30} color="#969192" fill="#969192" />
                                    )}
                                </div>
                            </button>
                        )}
                    </div>

                </div>

            </div>

            {/* Slider 05 Section (Footer) */}
            <div
                ref={slider5Ref}
                className="sticky top-0 bg-white p-5 md:p-10 pt-10 md:pt-20 rounded-t-[4rem] md:rounded-t-[8rem] shadow-[0_-8px_16px_rgba(0,0,0,0.1)]"
                style={{ top: slider5Top, minHeight: 'calc(4rem)' }}
            >
                <div className="text-center flex flex-col items-center gap-6 px-5">
                    {/* Logo */}
                    <img src="/images/logo.png" alt="Logo" className="h-10 w-10 object-contain" />

                    {/* Nav Links */}
                    <div className="mt-1 flex gap-6 text-sm font-medium text-gray-700">
                        <a href="#" className="font-[400] text-[16px] text-[#000000] font-inter transition-transform duration-300 hover:scale-110">Home</a>
                        <a href="#" className="font-[400] text-[16px] text-[#000000] font-inter transition-transform duration-300 hover:scale-110">Shop</a>
                        <a href="#" className="font-[400] text-[16px] text-[#000000] font-inter transition-transform duration-300 hover:scale-110">About</a>
                        <a href="#" className="font-[400] text-[16px] text-[#000000] font-inter transition-transform duration-300 hover:scale-110">Contact</a>
                    </div>

                    {/* Subscribe Form */}
                    <div className="mt-1 flex w-full max-w-md rounded-full border border-[#E6E6E6] focus:outline-none">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="flex-1 px-4 py-3 rounded-l-full focus:outline-none font-poppins text-[16px] placeholder-gray-500 placeholder:font-normal"
                        />
                        <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 font-poppins font-semibold text-[16px]">
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
            </div>


            <CursorWaterEffect />
        </div>
    );
};

export default Home;
