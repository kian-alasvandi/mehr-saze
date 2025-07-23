import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeftCircle,
  ArrowRightCircle,
  Camera,
  Blinds,
  DoorOpen,
  SquareParking,
  Store,
} from 'lucide-react';
import { motion } from 'framer-motion';

const products = [
  {
    title: 'دوربین مداربسته',
    image: '/images/product-1.webp',
    description: 'امنیت را با نصب دوربین‌های پیشرفته در خانه و محل کار تجربه کنید.',
    link: '/دوربین-مداربسته',
    icon: <Camera size={18} />,
  },
  {
    title: 'کرکره برقی',
    image: '/images/product-2.webp',
    description: 'کرکره‌های برقی مقاوم و بی‌صدا مناسب برای فروشگاه‌ها و پارکینگ.',
    link: '/کرکره-برقی',
    icon: <Blinds size={18} />,
  },
  {
    title: 'درب اتوماتیک',
    image: '/images/product-3.webp',
    description: 'ورود و خروج آسان و بدون تماس با درب‌های اتوماتیک هوشمند.',
    link: '/درب-اتوماتیک',
    icon: <DoorOpen size={18} />,
  },
  {
    title: 'جک پارکینگی',
    image: '/images/product-5.webp',
    description: 'سیستم جک پارکینگی با قدرت بالا و کارکرد بی‌صدا.',
    link: '/جک-پارکینگی',
    icon: <SquareParking size={18} />,
  },
  {
    title: 'سایبان برقی',
    image: '/images/product-4.webp',
    description: 'سایبان‌های برقی اتوماتیک با قابلیت کنترل از راه دور.',
    link: '/سایبان-برقی',
    icon: <Store size={18} />,
  },
  {
    title: 'شیشه بالکنی',
    image: '/images/products/balcony.webp',
    description: 'شیشه‌های مدرن برای تراس و بالکن با ایمنی بالا.',
    link: '/نمونه-کارها',
    icon: <Store size={18} />,
  },
  {
    title: 'بالابر',
    image: '/images/products/elevator.webp',
    description: 'بالابرهای مطمئن مناسب برای منازل و ساختمان‌های چندطبقه.',
    link: '/نمونه-کارها',
    icon: <Store size={18} />,
  },
];

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

const ProductSlider = () => {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % products.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + products.length) % products.length);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;

    if (distance > 50) nextSlide();
    else if (distance < -50) prevSlide();

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section className='bg-gradient-to-b from-sky-50 to-blue-100 py-20' dir='rtl'>
      <div className='mx-auto max-w-6xl px-4'>
        <motion.div
          className='relative mb-10 flex items-center justify-center'
          initial='hidden'
          whileInView='visible'
          variants={fadeUpVariant}
          viewport={{ once: true }}
        >
          <span className='absolute top-1/2 right-0 hidden h-0.5 w-1/4 bg-blue-200 sm:block' />
          <span className='absolute top-1/2 left-0 hidden h-0.5 w-1/4 bg-blue-200 sm:block' />
          <span className='mx-2 text-2xl font-extrabold text-blue-700 sm:text-3xl'>
            <span className='mx-1'>⮜</span> خدمات ما <span className='mx-1'>⮞</span>
          </span>
        </motion.div>

        <motion.div
          className='relative overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 sm:hidden'
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.img
            key={products[current].image}
            src={products[current].image}
            alt={products[current].title}
            className='h-100 w-full rounded-t-3xl object-cover sm:h-52'
            loading='lazy'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          />
          <div className='flex flex-col justify-between p-5'>
            <div>
              <div className='mb-2 flex items-center gap-2 font-semibold text-blue-700'>
                {products[current].icon}
                <h3 className='text-lg'>{products[current].title}</h3>
              </div>
              <p className='text-sm leading-relaxed text-gray-600'>
                {products[current].description}
              </p>
            </div>
            <Link
              to={products[current].link}
              className='mt-4 inline-block w-fit rounded-full bg-blue-600 px-5 py-2 text-sm text-white shadow-md transition hover:scale-105 hover:bg-blue-700'
            >
              مشاهده محصول
            </Link>
          </div>

          <button
            onClick={prevSlide}
            className='absolute top-1/2 right-3 -translate-y-1/2 rounded-full bg-white/80 p-1 text-blue-800 shadow-lg transition hover:bg-white'
          >
            <ArrowRightCircle size={28} strokeWidth={2.2} />
          </button>
          <button
            onClick={nextSlide}
            className='absolute top-1/2 left-3 -translate-y-1/2 rounded-full bg-white/80 p-1 text-blue-800 shadow-lg transition hover:bg-white'
          >
            <ArrowLeftCircle size={28} strokeWidth={2.2} />
          </button>
        </motion.div>

        <div className='mt-4 flex justify-center gap-2 sm:hidden'>
          {products.map((_, idx) => (
            <span
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-2 w-2 cursor-pointer rounded-full transition-all duration-300 ${
                current === idx ? 'w-4 bg-blue-700' : 'bg-gray-400'
              }`}
            ></span>
          ))}
        </div>

        <motion.div
          className='mt-12 hidden grid-cols-1 gap-8 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              className='group rounded-3xl bg-white shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl'
              variants={fadeUpVariant}
              custom={index}
            >
              <div className='relative h-52 overflow-hidden rounded-t-3xl'>
                <img
                  src={product.image}
                  alt={product.title}
                  className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-105'
                  loading='lazy'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/40 to-transparent' />
              </div>
              <div className='flex h-[230px] flex-col justify-between p-5'>
                <div>
                  <div className='mb-2 flex items-center gap-2 font-semibold text-blue-700'>
                    {product.icon}
                    <h3 className='text-lg'>{product.title}</h3>
                  </div>
                  <p className='text-sm leading-relaxed text-gray-600'>{product.description}</p>
                </div>
                <Link
                  to={product.link}
                  className='mt-4 inline-block w-fit rounded-full bg-blue-600 px-5 py-2 text-sm text-white shadow-md transition hover:scale-105 hover:bg-blue-700'
                >
                  مشاهده محصول
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductSlider;
