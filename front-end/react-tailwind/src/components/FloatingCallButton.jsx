import { Zap } from 'lucide-react';

const FloatingCallButton = () => {
  return (
    <a
      href='tel:09927435734'
      className='fixed right-6 bottom-6 z-[100] flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-700 px-1 text-center text-xs leading-tight text-white shadow-lg transition-transform duration-300 hover:scale-110 md:hidden'
      title='اگه برق می‌خوای، کلیک کن'
    >
      <div className='flex flex-col items-center justify-center'>
        <Zap className='mb-1 h-5 w-5' />
        <span className='block text-[14px]'>
          مشاوره؟
          <br />
          کلیک
        </span>
      </div>
    </a>
  );
};

export default FloatingCallButton;
