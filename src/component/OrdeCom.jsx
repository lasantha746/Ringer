import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';


export default function OrdeCom({ setActiveTab }) {

  return (
    <div className="space-y-6">
      {/* Recent Orders */}
      <div>
        <h3 className="font-poppins font-[600] text-[16px] md:text-[18px] mb-5">Order History</h3>
        <div className="space-y-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((_, i) => (
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
