import React from 'react';
import Image from 'next/image';
import img1 from '../Pictures/Moc.png'; 
import img2 from "../Pictures/cube-02.png"

interface Feature1Props {
  darkMode?: boolean;
}

const Feature1: React.FC<Feature1Props> = ({ darkMode = false }) => {
  return (
    <section className={`py-16 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="container mx-auto flex flex-col md:flex-row items-center px-5">
        <div className="md:w-1/2">
          <div className="flex-1 mt-8 md:mt-0 md:ml-8">
            <Image src={img1} alt="Phone showing app" className="max-w-full h-auto" />
          </div>
        </div>
        <div className="md:w-1/2 md:pl-10 mt-10 md:mt-0">
          <h2 className={`text-4xl font-bold ${darkMode ? 'text-gray-300' : 'text-gray-900'} mb-5`}>Uifry Premium</h2>
          <div className="space-y-4">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="flex items-start space-x-3">
                <Image src={img2} alt="Phone showing app"  className="w-5 h-5" />
                <div>
                  <h3 className={`text-xl font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>Budgeting Intervals</h3>
                  <p className={`text-gray-600 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature1;
