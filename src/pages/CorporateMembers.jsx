import { useState } from 'react';
import { members } from '../data';

export default function CorporateMembers() {


  return (
    <div className="min-h-screen  mx-auto pb-12 animate-fadeIn">

      <div className='w-full h-80 border-t-4 border-customPurple relative'>
        <p className="text-6xl text-customBlueq font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap tracking-wider">
        Corporate Members
        </p>
        <img src="/imvse-pc/mockImage.jpg" alt="society" className='w-full h-full object-cover object-[100%_35%]' />
      </div>

      <div className='w-4/5 mx-auto mt-10'>
        {/* Title */}
        <div className="relative ">
          <span className="text-2xl text-white font-bold bg-gradient-to-r from-customBlue to-customPurple px-8 py-4 inline-block ">
            Our Corporate Members
          </span>
          <div className="w-full h-1 bg-gradient-to-r from-customBlue to-customOrange "></div>
        </div>
        {/* Corporate Members 部分 */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Past Sponsors
          </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
              {members.map((member) => (
                <div
                  key={member.id}
                  className="bg-white rounded-lg p-6 flex items-center justify-center hover:transition-shadow duration-300"
                >
                  <img
                    src={member.logo}
                    alt={member.name}
                    className="max-w-full h-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 