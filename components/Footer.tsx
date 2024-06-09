import React from 'react';
import Image from 'next/image';
import f1 from "../Pictures/Frame (3).png";
import f2 from "../Pictures/Frame (4).png";
import f3 from "../Pictures/Frame (5).png";
interface Props {
  darkMode: boolean;
}
const Footer= ({ darkMode }: Props) => {
  return (
    <footer className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'} py-8`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <div className="flex items-center mb-2">
              <Image src={f1} alt="uifry logo" className="w-5 h-5 mr-2" />
              <h2 className="text-2xl font-bold">uifry</h2>
            </div>
            <div className="flex items-center mb-2">
              <Image src={f2} alt="Email icon" className="w-5 h-5 mr-2" />
              <p>Help@Frybix.com</p>
            </div>
            <div className="flex items-center">
              <Image src={f3} alt="Phone icon" className="w-5 h-5 mr-2" />
              <p>+1 234 456 678 89</p>
            </div>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold">Links</h3>
            <ul className="mt-2">
              <li className={`${darkMode ? 'hover:text-red-500' : 'hover:text-red-500'}`}>Home</li>
              <li className={`${darkMode ? 'hover:text-red-500' : 'hover:text-red-500'}`}>About Us</li>
              <li className={`${darkMode ? 'hover:text-red-500' : 'hover:text-red-500'}`}>Booking</li>
              <li className={`${darkMode ? 'hover:text-red-500' : 'hover:text-red-500'}`}>Blog</li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold">Legal</h3>
            <ul className="mt-2">
              <li className={`${darkMode ? 'hover:text-red-500' : 'hover:text-red-500'}`}>Terms Of Use</li>
              <li className={`${darkMode ? 'hover:text-red-500' : 'hover:text-red-500'}`}>Privacy Policy</li>
              <li className={`${darkMode ? 'hover:text-red-500' : 'hover:text-red-500'}`}>Cookie Policy</li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold">Product</h3>
            <ul className="mt-2">
              <li className={`${darkMode ? 'hover:text-red-500' : 'hover:text-red-500'}`}>Take Tour</li>
              <li className={`${darkMode ? 'hover:text-red-500' : 'hover:text-red-500'}`}>Live Chat</li>
              <li className={`${darkMode ? 'hover:text-red-500' : 'hover:text-red-500'}`}>Reviews</li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <div className="mt-2 flex">
              <input
                type="email"
                placeholder="Your Email"
                className={`p-2 border ${darkMode ? 'border-gray-700 bg-gray-800 text-white' : 'border-gray-300 bg-white text-gray-800'} rounded-l-md`}
              />
              <button className={`p-2 ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-black hover:bg-gray-700'} text-white rounded-r-md`}>
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>Copyright 2022 Uifry.com All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
