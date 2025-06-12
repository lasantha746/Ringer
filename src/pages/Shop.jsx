import React, { useRef, useEffect, useState } from "react";
import { Heart, Star, StarHalf, ArrowLeft, ArrowRight, Search } from 'lucide-react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "../component/NavBar.jsx";
import Footer from "../component/Footer.jsx";
import CursorWaterEffect from "../component/CursorWaterEffect.jsx";

gsap.registerPlugin(ScrollTrigger);

const products = [...Array(30).keys()];
const perPage = 8;

const Shop = () => {
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


    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const [sort, setSort] = useState("default");
    const [page, setPage] = useState(1);


    const filtered = products
        .filter((_, i) => `Sample Ring Name ${i + 1}`.toLowerCase().includes(search.toLowerCase()))
        .filter(() => category === "All" || true)
        .sort(() => 0);

    const paginated = filtered.slice((page - 1) * perPage, page * perPage);

    return (
        <div className="relative w-full bg-[#FAFAFA]">

            {<Navbar />}

            {/* Sticky Image Viewer */}
            <div className="h-[100vh] relative sticky top-0 bg-[#FFFFFF]">
                <div className="sticky top-0 h-screen w-full flex justify-center items-center">
                    <img className="z-[-1] absolute h-full object-cover" src="/images/heroSRC/heroShop.png" alt="" style={{ opacity: 0.32 }} />
                    <div className="text-center" style={{ opacity: 1 }}>
                        <h2 className="font-playfair font-[600] text-[70px] sm:text-[80px] md:text-[90px] lg:text-[100px] leading-snug sm:leading-tight md:leading-[1.2] lg:leading-[1.3] mb-5">
                            Shop
                        </h2>
                        <span className="font-poppins font-[300] text-[20px] sm:text-[25px] md:text-[30px] lg:text-[35px] mt-2 sm:mt-4 mb-4">
                            Find the perfect ring for every moment.
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
                <div className="text-center px-0 sm:px-0 md:px-[10%] mb-20">
                    <h2 className="font-inter font-[400] text-3xl sm:text-4xl md:text-[26px] lg:text-[36px] leading-snug sm:leading-tight md:leading-[1.2] lg:leading-[1.3] mb-5">
                        THE COLLECTION
                    </h2>
                    <p className="font-poppins font-light text-base sm:text-lg md:text-xl mt-2 sm:mt-4 mb-4">
                        Explore our handcrafted collection of rings, designed to celebrate every story—crafted with precision, love, and luxury.
                    </p>
                </div>

                <div className="mb-20">

                    {/* Controls */}
                    <div className="pl-4 pr-4 flex flex-wrap justify-between items-center mb-6 gap-4">

                        {/* Search */}
                        <div className="bg-[#FFFFFF] rounded-full px-2 pl-4 flex items-center">
                            <Search className="w-4 h-4 text-[#000000]" />
                            <input
                                type="text"
                                placeholder="Search by ring name"
                                value={search}
                                onChange={(e) => {
                                    setSearch(e.target.value);
                                    setPage(1);
                                }}
                                className="w-full md:w-[200px] lg:w-[300px] xl:w-[500px] font-inter font-[400] text-[12px] md:text-[14px] bg-[#FFFFFF] rounded-full pl-2 pr-6 py-3 border-none focus:outline-none focus:ring-0 placeholder:font-inter placeholder:font-normal placeholder:text-base placeholder:text-[#000000] placeholder:text-[12px] placeholder:md:text-[14px]"
                            />
                        </div>

                        <div className="flex gap-3">
                            {/* Category Filter */}
                            <div className="bg-[#FFFFFF] rounded-full px-2">
                                <select
                                    value={category}
                                    onChange={(e) => {
                                        setCategory(e.target.value);
                                        setPage(1);
                                    }}
                                    className="w-full font-inter font-[400] text-[12px] md:text-[14px] bg-[#FFFFFF] rounded-full px-6 py-3 border-none focus:outline-none focus:ring-0"
                                >
                                    <option value="All">Category</option>
                                    <option value="Rings">Rings</option>
                                    <option value="Necklaces">Necklaces</option>
                                </select>
                            </div>

                            {/* Sort Dropdown */}
                            <div className="bg-[#FFFFFF] rounded-full px-2">
                                <select
                                    value={sort}
                                    onChange={(e) => setSort(e.target.value)}
                                    className="w-full font-inter font-[400] text-[12px] md:text-[14px] bg-[#FFFFFF] rounded-full px-6 py-3 border-none focus:outline-none focus:ring-0"
                                >
                                    <option value="default">Default sorting</option>
                                    <option value="priceLowHigh">Price: Low to High</option>
                                    <option value="priceHighLow">Price: High to Low</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Result Count */}
                    <div className="pl-4 pr-4 flex font-inter font-[400] text-[12px] md:text-[14px] mb-10">
                        Showing <p className="ms-1 me-1 text-[#ED9E53] font-[600]">{paginated.length}</p> of <p className="ms-1 me-1 font-[600]">{filtered.length}</p> rings
                    </div>

                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-16">

                        {paginated.map((_, i) => (

                            <div key={i} className="w-full h-[auto]  flex flex-col items-center justify-between p-4">

                                <div className="w-full h-[auto] flex flex-col items-center justify-between p-5 bg-white rounded-[70px] shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                                    {/* Top Badge and Heart */}
                                    <div className="w-full flex justify-between items-center px-0 mt-0">
                                        <div></div>
                                        <span className="ms-10 font-inter font-[400] text-[12px] md:text-[14px] text-orange-400">New</span>
                                        <div className="w-7 h-7 flex items-center justify-center rounded-full bg-[#FAFAFA] border-[2px] border-[#FAFAFA] focus:outline-none hover:border-[red]">
                                            <Heart className="w-5 h-5 hover:fill-[red]" fill="#D9D9D9" stroke="none" />
                                        </div>

                                    </div>

                                    {/* Ring Image */}
                                    <img
                                        src="/images/product/p1.png"
                                        alt="Ring"
                                        className="w-full object-contain my-4"
                                    />

                                    <div className="w-full flex justify-center items-center px-0 mt-0">
                                        <div className="w-full flex justify-center items-center">
                                            <span className="font-inter font-[400] text-[12px] md:text-[14px]">Customize</span>
                                            <img className="ms-2 w-4 h-4" src="/images/customize.png" alt="" />
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-5 flex flex-col items-center justify-between">
                                    {/* Title */}
                                    <h3 className="text-center text-sm md:text-[18px] font-inter text-black font-[500]">Sample Ring Name</h3>

                                    {/* Rating */}
                                    <div className="mt-3 flex items-center justify-center space-x-1 text-xs mt-1">
                                        <div className="flex">
                                            <Star className="w-4 h-4" fill="#ED9E53" stroke="none" />
                                            <Star className="w-4 h-4" fill="#ED9E53" stroke="none" />
                                            <Star className="w-4 h-4" fill="#ED9E53" stroke="none" />
                                            <Star className="w-4 h-4" fill="#ED9E53" stroke="none" />
                                            <Star className="w-4 h-4" fill="#D9D9D9" stroke="none" />
                                        </div>

                                        <span className="ms-2 text-[10px] md:text-[14px] font-[400] font-inter">(4.8 of 5)</span>
                                    </div>

                                    {/* Button */}
                                    <button className="mt-4 px-4 py-3 bg-black text-white text-sm md:text-[16px] font-[400] font-inter rounded-full shadow hover:bg-gray-900 transition">
                                        Cart . Rs.34000/=
                                    </button>
                                </div>

                            </div>

                        ))}

                    </div>

                    {/* Pagination */}
                    <div className="flex justify-center mt-6 items-center gap-3">
                        <button
                            onClick={() => setPage((p) => Math.max(p - 1, 1))}
                            disabled={page === 1}
                            className="px-7 py-3 text-sm md:text-[14px] font-[400] font-inter rounded-full bg-[#EEEEEE]"
                        >
                            <ArrowLeft className="w-4 h-4" />
                        </button>
                        {/* <span className="px-4">Page {page}</span> */}
                        <button
                            onClick={() => setPage((p) => (p * perPage < filtered.length ? p + 1 : p))}
                            disabled={page * perPage >= filtered.length}
                            className="flex items-center px-7 py-3 text-sm md:text-[14px] font-[400] font-inter rounded-full bg-[#EEEEEE]"
                        >
                            Next Page <ArrowRight className="ms-2 w-4 h-4" />
                        </button>
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

export default Shop;
