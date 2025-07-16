import { useState, useRef, useEffect } from 'react';
import { Menu, X, Search, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const searchRef = useRef(null);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  const products = [
    { id: 'کرکره-برقی', name: 'کرکره برقی' },
    { id: 'دوربین-مداربسته', name: 'دوربین مداربسته' },
    { id: 'جک-پارکینگی', name: 'جک پارکینگی' },
    { id: 'سایبان-برقی', name: 'سایبان برقی' },
    { id: 'درب-اتوماتیک', name: 'درب اتوماتیک' },
  ];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const headerBgClass = isHomePage ? 'text-white' : 'bg-white text-black shadow';
  const glassBg = isHomePage
    ? 'absolute inset-0 z-[-1] border-b border-white/30 bg-gradient-to-b from-white/20 to-white/5 shadow-inner backdrop-blur-lg backdrop-saturate-150'
    : '';

  const Logo = () => (
    <div className='flex items-center gap-2'>
      <img src='/images/logo.webp' alt='لوگو' className='h-10 w-auto rounded-md object-contain' />
      <span className='text-lg font-extrabold'>
        <span>مهر</span> <span>سازه</span>
      </span>
    </div>
  );

  const DesktopMenu = () => (
    <nav className='flex items-center gap-6'>
      <Link to='/' className='text-base font-semibold transition hover:text-blue-500'>
        خانه
      </Link>
      <div className='group relative'>
        <button className='flex items-center gap-1 text-base font-semibold transition hover:text-blue-500'>
          خدمات <ChevronDown size={16} />
        </button>
        <div className='absolute top-full right-0 z-50 hidden min-w-[280px] translate-y-2 rounded-xl border border-gray-200 bg-white p-4 shadow-xl transition-all duration-300 group-hover:block group-hover:translate-y-0'>
          <div className='grid grid-cols-1 gap-3'>
            {products.map((p) => (
              <Link
                key={p.id}
                to={`/${p.id}`}
                className='flex items-center gap-3 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-blue-600'
              >
                <span className='inline-block rounded-full bg-blue-100 p-1 text-blue-600'>
                  <ChevronDown size={18} />
                </span>
                {p.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Link to='/نمونه-کارها' className='text-base font-semibold transition hover:text-blue-500'>
        نمونه‌کارها <span className='text-xs text-orange-400'>(به‌زودی)</span>
      </Link>
      <a href='/درباره-ما' className='text-base font-semibold transition hover:text-blue-500'>
        درباره ما
      </a>
      <a href='/تماس-با-ما' className='text-base font-semibold transition hover:text-blue-500'>
        تماس با ما
      </a>
    </nav>
  );

  const SearchModal = () => (
    <div
      className='fixed inset-0 z-[999] flex items-center justify-center bg-black/40 backdrop-blur-sm'
      dir='rtl'
    >
      <div ref={searchRef} className='w-[90%] max-w-md rounded-lg bg-white px-6 py-4 shadow-lg'>
        <div className='flex items-center gap-3'>
          <Search size={20} className='text-gray-600' />
          <input
            type='text'
            placeholder='جستجو کنید...'
            className='w-full border-none text-right text-sm text-gray-800 outline-none'
            autoFocus
          />
          <button onClick={() => setIsSearchOpen(false)}>
            <X size={20} className='text-gray-500 hover:text-red-500' />
          </button>
        </div>
      </div>
    </div>
  );

  const MobileMenu = () => (
    <div className='animate-slide-in fixed top-0 right-0 z-50 flex h-full w-64 flex-col gap-6 bg-white p-6 text-black shadow-lg'>
      <div className='flex justify-start'>
        <button onClick={() => setIsMenuOpen(false)}>
          <X size={24} />
        </button>
      </div>

      <Link to='/' onClick={() => setIsMenuOpen(false)} className='transition hover:text-blue-600'>
        خانه
      </Link>

      <button
        onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
        className='text-right font-semibold text-blue-700'
      >
        خدمات
      </button>
      {isMobileProductsOpen && (
        <div className='ml-4 space-y-2'>
          {products.map((p) => (
            <Link
              to={`/محصولات/${p.id}`}
              key={p.id}
              onClick={() => setIsMenuOpen(false)}
              className='block text-sm text-gray-700 hover:text-blue-600'
            >
              {p.name}
            </Link>
          ))}
        </div>
      )}

      <Link
        to='/نمونه-کارها'
        onClick={() => setIsMenuOpen(false)}
        className='transition hover:text-blue-600'
      >
        نمونه‌کارها <span className='text-xs text-orange-500'>(به‌زودی)</span>
      </Link>
      <a href='/درباره-ما' className='transition hover:text-blue-600'>
        درباره ما
      </a>
      <a href='/تماس-با-ما' className='transition hover:text-blue-600'>
        تماس با ما
      </a>

      <div className='flex items-center gap-2'>
        <Search size={20} className='text-gray-600' />
        <input
          type='text'
          placeholder='جستجو...'
          className='w-full rounded-md border border-gray-300 px-3 py-2 text-right shadow'
        />
      </div>
    </div>
  );

  return (
    <>
      <header className={`font-iransans sticky top-0 z-50 px-6 py-4 ${headerBgClass}`} dir='rtl'>
        {isHomePage && <div className={glassBg} />}
        <div className='relative mx-auto max-w-6xl'>
          <div className='flex items-center justify-between md:hidden'>
            <button onClick={() => setIsMenuOpen(true)}>
              <Menu size={28} />
            </button>
            <Logo />
          </div>
          <div className='hidden items-center justify-between md:flex'>
            <Logo />
            <DesktopMenu />
            <div className='flex items-center gap-3'>
              <button
                onClick={() => setIsSearchOpen(true)}
                className='rounded-full p-2 transition hover:ring-2 hover:ring-blue-400'
              >
                <Search size={20} />
              </button>
              <button className='flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-sm backdrop-blur-sm transition hover:bg-white/20 hover:text-blue-500 hover:shadow'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='h-5 w-5'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 0115 0'
                  />
                </svg>
                ورود / ثبت‌نام
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && <MobileMenu />}
        {isSearchOpen && <SearchModal />}
      </header>
    </>
  );
};

export default Navbar;
