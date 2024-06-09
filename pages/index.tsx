// pages/index.tsx
import DarkModeToggle from '@/components/DarkModeToggle';

const Home = () => {
  return (
    <div className="p-6 transition-colors duration-500 bg-white dark:bg-black dark:text-white">
      <h2 className="text-2xl font-bold">Toggle Dark/Light Mode</h2>
      <p className="mt-4 text-lg">Click the button to toggle between dark and light mode for this page.</p>
      <DarkModeToggle />
    </div>
  );
};

export default Home;