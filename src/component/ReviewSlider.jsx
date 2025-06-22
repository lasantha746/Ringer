import React, { useRef, useEffect, useState } from "react";
import { Heart, Star, StarHalf, ArrowLeft, ArrowRight, Search } from 'lucide-react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import 'flowbite';

const ReviewSlider = () => {

    const reviews = [
        {
            date: "March 1, 2025",
            rating: 4,
            title: "Perfect Engagement Ring",
            image: "/images/reviews/reviews01.png",
            comment: "“My fiancée was speechless. The customization made this ring so personal and meaningful.”",
            author: "-Sandun K.-",
        },
        {
            date: "April 2, 2025",
            rating: 5,
            title: "Absolutely Beautiful",
            image: "/images/reviews/reviews01.png",
            comment: "“I’ve never seen something shine like this. Truly stunning and well-crafted.”",
            author: "-Dilani J.-",
        },
        {
            date: "April 3, 2025",
            rating: 5,
            title: "Absolutely Beautiful",
            image: "/images/reviews/reviews01.png",
            comment: "“I’ve never seen something shine like this. Truly stunning and well-crafted.”",
            author: "-Dilani J.-",
        },
        {
            date: "April 4, 2025",
            rating: 5,
            title: "Absolutely Beautiful",
            image: "/images/reviews/reviews01.png",
            comment: "“I’ve never seen something shine like this. Truly stunning and well-crafted.”",
            author: "-Dilani J.-",
        },
        {
            date: "April 5, 2025",
            rating: 5,
            title: "Absolutely Beautiful",
            image: "/images/reviews/reviews01.png",
            comment: "“I’ve never seen something shine like this. Truly stunning and well-crafted.”",
            author: "-Dilani J.-",
        },
    ];

    useEffect(() => {
        const nextBtn = document.querySelector("[data-carousel-next]");
        const interval = setInterval(() => {
            if (nextBtn) nextBtn.click();
        }, 3000); // autoplay every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div id="default-carousel" className="relative w-full" data-carousel="slide">
            <div className="relative h-[100vh] overflow-hidden rounded-lg">
                {reviews.map((review, index) => (
                    <div
                        key={index}
                        className={`duration-700 ease-in-out ${index === 0 ? '' : 'hidden'}`}
                        data-carousel-item
                    >
                        <div className="w-full mt-16 mb-16 bg-[#FFFFFF] rounded-[40px] md:rounded-[150px] text-center p-5 flex justify-center items-center flex-col">
                            {/* Title */}
                            <h3 className="text-center text-[10px] md:text-[14px] font-[400] font-poppins text-black">{review.date}</h3>

                            {/* Rating */}
                            <div className="mt-3 mb-3 flex items-center justify-center space-x-1 text-xs mt-1">
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className="w-7 h-7 ms-1 me-1"
                                            fill={i < review.rating ? "#ED9E53" : "#D9D9D9"}
                                            stroke="none"
                                        />
                                    ))}
                                </div>
                            </div>

                            <h3 className="mb-5 text-center text-[14px] md:text-[18px] font-[600] font-poppins text-black">{review.title}</h3>

                            <img className="mb-5 w-[300px] rounded-[20px]" src={review.image} alt="" />

                            <h3 className="mb-3 w-[60%] text-center text-[14px] md:text-[18px] font-[300] font-poppins text-black">{review.comment}</h3>
                            <h3 className="text-center text-[10px] md:text-[14px] font-[300] font-poppins text-black">{review.author}</h3>

                        </div>
                    </div>

                ))}
            </div>

            {/* Dots */}
            {/* <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
                            {[0, 1, 2, 3, 4].map((i) => (
                                <button
                                    key={i}
                                    type="button"
                                    className="w-3 h-3 rounded-full bg-white"
                                    aria-label={`Slide ${i + 1}`}
                                    data-carousel-slide-to={i}
                                ></button>
                            ))}
                        </div> */}

            {/* Previous Button */}
            {/* <button
                            type="button"
                            className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group"
                            data-carousel-prev
                        >
                            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
                                <svg className="w-4 h-4 text-white" viewBox="0 0 6 10" fill="none">
                                    <path d="M5 1 1 5l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                        </button> */}

            {/* Next Button */}
            {/* <button
                            type="button"
                            className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group"
                            data-carousel-next
                        >
                            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
                                <svg className="w-4 h-4 text-white" viewBox="0 0 6 10" fill="none">
                                    <path d="m1 9 4-4-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                        </button> */}
        </div>
    );
};

export default ReviewSlider;