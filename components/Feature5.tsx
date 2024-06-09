import Image from 'next/image';
import ready from '../Pictures/RG.png'; 
interface Props {
  darkMode: boolean;
}
const Feature5 = ({ darkMode }: Props) => {  return (
    <div className={`${darkMode ? 'bg-gray-900' : 'bg-white'} p-4 rounded-md`}>
      <div className="flex-1 mt-8 md:mt-0 md:ml-8">
        <Image src={ready} alt="Phone showing app" className="max-w-full h-auto" />
      </div>
    </div>
  );
};

export default Feature5;
