import { i, tr } from 'framer-motion/client';
import React, { useEffect, useState } from 'react';
import { CheckCircle, Package, Truck, Handshake, Check } from 'lucide-react';

export default function TracCom() {

  const TrackItem = [
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
  ];

  const TrackList = [
    {
      id: 1,
      image: '/images/tr01.png',
      title: 'Your order has been delivered. Thank you for shopping at [shop name]!',
      date: '23 Jan, 2021 at 7:32 PM',
    },
    {
      id: 2,
      image: '/images/tr02.png',
      title: 'Our delivery man (John Wick) Has picked-up your order for delvery. ',
      date: '23 Jan, 2021 at 2:00 PM',
    },
    {
      id: 3,
      image: '/images/tr03.png',
      title: 'Your order has reached at last mile hub.',
      date: '22 Jan, 2021 at 8:00 AM',
    }, {
      id: 4,
      image: '/images/tr04.png',
      title: 'Your order on the way to (last mile) hub.',
      date: '21, 2021 at 5:32 AM',
    },
    {
      id: 5,
      image: '/images/tr05.png',
      title: 'Your order is successfully verified.',
      date: '20 Jan, 2021 at 7:32 PM',
    },
    {
      id: 6,
      image: '/images/tr06.png',
      title: 'Your order has been confirmed.',
      date: '19 Jan, 2021 at 2:61 PM',
    },
  ];

  const steps = [
    { label: 'Order Placed', image: "/images/trStatus01.png", type: 'start', doneStatus: '', done: true },
    { label: 'Packaging', image: "/images/trStatus02.png", type: 'center', doneStatus: 'end', done: true },
    { label: 'On The Road', image: "/images/trStatus03.png", type: 'center', doneStatus: '', done: false },
    { label: 'Delivered', image: "/images/trStatus04.png", type: 'end', doneStatus: '', done: false },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h3 className="font-poppins font-semibold text-[16px] md:text-[18px] mb-5">Track Order</h3>
        <div className="bg-white rounded-[2rem] p-6 shadow-md">

          <div className="border-[1px] border-[#F7E99E] bg-[#FDFAE7] rounded-[15px] px-6 py-4 mb-3 flex flex-col md:flex-row justify-between items-start md:items-center text-[14px] md:text-[16px]">
            <div>
              <p className="font-poppins font-[600] text-[16px] md:text-[18px] mb-1">#4Y363G73735S</p>
              <p className="font-poppins font-[500] text-[12px] md:text-[14px] text-[#475156]">2 items &nbsp;•&nbsp; Order Placed in 23 Apr, 2025 at 7:32 PM</p>
            </div>
            <div className="text-right mt-2 md:mt-0 font-poppins font-[700] text-[18px] md:text-[20px]">Rs.81,000/=</div>
          </div>

          {TrackItem.map((item) => (
            <div
              key={item.id}
              className="bg-[#FAFAFA] mb-3 p-3 md:p-5 rounded-[15px] flex flex-col sm:flex-row items-center justify-between gap-5"
            >
              {/* Left - Image and Info */}
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

              {/* Middle - Price */}
              <div className="font-inter font-[400] text-[12px] md:text-[14px] text-end w-full sm:w-auto">
                <div className="w-[100px] text-end">
                  Rs.{item.price.toLocaleString()}/=
                </div>
              </div>

            </div>
          ))}

          <div className="mb-28 mt-7 overflow-hidden">
            <p className="font-poppins font-[600] text-[13px] md:text-[14px] text-[#475156] mb-6">Order expected arrival <span className="font-[600] text-[#000000]">05 May, 2025</span></p>

            <div class="items-center w-[105%] md:w-[115%] ml-[5%]">
              <ol class="flex">
                {steps.map((item, index) => (
                  <>
                    <li key={index} class={`after:content-[''] ${item.type === 'end' ? 'flex w-full items-center' : 'flex w-full items-center text-orange-500 after:w-full after:h-2 after:ml-[-2%] after:mr-[-2%] after:z-[1] after:inline-block'} ${item.doneStatus === 'end' ? 'after:bg-orange-200' : item.done ? 'after:bg-orange-500' : 'after:bg-orange-200'}`}>
                      <span class={`flex flex-col items-center justify-center w-6 h-6 rounded-full border-2 text-white shrink-0 z-[2] ${item.type === 'center' && item.done ? 'border-white bg-orange-500' : item.type === 'end' && item.done ? 'border-white bg-orange-500' : item.type === 'start' && item.done ? 'border-orange-500 bg-orange-500' : 'border-orange-500 bg-white'}`}>
                        {item.doneStatus === 'end' ? '' : item.done ? <Check className="w-4 h-4" /> : ''}

                        <div className={`absolute mt-28 text-[#000000] flex flex-col items-center gap-1 ${item.done ? 'opacity-100' : 'opacity-50'}`}>
                          <img src={item.image} className="w-7 h-7" alt="" />
                          <span className='font-poppins font-[500] text-[10px] sm:text-[12px] md:text-[14px]'>{item.label}</span>
                        </div>
                      </span>
                    </li>
                  </>
                ))}
              </ol>
            </div>


          </div>

          <div className="">
            <h4 className="font-poppins font-[600] text-[14px] md:text-[16px] text-[#191C1F] mb-4">Order Activity</h4>
            <ul className="space-y-3 text-[14px] text-[#333]">
              {TrackList.map((item) => (
                <li key={item.id} className="flex items-center gap-3">
                  <div>
                    <img className="min-w-10 min-h-10" src={item.image} alt="" />
                  </div>
                  <div className='flex flex-col gap-1'>
                    <span className="font-poppins font-[500] text-[12px] md:text-[14px] text-[#191C1F]">{item.title}</span>
                    <span className="font-poppins font-[400] text-[12px] md:text-[14px] text-[#D8D8D8]">{item.date}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}
