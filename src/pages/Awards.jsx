import { useState } from 'react';

export default function Awards() {


  return (
    <div className="flex flex-col justify-center items-center min-h-screen mx-auto bg-gradient-to-br from-customBlue/10 to-customOrange/10 animate-fadeIn">
      <div className="flex flex-col items-center gap-6 p-10 rounded-xl shadow-lg bg-white/80 backdrop-blur-md">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-customOrange animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" />
        </svg>
        <span className="text-3xl md:text-4xl text-customOrange font-bold text-center drop-shadow-lg">This page is under construction.<br />Stay tuned!</span>
      </div>
    </div>
  );
} 