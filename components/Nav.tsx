import Link from 'next/link';
import Image from 'next/image';
import abc from '../Pictures/abc.png';

interface Props {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Nav = ({ darkMode, toggleDarkMode }: Props) => {
  return (
    <header className={`grid grid-cols-9 gap-5 py-4 px-6 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
      <div className="container mx-auto flex justify-start items-center py-4 px-6 col-start-2 col-span-4">
        <div className="flex items-center space-x-2">
          <Image src={abc} alt="Logo" width={30} height={30} className="rounded-md shadow-md" />
          <div className="text-2xl font-bold text-red-500 pr-8">uifry</div>
        </div>
        <nav className="space-x-6 flex justify-start">
          <Link href="/">
            <span className={darkMode ? 'text-white hover:text-red-500' : 'text-gray-800 hover:text-red-500'}>Home</span>
          </Link>
          <Link href="/about">
            <span className={darkMode ? 'text-white hover:text-red-500' : 'text-gray-800 hover:text-red-500'}>About Us</span>
          </Link>
          <Link href="/testimonials">
            <span className={darkMode ? 'text-white hover:text-red-500' : 'text-gray-800 hover:text-red-500'}>Testimonials</span>
          </Link>
          <Link href="/features">
            <span className={darkMode ? 'text-white hover:text-red-500' : 'text-gray-800 hover:text-red-500'}>Features</span>
          </Link>
        </nav>
      </div>
      <div className="col-start-8 col-span-2 flex justify-end items-center">
        <button onClick={toggleDarkMode} className={`text-white size-10 w-32 ${darkMode ? 'bg-black' : 'bg-red-500'} px-6 py-2 rounded-md hover:bg-gray-700`}>
          {darkMode ? 'Light' : 'Dark'}
        </button>
      </div>
    </header>
  );
};

export default Nav;
