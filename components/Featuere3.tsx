import React from 'react';
import Image from 'next/image';
import phoneImage from '../Pictures/P.png'; 

interface Feature3Props {
  darkMode?: boolean;
}

const Feature3: React.FC<Feature3Props> = ({ darkMode = false }) => {
  return (
    <div className={`flex flex-col md:flex-row items-center justify-center ${darkMode ? 'bg-gray-900' : 'bg-white'} p-8`}>
      <div className="flex-1">
        <h2 className={`text-red-500 text-lg font-bold ${darkMode ? 'text-gray-300' : 'text-black'}`}>ADVANTAGES</h2>
        <h1 className={`text-4xl font-bold mt-2 ${darkMode ? 'text-gray-300' : 'text-black'}`}>Why Choose Uifry?</h1>
        <div className="flex items-center mt-4">
          <div className="bg-red-500 text-white rounded-full p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0a3.97 3.97 0 01-2 0m-4 0a3.97 3.97 0 01-2 0m6 0v1a3 3 0 01-6 0v-1m6 0h-6"
              />
            </svg>
          </div>
          <div className="ml-4">
            <h3 className={`text-xl font-bold ${darkMode ? 'text-gray-300' : 'text-black'}`}>Clever Notifications</h3>
            <p className={`text-gray-500 mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies.
              In Ultrices Malesuada Elit Mauris Etiam Odio. Duis Tristique Lacus,
              Et Blandit Viverra Nisl Velit. Sed Mattis Rhoncus, Diam Suspendisse
              Sit Nunc. Gravida Eu. Lectus Eget Eget Ac Dolor Neque Lorem Sapien.
              Suspendisse Aliquam.
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1 mt-8 md:mt-0 md:ml-8">
        <Image src={phoneImage} alt="Phone showing app" className="max-w-full h-auto" />
      </div>
    </div>
  );
};

export default Feature3;
