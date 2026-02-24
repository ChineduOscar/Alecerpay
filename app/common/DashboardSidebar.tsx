import React from 'react';
import Image from 'next/image';
import {
  LayoutGrid,
  Wallet,
  ArrowLeftRight,
  Send,
  Download,
  Building2,
  CreditCard,
  FileText,
  BarChart3,
  Settings,
  X,
} from 'lucide-react';
import Link from 'next/link';

interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
  onClose?: () => void;
}

const DashboardSidebar = ({
  isCollapsed,
  setIsCollapsed,
  onClose,
}: SidebarProps) => {
  const menuGroups = [
    {
      title: 'MONEY TOOLS',
      items: [
        { name: 'Dashboard', icon: LayoutGrid, active: true },
        { name: 'Wallets', icon: Wallet },
        { name: 'Convert', icon: ArrowLeftRight },
        { name: 'Send Money', icon: Send },
        { name: 'Receive Money', icon: Download },
        { name: 'Withdraw', icon: Building2 },
      ],
    },
    {
      title: 'BUSINESS',
      items: [
        { name: 'Cards', icon: CreditCard },
        { name: 'Invoices', icon: FileText },
      ],
    },
    {
      title: 'SUPPORT',
      items: [
        { name: 'Analytics', icon: BarChart3 },
        { name: 'Settings', icon: Settings },
      ],
    },
  ];

  return (
    <section
      className={`${
        isCollapsed ? 'w-20' : 'w-64'
      } h-screen bg-[#E6F2FF] flex flex-col overflow-hidden transition-all duration-300 border-r border-blue-100`}
    >
      <div
        className={`pt-4 px-6 flex items-start ${
          isCollapsed ? 'justify-center' : 'justify-between'
        }`}
      >
        {!isCollapsed && (
          <Link href='/' onClick={onClose}>
            <div className='w-32'>
              <Image
                src='/logo.png'
                alt='AlecerPay Logo'
                width={130}
                height={32}
                priority
                className='object-contain'
              />
            </div>
          </Link>
        )}

        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className={`hidden md:block p-1 transition-all ${
            isCollapsed ? '' : '-mt-2'
          }`}
        >
          <Image
            src='/toggle-btn.svg'
            alt='Toggle'
            width={20}
            height={20}
            className={`w-5 h-5 cursor-pointer opacity-80 transition-transform ${
              isCollapsed ? 'rotate-180' : ''
            }`}
          />
        </button>

        {/* Mobile Close Button */}
        <button onClick={onClose} className='md:hidden p-2 cursor-pointer'>
          <X className='w-6 h-6 text-[#344256]' />
        </button>
      </div>

      <div className='flex-1 px-3 mt-4 overflow-y-auto custom-scrollbar'>
        {menuGroups.map((group, idx) => (
          <div key={idx} className='border-t border-[#E1E7EF] py-3'>
            {!isCollapsed && (
              <h3 className='px-4 text-xs font-bold text-[#64748B] mb-2'>
                {group.title}
              </h3>
            )}
            <ul className='space-y-0.5'>
              {group.items.map((item) => (
                <li key={item.name}>
                  <Link
                    href='/'
                    className={`flex items-center rounded-lg transition-all mb-1 ${
                      isCollapsed ? 'justify-center py-4' : 'gap-3 px-4 py-3'
                    } ${
                      item.active
                        ? 'bg-[#007AFF] text-white'
                        : 'text-[#64748B] hover:bg-white/60 hover:text-[#007AFF]'
                    }`}
                  >
                    <item.icon size={16} strokeWidth={2} />
                    {!isCollapsed && (
                      <span className='text-sm font-medium'>{item.name}</span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Logout and Help Card */}
      <div className='px-3 mt-auto flex flex-col'>
        <div className='pt-2 mb-4'>
          <button
            className={`flex items-center text-[#DC2626] font-medium hover:bg-red-100 rounded-lg transition-colors w-full cursor-pointer ${
              isCollapsed ? 'justify-center py-3' : 'gap-3 px-4 py-3 text-sm'
            }`}
          >
            <Image
              src='/logout.svg'
              alt='logout'
              width={16}
              height={16}
              className='w-4 h-4'
            />
            {!isCollapsed && 'Logout'}
          </button>
        </div>

        <div className='pb-4'>
          {!isCollapsed ? (
            <div className='bg-[#007BFF] rounded-2xl py-2 px-4 text-white'>
              <div className='rounded-lg flex items-center mb-3'>
                <Image
                  src='/question-tag.svg'
                  alt='Tag'
                  height={20}
                  width={20}
                  className='w-5 h-5'
                />
              </div>
              <p className='text-[12px] font-semibold mb-3'>
                Got some questions, inquiries or need help?
              </p>
              <Link href='#' className='text-[10px] underline text-[#DCFCE7]'>
                Visit AlecerPay Help Desk Here
              </Link>
            </div>
          ) : (
            <div className='flex justify-center'>
              <div className='bg-[#007BFF] p-2 rounded-xl'>
                <Image
                  src='/question-tag.svg'
                  alt='Tag'
                  height={20}
                  width={20}
                  className='w-5 h-5'
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DashboardSidebar;
