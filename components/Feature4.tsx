import Image from 'next/image';
import complete from '../Pictures/complete.png';
import user1 from '../Pictures/user1.png';
interface Props {
  darkMode: boolean;
}
const Feature4 = ({ darkMode }: Props) => {
  return (
    <div className={`relative ${darkMode ? 'bg-gray-900' : 'bg-white'} p-8`}>
      <div className="text-center mb-12">
        <h2 className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} text-lg font-bold`}>TESTIMONIALS</h2>
        <h1 className={`${darkMode ? 'text-white' : 'text-gray-900'} text-4xl font-bold mt-2`}>What Our Users Say About Us?</h1>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center relative">
        <div className="relative z-10 flex-1 mt-8 md:mt-0 md:ml-8">
          <div className="relative">
            <Image src={complete} alt="Testimonial background" className="max-w-full h-auto" />
          </div>
        </div>
        <div className="flex-1 z-10 p-8">
          <h3 className={`${darkMode ? 'text-white' : 'text-gray-900'} text-2xl font-bold`}>The Best Financial Accounting App Ever!</h3>
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} mt-4`}>
            “Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
            In ultrices malesuada elit mauris etiam odio. Duis tristique lacus,
            et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse
            sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
            suspendisse aliquam.”
          </p>
          <div className="flex items-center mt-4">
            <Image src={user1} alt="Nick Jonas" className="w-10 h-10 rounded-full border-4 border-white" />
            <div className="ml-4">
              <h4 className={`${darkMode ? 'text-white' : 'text-gray-900'} font-bold`}>Nick Jonas</h4>
              <p className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>CEO, Example Company</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature4;
