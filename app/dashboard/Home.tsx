import { useState } from 'react';
import {
  Eye,
  EyeOff,
  Plus,
  ArrowLeftRight,
  Send,
  FileText,
  ArrowUpRight,
  ArrowDownLeft,
  ArrowRightLeft,
} from 'lucide-react';
import WalletCard from '../components/WalletCard';

const DashboardHome = () => {
  const [showAllBalances, setShowAllBalances] = useState(false);

  const wallets = [
    {
      currency: 'NGN',
      balance: '5,280.50',
      symbol: 'N',
      flag: '/ng-flag.png',
      kyc: 'KYC Level 1',
      type: 'kyc1',
    },
    {
      currency: 'USD',
      balance: '3,150.00',
      symbol: '$',
      flag: '/us-flag.png',
      kyc: 'KYC Level 2',
      type: 'kyc2',
    },
    {
      currency: 'GBP',
      balance: '5,280.50',
      symbol: '£',
      flag: '/uk-flag.png',
      kyc: 'KYC Level 2',
      type: 'kyc2',
    },
    {
      currency: 'EUR',
      balance: '4,900.75',
      symbol: '€',
      flag: '/eu-flag.png',
      kyc: 'Verified',
      type: 'verified',
    },
  ];

  const transactions = [
    {
      name: 'John Smith',
      date: 'Today, 2:30 PM',
      amount: '+$250.00',
      status: 'Completed',
      type: 'receive',
      flagImg: '/us-flag.png',
    },
    {
      name: 'Sarah Johnson',
      date: 'Today, 11:15 AM',
      amount: '-$180.00',
      status: 'Pending',
      type: 'convert',
    },
    {
      name: 'Tech Corp Ltd',
      date: 'Yesterday, 4:45 PM',
      amount: '+$500.00',
      status: 'Completed',
      type: 'send',
      flagImg: '/ng-flag.png',
    },
    {
      name: 'Monthly Subscription',
      date: 'Dec 28, 9:00 AM',
      amount: '-£75.50',
      status: 'Reversed',
      type: 'receive',
      flagImg: '/ng-flag.png',
    },
  ];

  const actions = [
    { label: 'Add Money', icon: Plus },
    { label: 'Convert', icon: ArrowLeftRight },
    { label: 'Send', icon: Send },
    { label: 'Create Invoice', icon: FileText },
  ];

  return (
    <div className='py-6 md:py-8 max-w-full mx-auto space-y-5 overflow-y-auto'>
      {/* Heading */}
      <header className='px-4 md:px-8'>
        <h1 className='text-[22px] md:text-3xl font-semibold text-[#1A1F23]'>
          Welcome back, Joy!
        </h1>
        <p className='text-[#65758B] mt-1 md:mt-2'>
          Here's your financial overview
        </p>
      </header>

      {/* Wallet */}
      <section className='w-full mt-8'>
        <div className='px-4 md:px-8 flex justify-between items-center mb-4'>
          <h2 className='text-[20px] md:text-2xl font-semibold text-[#1A1F23]'>
            Your Wallets
          </h2>
          <button
            onClick={() => setShowAllBalances(!showAllBalances)}
            className='flex items-center gap-2 text-sm font-meduim text-[#1A1F23] hover:text-[#007AFF] transition-colors cursor-pointer'
          >
            {showAllBalances ? <EyeOff size={16} /> : <Eye size={16} />}
            <span>{showAllBalances ? 'Hide' : 'Show'}</span>
          </button>
        </div>

        <div className='pl-4 md:pl-8 min-w-0 overflow-hidden'>
          <div className='flex gap-4 overflow-x-auto pb-4 no-scrollbar snap-x'>
            {wallets.map((wallet, i) => (
              <WalletCard
                key={i}
                wallet={wallet}
                globalShow={showAllBalances}
              />
            ))}

            <div className='min-w-64 snap-start bg-[#E6F2FF] border-2 border-dashed border-[#007BFF] rounded-2xl flex flex-col items-center justify-center cursor-pointer group hover:bg-[#F0F7FF] transition-all shadow-[0_2px_4px_0_rgba(199,199,199,0.2)]'>
              <div className='w-10 h-10 flex items-center justify-center text-[#007AFF]'>
                <Plus size={24} />
              </div>
              <span className='mt-3 text-xs text-[#007AFF]'>Add Wallet</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className='mx-4 md:mx-8 px-2 py-4 md:py-6 flex overflow-x-auto no-scrollbar lg:grid lg:grid-cols-4 gap-4 border border-[#E1E7EF] rounded-xl shadow-[0_1px_2px_0_rgba(0,123,255,0.05)]'>
        {actions.map((action, i) => (
          <button
            key={i}
            className='flex flex-row items-center justify-center gap-3 px-6 py-3 min-w-fit lg:flex-col lg:py-5 border border-[#D0E7FF] rounded-xl bg-white hover:bg-blue-50 transition-colors group cursor-pointer'
          >
            <div className='text-[#007AFF]'>
              <action.icon size={20} />
            </div>
            <span className='text-sm font-medium text-[#007BFF] whitespace-nowrap'>
              {action.label}
            </span>
          </button>
        ))}
      </section>

      {/* Transactions */}
      <section className='mx-4 md:mx-8 bg-white border border-[#F1F5F9] rounded-3xl p-4 md:p-6 shadow-sm'>
        <div className='flex justify-between items-center mb-6'>
          <h2 className='md:text-lg font-medium text-[#1A1F23]'>
            Recent Transactions
          </h2>
          <button className='text-[#007AFF] text-xs md:text-sm font-medium hover:underline cursor-pointer'>
            View All
          </button>
        </div>
        <div className='space-y-6'>
          {transactions.map((tx, i) => (
            <div key={i} className='flex items-center justify-between'>
              <div className='flex items-center gap-3 md:gap-4'>
                <div className='relative'>
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      tx.type === 'convert'
                        ? 'bg-[#E5F2FF] text-[#007BFF]'
                        : tx.type === 'receive'
                        ? 'bg-[#00C7B31A] text-[#00C7B3]'
                        : 'bg-[#EF44441A] text-[#EF4444]'
                    }`}
                  >
                    {tx.type === 'convert' ? (
                      <ArrowRightLeft size={18} />
                    ) : tx.type === 'receive' ? (
                      <ArrowDownLeft size={18} />
                    ) : (
                      <ArrowUpRight size={18} />
                    )}
                  </div>

                  {tx.type !== 'convert' && tx.flagImg && (
                    <div className='absolute -bottom-0.5 -right-0.5 w-3 h-2 overflow-hidden shadow-sm'>
                      <img
                        src={tx.flagImg}
                        alt='country flag'
                        className='w-full h-full object-cover'
                      />
                    </div>
                  )}
                </div>

                <div>
                  <h4 className='ftext-sm md:text-base font-medium text-[#1A1F23]'>
                    {tx.name}
                  </h4>
                  <p className='text-xs md:text-sm text-[#94A3B8]'>{tx.date}</p>
                </div>
              </div>

              <div className='text-right'>
                <p
                  className={`text-sm md:text-base font-semibold ${
                    tx.amount.startsWith('+')
                      ? 'text-[#21C45D]'
                      : 'text-[#1A1F23]'
                  }`}
                >
                  {tx.amount}
                </p>
                <p
                  className={`text-xs md:text-sm ${
                    tx.status === 'Completed'
                      ? 'text-[#65758B]'
                      : tx.status === 'Pending'
                      ? 'text-[#DAB440]'
                      : 'text-[#DC2626]'
                  }`}
                >
                  {tx.status}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default DashboardHome;
