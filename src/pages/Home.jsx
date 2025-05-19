import React, { useRef, useEffect, useState } from "react";
import Navbar from "../component/NavBar.jsx";
import ProductSlider from "../component/ProductSlider.jsx";

const TOTAL_FRAMES = 300;
const START_SHOW_NAVBAR_AT = 180;

const Home = () => {
    const canvasRef = useRef(null);
    const [images, setImages] = useState([]);
    const [showNavbar, setShowNavbar] = useState(false);


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

        </div>
    );
};

export default Home;
