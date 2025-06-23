import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';


export default function DashCom({ setActiveTab }) {

  return (
    <div className="space-y-6">
      {/* Profile Details */}
      <div>
        <h3 className="font-poppins font-[600] text-[16px] md:text-[18px] mb-5">Profile Details</h3>
        <div className="bg-white rounded-[2rem] p-6 md:p-6 shadow-md flex flex-col md:flex-row items-center md:items-start gap-6">
          <img
            src="/images/profile.png"
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-[1px] border-[#ECECEC]"
          />
          <div className="flex-1 space-y-2 font-inter text-[14px] md:text-[16px] text-black">
            <div className="flex gap-2">
              <span className="w-20 text-[#8A8A8A] font-[400]">Name</span>
              <span className="font-[500] w-5">:</span>
              <span className="font-[500]">Sample name</span>
            </div>
            <div className="flex gap-2">
              <span className="w-20 text-[#8A8A8A] font-[400]">Email</span>
              <span className="font-[500] w-5">:</span>
              <span className="font-[500]">sample@gmail.com</span>
            </div>
            <div className="flex gap-2">
              <span className="w-20 text-[#8A8A8A] font-[400]">Address</span>
              <span className="font-[500] w-5">:</span>
              <span className="font-[500]">No.21, Main Street, Colombo</span>
            </div>
            <div className="flex gap-2">
              <span className="w-20 text-[#8A8A8A] font-[400]">Contact</span>
              <span className="font-[500] w-5">:</span>
              <span className="font-[500]">+94 773456789</span>
            </div>
          </div>
          <button onClick={() => setActiveTab('account')} className="bg-[#E1E1E1] hover:bg-gray-300 rounded-full px-5 py-2 font-inter font-[400] text-[12px] md:text-[14px]">
            Edit details
          </button>
        </div>
      </div>

      {/* Recent Orders */}
      <div>
        <h3 className="font-poppins font-[600] text-[16px] md:text-[18px] mb-5">Recent Order History</h3>
        <div className="space-y-4">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="bg-white rounded-[2rem] p-6 flex flex-wrap items-center gap-4 shadow-sm">
              {/* Order ID */}
              <div className="flex flex-col min-w-[20%]">
                <div className="font-inter font-[500] text-[10px] md:text-[12px] text-[#7C7C7C]">
                  Order ID
                </div>
                <div className="font-inter font-[400] text-[14px] md:text-[16px] text-[#000000]">
                  4Y363G73735S
                </div>
              </div>

              {/* Items */}
              <div className="flex flex-col min-w-[20%]">
                <div className="font-inter font-[500] text-[10px] md:text-[12px] text-[#7C7C7C]">
                  Item
                </div>
                <div className="font-inter font-[400] text-[14px] md:text-[16px] text-[#000000]">
                  2 Items
                </div>
              </div>

              {/* Date */}
              <div className="flex flex-col min-w-[20%]">
                <div className="font-inter font-[500] text-[10px] md:text-[12px] text-[#7C7C7C]">
                  Ordered Date
                </div>
                <div className="font-inter font-[400] text-[14px] md:text-[16px] text-[#000000]">
                  2025-04-23
                </div>
              </div>

              {/* Status Button */}
              <div className="min-w-[20%]">
                <button className="bg-[#E1E1E1] hover:bg-gray-300 rounded-full px-5 py-2 font-poppins font-[400] text-[12px] md:text-[14px] whitespace-nowrap">
                  Processing
                </button>
              </div>

              {/* View Details */}
              <div className="">
                <button onClick={() => setActiveTab('track')} className="font-inter font-[400] text-[#ED9E53] hover:underline text-[12px] md:text-[14px] whitespace-nowrap">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
