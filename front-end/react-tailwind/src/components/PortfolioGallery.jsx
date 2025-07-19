import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const portfolioImages = [
  '/images/balcony/picture1.webp',
  '/images/balcony/picture2.webp',
  '/images/d-gallery/auto-door-3.webp',
  '/images/d-gallery/auto-blog-1.webp',
  '/images/c-Canopy/gallery-3.webp',
  '/images/c-gallery/gallery-2.webp',
  '/images/j-gallery/jack-6.webp',
];

const PortfolioGallery = () => {
  return (
    <section className='bg-gradient-to-b from-white to-blue-50 py-20' dir='rtl'>
      <div className='relative mx-auto max-w-6xl px-4'>
        <h2 className='font-iransans mb-10 text-center text-3xl font-extrabold text-blue-800'>
          گالری <span className='text-blue-500'>نمونه‌کارهای ما</span>
        </h2>

        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className='!pb-10'
        >
          {portfolioImages.map((src, idx) => (
            <SwiperSlide key={idx}>
              <div className='overflow-hidden rounded-2xl shadow-lg transition-transform hover:scale-105'>
                <img
                  src={src}
                  alt={`نمونه کار ${idx + 1}`}
                  className='h-64 w-full object-cover sm:h-80'
                  loading='lazy'
                />
              </div>
            </SwiperSlide>
          ))}

          {/* دکمه‌های سفارشی ناوبری */}
          <div className='swiper-button-prev !flex !h-10 !w-10 !items-center !justify-center !rounded-full !bg-black/40 !p-3 !text-white shadow-md transition-all duration-300 hover:!bg-black/60' />
          <div className='swiper-button-next !flex !h-10 !w-10 !items-center !justify-center !rounded-full !bg-black/40 !p-3 !text-white shadow-md transition-all duration-300 hover:!bg-black/60' />
        </Swiper>
      </div>
    </section>
  );
};

export default PortfolioGallery;
