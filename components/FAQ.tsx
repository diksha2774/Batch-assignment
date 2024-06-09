import React from 'react';

interface FAQProps {
  darkMode?: boolean;
}

const FAQ: React.FC<FAQProps> = ({ darkMode = false }) => {
  const faqs = [
    "The Best Financial Accounting App Ever!",
    "Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris."
  ];

  return (
    <section className={`p-8 ${darkMode ? 'bg-gray-800 text-white' : 'bg-red-50'}`}>
      <h1 className={`text-4xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-black'}`}>Frequently Asked Questions</h1>
      <div className="space-y-4">
        {Array(6).fill(0).map((_, index) => (
          <div
            key={index}
            className={`p-6 shadow-lg ${index % 2 === 0 ? (darkMode ? 'bg-gray-200 text-black' : 'bg-white') : 'bg-red-400 text-white'}`}
          >
            <h2 className="text-xl font-bold mb-2">{faqs[0]}</h2>
            <p>{faqs[1]}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
