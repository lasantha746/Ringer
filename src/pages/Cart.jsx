import React, { useRef, useEffect, useState } from "react";
import { Heart, Star, StarHalf, ArrowLeft, ArrowRight, Plus, Minus, X } from 'lucide-react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

import Navbar from "../component/NavBar.jsx";
import Footer from "../component/Footer.jsx";
import CursorWaterEffect from "../component/CursorWaterEffect.jsx";

gsap.registerPlugin(ScrollTrigger);

const Cart = () => {
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

    const CartItems = [
        {
            id: 1,
            name: 'Sample Ring Name',
            metal: 'Gold',
            size: '6',
            price: 400,
            image: '/images/product/p1.png'
        },
        {
            id: 2,
            name: 'Sample Ring Name',
            metal: 'Gold',
            size: '6',
            price: 40500,
            image: '/images/product/p1.png'
        },
        {
            id: 3,
            name: 'Sample Ring Name',
            metal: 'Gold',
            size: '6',
            price: 40500000,
            image: '/images/product/p1.png'
        }
    ];

    const [quantity, setQuantity] = useState(1);

    const increment = () => setQuantity(quantity + 1);
    const decrement = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    const [showModal, setShowModal] = useState(false);

    const handlePlaceOrderClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };


    return (
        <div className="relative w-full bg-[#FAFAFA]">

            {<Navbar />}

            {/* Sticky Image Viewer */}
            <div className="h-[100vh] relative sticky top-0 bg-[#FFFFFF]">
                <div className="sticky top-0 h-screen w-full flex justify-center items-center">
                    <img className="z-[-1] absolute h-full object-cover" src="/images/heroSRC/heroCart.png" alt="" style={{ opacity: 0.32 }} />
                    <div className="text-center" style={{ opacity: 1 }}>
                        <h2 className="font-playfair font-[600] text-[70px] sm:text-[80px] md:text-[90px] lg:text-[100px] leading-snug sm:leading-tight md:leading-[1.2] lg:leading-[1.3] mb-5">
                            My Cart
                        </h2>
                        <span className="font-poppins font-[300] text-[20px] sm:text-[25px] md:text-[30px] lg:text-[35px] mt-2 sm:mt-4 mb-4">
                            Lorem ipsum dolor sit amet, consectetur
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
                <div className="px-0 sm:px-0 md:px-[10px] mt-10 mb-12">
                    <h2 className="font-playfair font-[600] text-3xl sm:text-4xl md:text-[26px] lg:text-[36px] leading-snug sm:leading-tight md:leading-[1.2] lg:leading-[1.3] mb-5">
                        My Cart ({CartItems.length})
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row gap-4 ">
                    <div className="w-full lg:w-8/12 flex flex-col">
                        <div className="space-y-3">
                            <div
                                className="bg-white p-3 md:p-5 rounded-[20px] flex items-center justify-between"
                            >
                                <div className="font-inter font-[400] text-[12px] md:text-[14px]">
                                    Products
                                </div>

                                <div className="font-inter font-[400] text-[12px] md:text-[14px] text-center ms-0 sm:ms-40">
                                    <div className="w-[120px] text-start">
                                        Price
                                    </div>
                                </div>

                                <div className="font-inter font-[400] text-[12px] md:text-[14px]">
                                    Quantity
                                </div>

                                <div className="font-inter font-[400] text-[12px] md:text-[14px] me-0 sm:me-16">
                                    Subtotal
                                </div>

                                <div className="font-inter font-[400] text-[12px] md:text-[14px]">
                                </div>
                            </div>

                            {CartItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="bg-white p-3 md:p-5 rounded-[20px] flex flex-col sm:flex-row items-center justify-between gap-5"
                                >
                                    <div className="flex items-center gap-4 w-full sm:w-auto">
                                        <div className="w-[60px] h-[60px] rounded-[16px] bg-gray-300 flex-shrink-0 overflow-hidden">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-full h-full object-cover border border-[#D9D9D9] rounded-[16px]"
                                            />
                                        </div>
                                        <div>
                                            <p className="font-inter font-[600] text-[16px] md:text-[18px]">{item.name}</p>
                                            <p className="font-inter font-[400] text-[12px] md:text-[14px] text-[#525252]">
                                                Metal: {item.metal} | Size: {item.size}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="font-inter font-[400] text-[12px] md:text-[14px] text-center w-full sm:w-auto">
                                        <div className="w-[100px] text-start">
                                            Rs.{item.price.toLocaleString()}/=
                                        </div>
                                    </div>

                                    <div className="font-inter font-[400] text-[12px] md:text-[14px] text-center w-full sm:w-auto">
                                        <div className="flex items-center border border-[#FAFAFA] rounded-full bg-[#FAFAFA] w-[fit-content]">
                                            <button
                                                onClick={decrement}
                                                className="text-lg font-bold flex items-center rounded-full bg-[#EEEEEE] w-7 h-7 justify-center"
                                                aria-label="Decrease quantity"
                                            >
                                                <Minus size={14} />
                                            </button>
                                            <span className="px-2 text-[14px] md:text-[16px] font-[400] font-inter text-[#525252] w-10 text-center">
                                                {quantity}
                                            </span>
                                            <button
                                                onClick={increment}
                                                className="text-lg font-bold flex items-center rounded-full bg-[#EEEEEE] w-7 h-7 justify-center"
                                                aria-label="Increase quantity"
                                            >
                                                <Plus size={14} />
                                            </button>
                                        </div>
                                    </div>

                                    <div className="font-inter font-[400] text-[12px] md:text-[14px] text-center w-full sm:w-auto">
                                        <div className="w-[100px] text-start">
                                            Rs.{item.price.toLocaleString()}/=
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-5 w-full sm:w-auto justify-end">
                                        <button className="bg-[#EEEEEE] p-2 rounded-full hover:bg-gray-300">
                                            <X size={18} className="text-[#818181] hover:text-[red] hover:font-bold" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="w-full lg:w-4/12">
                        <div
                            className="bg-white p-3 md:p-5 rounded-[20px]"
                        >
                            <div className="font-playfair font-[600] text-[20px] md:text-[30px] mb-8">
                                Cart Totals
                            </div>

                            <div className="">
                                <div className="flex justify-between mb-7">
                                    <span className="text-[14px] md:text-[16px] font-[400] font-inter flex items-center text-[#525252]">
                                        Subtotal:
                                    </span>
                                    <span className="text-[14px] md:text-[16px] font-[500] font-inter text-[#ED9E53]">Rs.81,000/=</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-300 pb-7 mb-7">
                                    <span className="text-[14px] md:text-[16px] font-[400] font-inter flex items-center text-[#525252]">
                                        Shipping:
                                    </span>
                                    <span className="text-[14px] md:text-[16px] font-[500] font-inter text-[#0EBC6C]">Free shipping</span>
                                </div>

                                <div className="flex justify-between pb-7">
                                    <span className="text-[16px] md:text-[20px] font-[600] font-inter flex items-center">
                                        Total
                                    </span>
                                    <span className="text-[16px] md:text-[20px] font-[600] font-inter">Rs.81,000/=</span>
                                </div>

                                <button onClick={handlePlaceOrderClick} className="w-full flex-1 bg-black text-white px-6 py-2 rounded-full text-[14px] md:text-[16px] font-[400] font-inter">
                                    Place Order
                                </button>
                            </div>

                        </div>
                    </div>
                </div>

                <button className="mb-32 mt-8 flex items-center bg-[#E1E1E1] text-[#000000] px-6 py-2 rounded-full text-[14px] md:text-[16px] font-[400] font-inter">
                    <ArrowLeft size={18} className="mr-2" />
                    Continue Shopping
                </button>

            </div>

            {/* Slider 02 Section (Footer) */}
            <div
                ref={slider2Ref}
                className="sticky top-0 bg-white p-5 md:p-10 pt-10 md:pt-20 rounded-t-[4rem] md:rounded-t-[8rem] shadow-[0_-8px_16px_rgba(0,0,0,0.1)]"
                style={{ top: slider2Top, minHeight: 'calc(4rem)' }}
            >
                <Footer />
            </div>


            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-30 z-[99999] flex justify-center items-center">
                    <div className="bg-[#FAFAFA] max-h-[95%] overflow-y-auto w-[90%] sm:w-[400px] rounded-[40px] p-6 pb-2 relative shadow-xl">
                        <button onClick={handleCloseModal} className="absolute top-4 right-4">
                            <X size={20} className="text-[#626262] hover:text-[red]" />
                        </button>

                        <h2 className="text-center font-playfair text-[20px] md:text-[24px] font-[600]">Payment</h2>
                        <p className="text-center text-[#000000] text-[14px] md:text-[16px] font-[300] mt-3 mb-3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        </p>

                        <div className="bg-black text-white text-[16px] font-inter font-[500] rounded-[20px] px-4 py-5 flex justify-between items-center mb-4">
                            <span>Total price</span>
                            <span>Rs.40500/=</span>
                        </div>

                        {/* Payment Options */}
                        <div className="space-y-3 mb-4">
                            <label className="bg-[#FFFFFF] flex items-center justify-between px-5 py-4 rounded-[20px] cursor-pointer hover:border-black">
                                <div className="flex items-center">
                                    <input type="radio" name="payment" className="form-radio" />
                                    <span className="ml-3 text-[12px] md:text-[14px] font-[500] font-inter">Credit / Debit Card</span>
                                </div>

                                <div className="flex gap-2">
                                    <img src="/images/master.png" alt="MC" className="h-7 object-contain" />
                                    <img src="/images/visa.png" alt="Visa" className="h-7 object-contain" />
                                </div>
                            </label>
                            <label className="bg-[#FFFFFF] flex items-center justify-between px-5 py-4 rounded-[20px] cursor-pointer hover:border-black">
                                <div className="flex items-center">
                                    <input type="radio" name="payment" className="form-radio" />
                                    <span className="ml-3 text-[12px] md:text-[14px] font-[500] font-inter">Cash on Delivery</span>
                                </div>

                                <div className="flex gap-2">
                                    <img src="/images/cod.png" alt="cod" className="h-7 object-contain" />
                                </div>
                            </label>
                            <label className="bg-[#FFFFFF] flex items-center justify-between px-5 py-4 rounded-[20px] cursor-pointer hover:border-black">
                                <div className="flex items-center">
                                    <input type="radio" name="payment" className="form-radio" />
                                    <span className="ml-3 text-[12px] md:text-[14px] font-[500] font-inter">At the shop</span>
                                </div>

                                <div className="flex gap-2">
                                    <img src="/images/atshop.png" alt="atshop" className="h-7 object-contain" />
                                </div>
                            </label>
                        </div>

                        <button className="w-full bg-black text-white py-3 rounded-full font-inter text-[12px] md:text-[14px] font-[500]">Confirm Payment</button>
                        <button
                            onClick={handleCloseModal}
                            className="w-full mt-2 text-black text-center py-2 font-inter text-[12px] md:text-[14px] font-[500]"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}

            <CursorWaterEffect />
        </div >
    );
};

export default Cart;
