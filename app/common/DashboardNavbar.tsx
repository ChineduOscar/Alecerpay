import { Bell, Menu } from 'lucide-react'; // Added Menu icon
import Image from 'next/image';

interface NavbarProps {
  onMenuClick: () => void;
}

const DashboardNavbar = ({ onMenuClick }: NavbarProps) => {
  return (
    <header className='bg-[#FDFDFD] w-full shadow-[0px_2px_10px_-2px_#34425629] sticky top-0 z-50'>
      <div className='flex justify-between md:justify-end items-center px-4 md:px-6 py-3 gap-6'>
        <div className='block md:hidden'>
          <button
            onClick={onMenuClick}
            className='p-2 rounded-md hover:bg-gray-100 cursor-pointer text-[#344256]'
          >
            <Menu className='w-6 h-6' />
          </button>
        </div>

        <div className='flex items-center gap-4 md:gap-6'>
          <div className='flex items-center'>
            <button className='relative p-2 rounded-full hover:bg-gray-100 cursor-pointer group'>
              <Bell className='w-5 h-5 md:w-6 md:h-6 text-[#344256] group-hover:scale-110 transition-transform' />
              <span className='absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white'></span>
            </button>
          </div>

          <div className='flex items-center gap-3 cursor-pointer'>
            <div className='relative w-9 h-9 md:w-10 md:h-10 rounded-full overflow-hidden border border-gray-200 shadow-sm'>
              <Image
                src='/avatar.jpg'
                alt='User Avatar'
                fill
                className='object-cover'
                sizes='40px'
              />
            </div>

            <div className='text-right hidden sm:block'>
              <p className='text-sm font-medium text-[#344256]'>Joy Kaleb</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardNavbar;
