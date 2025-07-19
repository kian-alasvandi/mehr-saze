import { useState, lazy, Suspense } from 'react';
import { Blinds, Cctv, DoorOpen, SquareParking, Store, Construction } from 'lucide-react';
import { Link } from 'react-router-dom';
const ConsultationModal = lazy(() => import('./ConsultationModal'));

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      className='font-iransans bg-hero-pattern relative z-10 flex min-h-[90vh] items-center bg-cover bg-center'
      dir='rtl'
    >
      <div className='mx-auto max-w-6xl space-y-6 px-5 text-center text-white md:space-y-8'>
        {/* آیکون بالا */}
        <div className='animate-fade-up flex justify-center'>
          <Construction className='h-16 w-16 text-blue-300' />
        </div>

        {/* عنوان */}
        <h1 className='animate-fade-up text-3xl leading-tight font-extrabold md:text-5xl'>
          هوشمندسازی ساختمان با <span className='text-blue-400'>مهر سازه</span>
        </h1>

        {/* توضیح */}
        <p className='animate-fade-up mx-auto max-w-2xl text-base leading-relaxed text-white/90 md:text-lg'>
          ارائه خدمات نصب کرکره برقی، دوربین مداربسته، جک پارکینگی و درب اتوماتیک با بهترین کیفیت و
          قیمت مناسب.
        </p>

        {/* دکمه‌ها */}
        <div className='animate-fade-up flex flex-wrap justify-center gap-4'>
          <Link
            to='/محصولات'
            className='rounded-xl bg-gradient-to-r from-blue-500 to-blue-700 px-6 py-2 text-base font-semibold text-white shadow-md transition-all hover:scale-105 hover:shadow-lg'
          >
            مشاهده خدمات
          </Link>

          <button
            onClick={() => setIsModalOpen(true)}
            className='flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-2 text-base font-semibold text-white shadow-lg transition hover:scale-105 hover:bg-blue-700'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M8 10h.01M12 10h.01M16 10h.01M21 16.5A2.5 2.5 0 0118.5 19h-13A2.5 2.5 0 013 16.5v-9A2.5 2.5 0 015.5 5h13A2.5 2.5 0 0121 7.5v9z'
              />
            </svg>
            درخواست مشاوره سریع
          </button>
        </div>

        {/* آیکون‌های خدمات */}
        <div className='animate-fade-up mt-6 flex flex-wrap justify-center gap-6 md:gap-10'>
          {[
            ['درب اتوماتیک', <DoorOpen size={28} />],
            ['دوربین مداربسته', <Cctv size={28} />],
            ['کرکره برقی', <Blinds size={28} />],
            ['جک پارکینگی', <SquareParking size={28} />],
            ['سایبان برقی', <Store size={28} />],
          ].map(([label, icon], idx) => (
            <div key={idx} className='flex flex-col items-center transition-all hover:scale-105'>
              <div className='mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 shadow-inner'>
                {icon}
              </div>
              <span className='text-sm font-medium text-white md:text-base'>{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* مودال */}
      {isModalOpen && (
        <Suspense fallback={null}>
          <ConsultationModal onClose={() => setIsModalOpen(false)} />
        </Suspense>
      )}
    </section>
  );
};

export default Hero;
