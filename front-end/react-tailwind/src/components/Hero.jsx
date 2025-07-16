import { useState, lazy, Suspense } from 'react';
import { Blinds, Cctv, DoorOpen, SquareParking, Store, Construction } from 'lucide-react';
import { Link } from 'react-router-dom';
const ConsultationModal = lazy(() => import('./ConsultationModal'));

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className='font-iransans relative z-10 flex min-h-[90vh] items-center' dir='rtl'>
      <div className='mx-auto max-w-6xl px-4 text-center text-white'>
        {/* آیکون اصلی بالا */}
        <div className='mb-6 flex justify-center'>
          <Construction className='h-16 w-16 text-blue-300' />
        </div>

        {/* عنوان */}
        <h1 className='mb-3 text-3xl font-extrabold md:text-4xl'>هوشمندسازی ساختمان با مهر سازه</h1>

        {/* توضیح */}
        <p className='mb-6 text-base text-white/90 md:text-lg'>
          ارائه خدمات نصب کرکره برقی، دوربین مداربسته، جک پارکینگی و درب اتوماتیک
        </p>

        {/* دکمه‌ها */}
        <div className='mb-10 flex flex-wrap justify-center gap-4'>
          <Link
            to='/محصولات'
            className='rounded bg-gradient-to-r from-blue-500 to-blue-700 px-6 py-2 text-white shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md'
          >
            مشاهده خدمات
          </Link>

          <button
            onClick={() => setIsModalOpen(true)}
            className='flex items-center gap-2 rounded bg-blue-600 px-6 py-2 text-white shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-blue-700'
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

        {/* آیکون خدمات */}
        <div className='mt-4 flex flex-wrap justify-center gap-10'>
          {[
            ['درب اتوماتیک', <DoorOpen size={36} />],
            ['دوربین مداربسته', <Cctv size={36} />],
            ['کرکره برقی', <Blinds size={36} />],
            ['جک پارکینگی', <SquareParking size={36} />],
            ['سایبان برقی', <Store size={36} />],
          ].map(([label, icon], idx) => (
            <div key={idx} className='flex flex-col items-center transition hover:scale-105'>
              <div className='mb-2 h-10 w-10 text-white'>{icon}</div>
              <span className='text-lg font-semibold text-white'>{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* مودال (lazy load) */}
      {isModalOpen && (
        <Suspense fallback={null}>
          <ConsultationModal onClose={() => setIsModalOpen(false)} />
        </Suspense>
      )}
    </section>
  );
};

export default Hero;
