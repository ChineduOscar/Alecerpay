'use client';

import { useState } from 'react';
import DashboardNavbar from '@/app/common/DashboardNavbar';
import DashboardSidebar from '@/app/common/DashboardSidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div className='flex w-full h-screen overflow-hidden relative'>
      {/* Desktop Sidebar (hidden on mobile) */}
      <div className='hidden md:flex'>
        <DashboardSidebar
          isCollapsed={isCollapsed}
          setIsCollapsed={setIsCollapsed}
        />
      </div>

      {/* Mobile Drawer Overlay (75% width) */}
      <div
        className={`fixed inset-0 z-60 md:hidden transition-opacity duration-300 ${
          isMobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Dark Backdrop */}
        <div
          className='absolute inset-0 bg-black/50'
          onClick={() => setIsMobileOpen(false)}
        />

        {/* Sidebar Container */}
        <div
          className={`absolute inset-y-0 left-0 bg-[#E6F2FF] transform transition-transform duration-300 ${
            isMobileOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <DashboardSidebar
            isCollapsed={false}
            setIsCollapsed={setIsCollapsed}
            onClose={() => setIsMobileOpen(false)}
          />
        </div>
      </div>

      <div className='flex-1 flex flex-col min-w-0 h-screen'>
        {/* Pass the toggle function to the Navbar */}
        <DashboardNavbar onMenuClick={() => setIsMobileOpen(true)} />

        <div className='flex-1 overflow-y-auto custom-scrollbar'>
          {children}
        </div>
      </div>
    </div>
  );
}
