import { useState } from 'react';
import { Menu, X, Instagram, Facebook, PhoneCall, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const SimpleHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className='sticky top-0 z-50 w-full border-b border-gray-100 bg-gradient-to-l from-blue-100 via-white to-blue-100 shadow-sm'>
      <div className='mx-auto flex max-w-7xl items-center justify-between px-4 py-4' dir='rtl'>
        {/* موبایل: لوگو و همبرگر */}
        <div className='flex w-full items-center justify-between md:hidden'>
          <button
            onClick={() => setIsMenuOpen(true)}
            className='text-gray-800 transition hover:text-blue-700'
          >
            <Menu size={30} />
          </button>

          <Link to='/' className='flex items-center gap-2'>
            <img
              src='/images/logo.webp'
              alt='لوگو'
              className='h-10 w-auto rounded object-contain'
            />
            <span className='text-xl font-extrabold text-black'>مهرسازه</span>
          </Link>
        </div>

        {/* دسکتاپ */}
        <div className='hidden w-full items-center justify-between md:flex'>
          <Link to='/' className='flex items-center gap-2'>
            <img
              src='/images/logo.webp'
              alt='لوگو'
              className='h-11 w-auto rounded-md object-contain'
            />
            <span className='text-2xl font-extrabold tracking-tight text-gray-800'>مهرسازه</span>
          </Link>

          <nav className='flex items-center gap-10 text-[17px] font-bold text-gray-800'>
            <Link to='/' className={isActive('/') ? 'text-blue-700' : 'hover:text-blue-700'}>
              خانه
            </Link>
            <Link
              to='/محصولات'
              className={
                location.pathname.startsWith('/products') ? 'text-blue-700' : 'hover:text-blue-700'
              }
            >
              محصولات
            </Link>
            <Link
              to='/نمونه-کارها'
              className={isActive('/نمونه-کارها') ? 'text-blue-700' : 'hover:text-blue-700'}
            >
              نمونه‌کارها
            </Link>
            <Link
              to='/درباره-ما'
              className={isActive('/contact') ? 'text-blue-700' : 'hover:text-blue-700'}
            >
              درباره ما
            </Link>
            <Link
              to='/تماس-با-ما'
              className={isActive('/contact') ? 'text-blue-700' : 'hover:text-blue-700'}
            >
              تماس با ما
            </Link>
          </nav>

          <div className='flex items-center gap-5'>
            <Link
              to='/درخواست-مشاوره'
              className='rounded-full bg-blue-600 px-6 py-2.5 text-base font-bold text-white shadow-md transition hover:bg-blue-700'
            >
              مشاوره رایگان
            </Link>
            <div className='flex items-center gap-3 text-blue-600'>
              <a href='#' className='hover:text-blue-800'>
                <Instagram size={22} />
              </a>
              <a href='#' className='hover:text-blue-800'>
                <Facebook size={22} />
              </a>
              <a href='tel:021000000' className='hover:text-blue-800'>
                <PhoneCall size={22} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* منوی موبایل با انیمیشن */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 z-[999] flex items-start justify-end bg-black/50 md:hidden'
          >
            <motion.div
              initial={{ x: 300 }}
              animate={{ x: 0 }}
              exit={{ x: 300 }}
              transition={{ duration: 0.3 }}
              className='h-full w-64 rounded-s-xl bg-white p-6 shadow-xl'
              dir='rtl'
            >
              <div className='mb-6 flex items-center justify-between'>
                <span className='text-lg font-bold text-blue-700'>منو</span>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className='text-gray-700 hover:text-red-500'
                >
                  <X size={26} />
                </button>
              </div>

              <div className='flex flex-col gap-5 text-[16px] font-bold text-gray-800'>
                <Link
                  to='/'
                  onClick={() => setIsMenuOpen(false)}
                  className='flex items-center gap-2 hover:text-blue-700'
                >
                  <ChevronRight size={18} /> خانه
                </Link>
                <Link
                  to='/محصولات'
                  onClick={() => setIsMenuOpen(false)}
                  className='flex items-center gap-2 hover:text-blue-700'
                >
                  <ChevronRight size={18} /> محصولات
                </Link>
                <Link
                  to='/نمونه-کارها'
                  onClick={() => setIsMenuOpen(false)}
                  className='flex items-center gap-2 hover:text-blue-700'
                >
                  <ChevronRight size={18} /> نمونه‌کارها
                </Link>
                <Link
                  to='/درباره-ما'
                  onClick={() => setIsMenuOpen(false)}
                  className='flex items-center gap-2 hover:text-blue-700'
                >
                  <ChevronRight size={18} /> درباره ما
                </Link>
                <Link
                  to='/تماس-با-ما'
                  onClick={() => setIsMenuOpen(false)}
                  className='flex items-center gap-2 hover:text-blue-700'
                >
                  <ChevronRight size={18} /> تماس با ما
                </Link>
                <Link
                  to='/درخواست-مشاوره'
                  onClick={() => setIsMenuOpen(false)}
                  className='rounded bg-blue-600 px-4 py-2 text-center text-white transition hover:bg-blue-700'
                >
                  مشاوره رایگان
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default SimpleHeader;
