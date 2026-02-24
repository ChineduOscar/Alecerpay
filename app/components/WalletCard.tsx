import { useState, useEffect } from 'react';
import { Eye, EyeOff, Check } from 'lucide-react';
import Image from 'next/image';
import TrophyIcon from '../assets/icons/TrophyIcon';
import VerifiedIcon from '../assets/icons/VerifiedIcon';
import CopyIcon from '../assets/icons/CopyIcon';

const WalletCard = ({
  wallet,
  globalShow,
}: {
  wallet: any;
  globalShow: boolean;
}) => {
  const [localShow, setLocalShow] = useState(globalShow);
  const [copied, setCopied] = useState(false);
  const accountNumber = '9540395403';

  useEffect(() => {
    setLocalShow(globalShow);
  }, [globalShow]);

  //   Funtion to get the KYC style
  const getKycStyle = (type: string) => {
    switch (type) {
      case 'kyc1':
        return 'bg-[#D9EBFF] text-[#007BFF]';
      case 'kyc2':
        return 'bg-[#E6F9F8] text-[#009387]';
      case 'verified':
        return 'bg-transparent text-[#007BFF]';
      default:
        return '';
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(accountNumber);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className='min-w-64 snap-start bg-white border border-[#E1E7EF] rounded-2xl p-5 flex flex-col shadow-sm '>
      <div className='flex justify-end mb-2'>
        <div
          className={`px-2 py-1 rounded-md text-[8px] font-medium flex items-center gap-1 ${getKycStyle(
            wallet.type
          )}`}
        >
          {wallet.type === 'verified' ? <VerifiedIcon /> : <TrophyIcon />}

          <span>{wallet.kyc}</span>
        </div>
      </div>

      <div className='flex items-center gap-2 mb-4'>
        <div className='relative w-6 h-4 overflow-hidden rounded-sm'>
          <Image src={wallet.flag} alt='flag' fill className='object-cover' />
        </div>
        <span className='text-sm font-normal text-[#65758B]'>
          {wallet.currency}
        </span>
      </div>

      <div className='flex justify-between items-center'>
        <h3 className='text-2xl font-semibold text-[#1A1F23]'>
          {wallet.symbol}
          {localShow ? wallet.balance : '****'}
        </h3>
        <button
          onClick={() => setLocalShow(!localShow)}
          className='text-[#94A3B8] hover:text-[#007AFF] transition-colors cursor-pointer'
        >
          {localShow ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>

      <div className='mt-6 flex items-center gap-2 bg-[#F8FAFC] px-2 py-1 rounded-lg w-fit group transition-all'>
        <span className='text-[11px] font-medium text-[#8B96A1] tracking-wider'>
          ****{accountNumber.slice(-5)}
        </span>

        <button onClick={handleCopy} aria-label='Copy account number'>
          {copied ? (
            <Check
              size={14}
              className='text-[#0DB762] animate-in zoom-in duration-300'
            />
          ) : (
            <div className='cursor-pointer'>
              <CopyIcon />
            </div>
          )}
        </button>
      </div>
    </div>
  );
};

export default WalletCard;
