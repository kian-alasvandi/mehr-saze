import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const portfolioImages = [
  '/images/product-1.webp',
  '/images/product-3.webp',
  '/images/product-4.webp',
  '/images/product-5.webp',
  '/images/product-2.webp',
];

const PortfolioGallery = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % portfolioImages.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + portfolioImages.length) % portfolioImages.length);
  };

  return (
    <section className='font-iransans bg-gray-50 py-16' dir='rtl'>
      <div className='mx-auto max-w-5xl px-4 text-center'>
        <h2 className='mb-10 text-2xl font-extrabold text-blue-700'>نمونه‌کارهای ما</h2>

        <div className='relative overflow-hidden rounded-xl shadow-lg'>
          <img
            src={portfolioImages[current]}
            alt={`نمونه‌کار حرفه‌ای شماره ${current + 1}`}
            className='h-72 w-full object-cover sm:h-[400px]'
            loading='lazy'
            fetchPriority='low'
          />

          {/* دکمه‌های قبلی/بعدی */}
          <button
            onClick={prevSlide}
            className='absolute top-1/2 right-2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-blue-700 shadow hover:bg-white'
          >
            <ChevronRight />
          </button>
          <button
            onClick={nextSlide}
            className='absolute top-1/2 left-2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-blue-700 shadow hover:bg-white'
          >
            <ChevronLeft />
          </button>
        </div>

        {/* نقاط پایین اسلایدر */}
        <div className='mt-4 flex justify-center gap-2'>
          {portfolioImages.map((_, idx) => (
            <span
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-2 w-2 cursor-pointer rounded-full transition-all duration-300 ${
                current === idx ? 'w-4 bg-blue-700' : 'bg-gray-400'
              }`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGallery;
