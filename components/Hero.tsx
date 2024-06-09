import Image from 'next/image';
import phone from '../Pictures/phone.jpg';
import two from '../Pictures/two.png';
import one from '../Pictures/one.png';
interface Props {
  darkMode: boolean;
}
const Hero = ({ darkMode }: Props) => {
  return (
    <section className={darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left max-w-lg">
          <div className="absolute -top-10 -left-40 w-96 h-96 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 rounded-full filter blur-3xl opacity-30"></div>
          <h1 className="text-5xl font-bold mb-4">Make The Best Financial Decisions</h1>
          <p className="text-lg mb-6">
            Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <button className="bg-black text-white px-14 py-3 rounded-md hover:bg-red-600">Get Started</button>
            <button className="text-black bg-white px-6 py-3 rounded-md hover:bg-gray-100">Watch Video</button>
          </div>
          <div className="mt-14 md:mt-4">
            <Image className="mt-32 mb-12 ml-36" src={two} alt="App Mookup" width={50} height={50} />
          </div>
          <div className="mt-4 md:mt-0">
            <Image className="my-8 ml-8" src={one} alt="Phone" width={250} height={250} />
          </div>
        </div>
        <div className="mt-8 md:mt-0 md:ml-8">
          <Image src={phone} alt="Phone" width={400} height={400} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
