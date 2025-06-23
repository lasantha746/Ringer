import React, { useEffect, useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';


export default function AccoCom() {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="space-y-8">
      {/* Section: Account Details */}
      <div>
        <h3 className="font-poppins font-semibold text-[16px] md:text-[18px] mb-5">Account Management</h3>
        <div className="bg-white rounded-[2rem] p-6 shadow-md">
          <h3 className="font-poppins font-semibold text-[16px] md:text-[18px] mb-5">Account Details</h3>
          <div className='flex flex-col md:flex-row items-center md:items-center gap-6'>
            {/* Left Side - Inputs */}
            <div className="flex-1 space-y-2 w-full">
              <h3 className="pt-1 font-inter font-[500] text-[14px] md:text-[16px] text-[#525252]">Full Name</h3>
              <input
                type="text"
                placeholder="Ex: David Max"
                className="w-full bg-[#FAFAFA] rounded-[24px] px-6 py-4 font-inter font-[500] test-[14px] md:text-[16px] placeholder:text-[#C2C2C2] outline-none"
              />
              <h3 className="pt-1 font-inter font-[500] text-[14px] md:text-[16px] text-[#525252]">Email</h3>
              <input
                type="email"
                placeholder="Ex: samplemail@gmail.com"
                className="w-full bg-[#FAFAFA] rounded-[24px] px-6 py-4 font-inter font-[500] test-[14px] md:text-[16px] placeholder:text-[#C2C2C2] outline-none"
              />
              <h3 className="pt-1 font-inter font-[500] text-[14px] md:text-[16px] text-[#525252]">Contact</h3>
              <input
                type="tel"
                placeholder="Ex: +94 123456789"
                className="w-full bg-[#FAFAFA] rounded-[24px] px-6 py-4 font-inter font-[500] test-[14px] md:text-[16px] placeholder:text-[#C2C2C2] outline-none"
              />
              <div className='pt-5'>
                <button className="bg-black text-white px-8 py-3 rounded-full font-inter font-[500] text-[14px] md:text-[16px]">Save Changes</button>
              </div>
            </div>
            {/* Right Side - Image */}
            <div className="flex flex-col items-center space-y-4 px-5 md:px-10 py-5">
              <img
                src="images/profile.png"
                alt="Profile"
                className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-[1px] border-[#ECECEC]"
              />
              <button className="border border-[#000000] font-poppins text-[12px] md:text-[14px] font-[500] px-5 py-2 rounded-full hover:bg-gray-100 transition">Choose Image</button>
            </div>
          </div>
        </div>
      </div>

      {/* Section: Billing Address */}
      <div>
        <div className="bg-white rounded-[2rem] p-6 shadow-md space-y-2">
          <h3 className="font-poppins font-semibold text-[16px] md:text-[18px] mb-5">Billing Address</h3>

          <h3 className="pt-1 font-inter font-[500] text-[14px] md:text-[16px] text-[#525252]">Street Address</h3>
          <input
            type="text"
            placeholder="Ex: David Max"
            className="w-full bg-[#FAFAFA] rounded-[24px] px-6 py-4 font-inter font-[500] test-[14px] md:text-[16px] placeholder:text-[#C2C2C2] outline-none"
          />
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 space-y-2">
              <h3 className="pt-1 font-inter font-[500] text-[14px] md:text-[16px] text-[#525252]">Country / Region</h3>
              <select className="w-full bg-[#FAFAFA] rounded-[24px] px-6 py-4 font-inter font-[500] test-[14px] md:text-[16px] placeholder:text-[#C2C2C2] outline-none">
                <option>Sri Lanka</option>
                <option>India</option>
                <option>USA</option>
              </select>
            </div>
            <div className="flex-1 space-y-2">
              <h3 className="pt-1 font-inter font-[500] text-[14px] md:text-[16px] text-[#525252]">City</h3>
              <select className="w-full bg-[#FAFAFA] rounded-[24px] px-6 py-4 font-inter font-[500] test-[14px] md:text-[16px] placeholder:text-[#C2C2C2] outline-none">
                <option>Colombo</option>
                <option>Kandy</option>
                <option>Galle</option>
              </select>
            </div>
            <div className="flex-1 space-y-2">
              <h3 className="pt-1 font-inter font-[500] text-[14px] md:text-[16px] text-[#525252]">Zip Code</h3>
              <input
                type="text"
                placeholder="Ex: 10011"
                className="w-full bg-[#FAFAFA] rounded-[24px] px-6 py-4 font-inter font-[500] test-[14px] md:text-[16px] placeholder:text-[#C2C2C2] outline-none"
              />
            </div>
          </div>
          <h3 className="pt-1 font-inter font-[500] text-[14px] md:text-[16px] text-[#525252]">Email</h3>
          <input
            type="email"
            placeholder="Ex: samplemail@gmail.com"
            className="w-full bg-[#FAFAFA] rounded-[24px] px-6 py-4 font-inter font-[500] test-[14px] md:text-[16px] placeholder:text-[#C2C2C2] outline-none"
          />
          <h3 className="pt-1 font-inter font-[500] text-[14px] md:text-[16px] text-[#525252]">Contact</h3>
          <input
            type="tel"
            placeholder="Ex: +94 123456789"
            className="w-full bg-[#FAFAFA] rounded-[24px] px-6 py-4 font-inter font-[500] test-[14px] md:text-[16px] placeholder:text-[#C2C2C2] outline-none"
          />
          <div className='pt-5'>
            <button className="bg-black text-white px-8 py-3 rounded-full font-inter font-[500] text-[14px] md:text-[16px]">Save Changes</button>
          </div>
        </div>
      </div>

      {/* Section: Change Password */}
      <div>
        <div className="bg-white rounded-[2rem] p-6 shadow-md space-y-2">
          <h3 className="font-poppins font-semibold text-[16px] md:text-[18px] mb-5">Change Password</h3>

          <h3 className="pt-1 font-inter font-[500] text-[14px] md:text-[16px] text-[#525252]">Current Password</h3>
          <div className="relative">
            <input
              type={showCurrentPassword ? "text" : "password"}
              placeholder="••••••••"
              className="w-full bg-[#FAFAFA] rounded-[24px] px-6 py-4 font-inter font-[500] test-[14px] md:text-[16px] placeholder:text-[#C2C2C2] outline-none"
            />
            <span onClick={() => setShowCurrentPassword(!showCurrentPassword)} className="absolute right-4 top-5 md:top-[20px] cursor-pointer opacity-50">
              {showCurrentPassword ? <Eye size={20} /> : <EyeOff size={20} />}
            </span>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 space-y-2">
              <h3 className="pt-1 font-inter font-[500] text-[14px] md:text-[16px] text-[#525252]">New Password</h3>
              <div className="relative">
                <input
                  type={showNewPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full bg-[#FAFAFA] rounded-[24px] px-6 py-4 font-inter font-[500] test-[14px] md:text-[16px] placeholder:text-[#C2C2C2] outline-none"
                />
                <span onClick={() => setShowNewPassword(!showNewPassword)} className="absolute right-4 top-5 md:top-[20px] cursor-pointer opacity-50">
                  {showNewPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                </span>
              </div>
            </div>
            <div className="flex-1 space-y-2">
              <h3 className="pt-1 font-inter font-[500] text-[14px] md:text-[16px] text-[#525252]">Confirm Password</h3>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full bg-[#FAFAFA] rounded-[24px] px-6 py-4 font-inter font-[500] test-[14px] md:text-[16px] placeholder:text-[#C2C2C2] outline-none"
                />
                <span onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-4 top-5 md:top-[20px] cursor-pointer opacity-50">
                  {showConfirmPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                </span>
              </div>
            </div>
          </div>
          <div className='pt-5'>
            <button className="bg-black text-white px-8 py-3 rounded-full font-inter font-[500] text-[14px] md:text-[16px]">Save Changes</button>
          </div>
        </div>
      </div>

    </div>
  );
}
