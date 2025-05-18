import React, { useEffect, useState } from "react";
import Navbar from "../component/NavBar.jsx";

const TOTAL_FRAMES = 300;
const START_SHOW_NAVBAR_AT = 180;

const Home = () => {
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const [currentFrame, setCurrentFrame] = useState(0);
    const [showNavbar, setShowNavbar] = useState(false);
    const [imageSrcs, setImageSrcs] = useState([]);

    // Prepare all image srcs
    useEffect(() => {
        const srcs = [];
        for (let i = 1; i <= TOTAL_FRAMES; i++) {
            srcs.push(`/images/hero/img_${String(i).padStart(3, "0")}.jpg`);
        }
        setImageSrcs(srcs);
    }, []);

    // Preload all images
    useEffect(() => {
        if (!imageSrcs.length) return;
        let loadedCount = 0;
        imageSrcs.forEach((src) => {
            const img = new Image();
            img.src = src;
            img.onload = () => {
                loadedCount++;
                if (loadedCount === imageSrcs.length) {
                    setImagesLoaded(true);
                }
            };
            img.onerror = () => {
                loadedCount++;
                if (loadedCount === imageSrcs.length) {
                    setImagesLoaded(true);
                }
            };
        });
    }, [imageSrcs]);

    // Handle scroll event to set current frame and showNavbar flag
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const maxScroll = window.innerHeight * 3; // 300vh scroll
            const progress = Math.min(1, scrollY / maxScroll);
            const frame = Math.floor(progress * (TOTAL_FRAMES - 1));
            setCurrentFrame(frame);
            setShowNavbar(frame >= START_SHOW_NAVBAR_AT);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <div className="relative w-full bg-[#FAFAFA]">
            {showNavbar && <Navbar />}

            {/* Sticky Image Viewer */}
            <div className="h-[300vh] relative sticky top-0">
                <div className="sticky top-0 h-screen w-full">

                    {imagesLoaded &&
                        imageSrcs.map((src, idx) => (
                            <img
                                key={idx}
                                src={src}
                                alt={`Frame ${idx}`}
                                className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-200 ease-out pointer-events-none ${idx === currentFrame ? "opacity-100 z-10" : "opacity-0 z-0"
                                    }`}
                                draggable={false}
                                loading="eager"
                            />
                        ))}
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
                className="sticky top-0 bg-[#FAFAFA] min-h-screen p-5 md:p-10 pt-10 md:pt-20 rounded-t-[4rem] md:rounded-t-[8rem] shadow-[0_-8px_16px_rgba(0,0,0,0.1)]"

            >
                <div className="text-center px-0 sm:px-0 md:px-[10%]">
                    <p className="font-inter font-normal text-lg sm:text-xl md:text-[20px] mb-7 sm:mb-4">
                        Products
                    </p>

                    <h2 className="font-playfair font-semibold text-3xl sm:text-4xl md:text-[56px] lg:text-[72px] leading-snug sm:leading-tight md:leading-[1.2] lg:leading-[1.3] mb-5">
                        Crafted for the Moment You’ll Never Forget
                    </h2>


                    <p className="font-poppins font-light text-base sm:text-lg md:text-xl mt-2 sm:mt-4 mb-4">
                        Our rings are designed with precision, love, and intention. Whether it’s a proposal, anniversary, or personal milestone—your story deserves brilliance.
                    </p>
                </div>

            </div>

            {/* Slider 02 Section */}
            <div
                className="sticky top-0 bg-[#FAFAFA] min-h-screen p-5 md:p-10 pt-10 md:pt-20 rounded-t-[4rem] md:rounded-t-[8rem] shadow-[0_-8px_16px_rgba(0,0,0,0.1)]"

            >
                <div className="text-center px-0 sm:px-0 md:px-[10%]">
                    <p className="font-inter font-normal text-lg sm:text-xl md:text-[20px] mb-7 sm:mb-4">
                        Products
                    </p>

                    <h2 className="font-playfair font-semibold text-3xl sm:text-4xl md:text-[56px] lg:text-[72px] leading-snug sm:leading-tight md:leading-[1.2] lg:leading-[1.3] mb-5">
                        Crafted for the Moment You’ll Never Forget
                    </h2>


                    <p className="font-poppins font-light text-base sm:text-lg md:text-xl mt-2 sm:mt-4 mb-4">
                        Our rings are designed with precision, love, and intention. Whether it’s a proposal, anniversary, or personal milestone—your story deserves brilliance.
                    </p>
                </div>

            </div>

        </div>
    );
};

export default Home;
