import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Play, Pause } from 'lucide-react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "../component/NavBar.jsx";
import Footer from "../component/Footer.jsx";
import ProductSlider from "../component/ProductSlider.jsx";
import Customisations from "../component/Customisations.jsx";
import CursorWaterEffect from "../component/CursorWaterEffect.jsx";

const TOTAL_FRAMES = 300;
const START_SHOW_NAVBAR_AT = 180;
gsap.registerPlugin(ScrollTrigger);

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

    //story animation
    const stories = [
        {
            id: "01",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua 01. ",
            video: "/images/storyVideo/story01.mp4",
        },
        {
            id: "02",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua 02. ",
            video: "/images/storyVideo/story02.mp4",
        },
        {
            id: "03",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua 03. ",
            video: "/images/storyVideo/story03.mp4",
        },
    ];
    const storyRefs = useRef([]);
    const splitTextIntoSpans = (text) => {
        return text.split("").map((char, index) => (
            <span
                key={index}
                className="char"
                style={{
                    display: "inline-block",
                    color: "#D5D5D5",
                }}
            >
                {char === " " ? "\u00A0" : char}
            </span>
        ));
    };

    useEffect(() => {
        ScrollTrigger.getAll().forEach((t) => t.kill());

        storyRefs.current.forEach((section) => {
            const chars = section.querySelectorAll(".story-text .char");
            const videoBX = section.querySelector(".video-box");
            const content = section.querySelector(".flex-col");

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: "top+=100 top",
                    end: "+=2000",
                    scrub: true,
                    pin: true,
                    pinSpacing: true,
                },
            });

            tl.to(chars, {
                color: "black",
                stagger: {
                    each: 0.03,
                    from: "start",
                },
                ease: "none",
            });

            //go content down befo start video animation
            tl.to(content, {
                y: "-30vh", // or adjust based on look
                ease: "none",
            });

            // 3. Grow video height step-by-step
            tl.to(videoBX, { height: "16rem", y: "-10vh", ease: "none" });
            tl.to(videoBX, { height: "24rem", y: "-10vh", ease: "none" });
            tl.to(videoBX, { height: "32rem", y: "-10vh", ease: "none" });

        });

        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, []);

    //review animation
    // Updated GSAP animation section - replace your existing slider2 animation
    const slider2Content = document.getElementById('slider2-content');
    const slider2BgImage = document.getElementById('slider2-bg-image');

    if (slider2Content && slider2BgImage) {
        gsap.timeline({
            scrollTrigger: {
                trigger: slider2Ref.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
                onUpdate: () => {
                    // Get the current position of the green div's top edge
                    const divRect = slider2Content.getBoundingClientRect();
                    const divTop = divRect.top;

                    // Get the image position
                    const imageRect = slider2BgImage.getBoundingClientRect();
                    const imageTop = imageRect.top;
                    const imageHeight = imageRect.height;

                    // Calculate how much the div has moved relative to the image bottom
                    const imageBottom = imageTop + imageHeight;
                    const distanceFromBottom = imageBottom - divTop;

                    // Calculate what percentage of the image should be visible
                    let visiblePercentage = (distanceFromBottom / imageHeight) * 100;
                    visiblePercentage = Math.max(0, Math.min(100, visiblePercentage));

                    // Calculate clip percentage (100% - visible% = hidden from top)
                    const clipPercentage = 100 - visiblePercentage;

                    // Apply clip-path to both image and gradient overlay
                    slider2BgImage.style.clipPath = `inset(${clipPercentage}% 0 0 0)`;
                }
            }
        });
    }

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

    //vibrate
    const [isVideoHover, setIsVideoHover] = useState(false);
    const [isVibrating, setIsVibrating] = useState(false);
    const handleVideoMouseEnter = () => {
        console.log("Mouse entered video box!");

        if (isVibrating) return;

        if (!isVideoHover) {
            setIsVideoHover(true);
            setIsVibrating(true);

            setTimeout(() => {
                setIsVibrating(false);
            }, 1000); // Stop after 1 second
        };
    };

    const handleVideoMouseLeave = () => {
        console.log("Mouse left video box!");
        setIsVideoHover(false);
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
                className="sticky top-0 bg-[#FFFFFF] min-h-screen p-5 md:p-10 pb-0 md:pb-0 pt-0 md:pt-0 rounded-t-[4rem] md:rounded-t-[8rem] shadow-[0_-8px_16px_rgba(0,0,0,0.1)]"
                style={{ top: slider2Top, minHeight: 'calc(100vh + 4rem)' }}
            >
                <div className="relative z-20 bg-[#FFFFFF] text-center px-0 sm:px-0 md:px-[10%] pt-10 md:pt-20 rounded-t-[4rem] md:rounded-t-[8rem]">
                    <p className="font-inter font-normal text-lg sm:text-xl md:text-[20px] mb-7 sm:mb-4 bg-[#FAFAFA] rounded-[60px] px-6 py-2 inline-block">
                        Testimonials
                    </p>

                    <h2 className="font-playfair font-semibold text-3xl sm:text-4xl md:text-[56px] lg:text-[72px] leading-snug sm:leading-tight md:leading-[1.2] lg:leading-[1.3] mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing sed do
                    </h2>

                    <p className="font-poppins font-light text-base sm:text-lg md:text-xl mt-2 sm:mt-4 pb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                    </p>
                </div>

                <div id="slider2-content" style={{ backgroundColor: 'green' }} className="relative w-full h-full text-center flex items-center justify-center">

                    <img
                        src="/images/ringBG.jpg"
                        alt="background"
                        className="absolute w-[80vw] h-full object-cover top-0 left-1/2 transform -translate-x-1/2 z-0 transition-all duration-300 ease-out"
                        draggable="false"
                    />

                    {/* Main background image with clip-path */}
                    <img
                        src="/images/ringBG.jpg"
                        alt="background"
                        className="fixed w-[80vw] h-full top-0 left-1/2 transform -translate-x-1/2 z-10 pointer-events-none rounded-t-[4rem] md:rounded-t-[8rem]"
                        style={{
                            clipPath: 'inset(100% 0 0 0)', // Initially hidden (clipped from top)
                        }}
                        id="slider2-bg-image"
                        draggable="false"
                    />

                    <div className="absolute z-20 w-[50vw] h-[50vw] rounded-full bg-white flex items-center justify-center shadow-2xl ring-8 ring-gray-200">

                        {/* //review */}
                        <div className="text-center px-6">
                            <img src="/images/iconReview.png" alt="Customer testimonial" className="w-32 mx-auto mb-10 object-cover" />
                            <p className="mt-10 pt-10 text-gray-700 font-inter font-normal text-lg sm:text-xl md:text-[20px]">
                                This ring exceeded my expectations. I’ve never felt more connected to a piece of jewelry—it truly tells my story.
                            </p>
                            <p className="mt-5 font-inter font-normal text-lg sm:text-xl md:text-[14px] text-gray-500">-Sienna M., Los Angeles-</p>
                        </div>
                    </div>

                    <img
                        src="/images/bgring.png"
                        alt="background"
                        className="absolute w-full h-auto object-contain z-20"
                        draggable="false"
                    />
                    <img
                        src="/images/bgring.png"
                        alt="background"
                        className=" w-full h-auto object-contain z-30"
                        draggable="false"
                        style={{ visibility: 'hidden' }}
                    />
                </div>

            </div>

            {/* Slider 03 Section */}
            <div
                ref={slider3Ref}
                className="sticky top-0 bg-[#FAFAFA] min-h-screen p-5 md:p-10 pt-10 md:pt-20 rounded-t-[4rem] md:rounded-t-[8rem] shadow-[0_-8px_16px_rgba(0,0,0,0.1)]"
                style={{ top: slider3Top, minHeight: 'calc(100vh + 4rem)' }}
            >
                <div
                    style={{
                        height: `${stories.length * 2800}px`
                        // height: '10500px',
                    }}
                    className="text-center px-0 sm:px-0 md:px-[10%] mb-20 md:mb-40"
                >
                    <p className="font-inter font-normal text-lg sm:text-xl md:text-[20px] mb-7 sm:mb-4 bg-[#FFFFFF] rounded-[60px] px-6 py-2 inline-block">
                        How it Works
                    </p>

                    <h2 className="font-playfair font-semibold text-3xl sm:text-4xl md:text-[56px] lg:text-[72px] leading-snug sm:leading-tight md:leading-[1.2] lg:leading-[1.3] mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing sed do
                    </h2>

                    {stories.map((story, index) => (
                        <section
                            key={index}
                            ref={el => (storyRefs.current[index] = el)}
                            className="relative flex items-center justify-center min-h-screen bg-[#FAFAFA] px-4"
                        >
                            {/* Content box centered vertically and horizontally */}
                            <div className="flex flex-col items-center text-center max-w-4xl space-y-6 pt-10 md:pt-32">
                                {/* Step Number */}
                                <div className="flex flex-col items-center space-y-2">
                                    <div className="font-inter font-normal text-lg sm:text-xl md:text-[20px] border border-black rounded-[14px] px-2 py-1 text-sm font-medium">
                                        {story.id}
                                    </div>
                                    <div className="h-20 w-px bg-black" />
                                </div>

                                {/* Title (with animated chars) */}
                                <h2 className="story-text font-inter text-2xl md:text-[48px] font-semibold leading-snug pb-8 md:pb-12">
                                    {splitTextIntoSpans(story.text)}
                                </h2>

                                {/* Video */}
                                <div style={{ willChange: "transform, height", transition: "none" }} className="video-box rounded-[80px] overflow-hidden h-32 mt-6">
                                    <video
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        className="object-contain w-full h-full"
                                    >
                                        <source src={story.video} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </div>
                        </section>
                    ))}


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
                    <div className={`relative w-full mx-auto mt-20 md:mt-40 cursor-pointer mb-10`}
                        onMouseEnter={handleVideoMouseEnter}
                        onMouseLeave={handleVideoMouseLeave}
                    >

                        <video
                            ref={videoRef}
                            src="https://www.w3schools.com/html/mov_bbb.mp4"
                            className={`
                                        border-[5px] border-[#969192] rounded-[20px] w-full
                                        ${isVibrating ? 'vibrate-box' : ''}
                                    `}
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
                <Footer />
            </div>


            <CursorWaterEffect />
        </div >
    );
};

export default Home;
