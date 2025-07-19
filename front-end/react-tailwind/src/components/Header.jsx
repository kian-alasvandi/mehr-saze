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
    <Link to='/' className='flex items-center gap-2'>
      <img src='/images/logo.webp' alt='لوگو' className='h-11 w-auto rounded-md object-contain' />
      <span className='text-xl font-black tracking-tight'>
        مهر <span className='text-blue-600'>سازه</span>
      </span>
    </Link>
  );

  const DesktopMenu = () => (
    <nav className='flex items-center gap-10 text-base font-semibold'>
      <Link to='/' className='transition hover:text-blue-600'>
        خانه
      </Link>
      <div className='group relative'>
        <Link
          to='/محصولات'
          className='text-white-800 flex items-center gap-1 text-base font-bold transition-all hover:text-blue-600'
        >
          خدمات
          <ChevronDown size={16} className='transition-transform group-hover:rotate-180' />
        </Link>

        <div className='absolute top-full right-0 z-50 hidden min-w-[300px] translate-y-3 rounded-2xl border border-gray-100 bg-white p-4 shadow-xl transition-all duration-300 group-hover:block group-hover:translate-y-0'>
          <ul className='flex flex-col gap-3'>
            {products.map((p) => (
              <li key={p.id}>
                <Link
                  to={`/${p.id}`}
                  className='flex items-center gap-3 rounded-xl px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-blue-50 hover:text-blue-700'
                >
                  <span className='inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600'>
                    {p.id.includes('کرکره') && (
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-5 w-5'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M4 6h16M4 10h16M4 14h16M4 18h16'
                        />
                      </svg>
                    )}
                    {p.id.includes('دوربین') && (
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-5 w-5'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14m0 0v-4m0 4L3 17V7l12 3z'
                        />
                      </svg>
                    )}
                    {p.id.includes('جک') && (
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-5 w-5'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M4 4v16h16V4H4zM10 8h4v8h-4V8z'
                        />
                      </svg>
                    )}
                    {p.id.includes('سایبان') && (
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-5 w-5'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M3 6h18M4 10h16M5 14h14M6 18h12'
                        />
                      </svg>
                    )}
                    {p.id.includes('درب') && !p.id.includes('جک') && (
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-5 w-5'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M12 3v18m-7-7h14'
                        />
                      </svg>
                    )}
                  </span>
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Link to='/نمونه-کارها' className='transition hover:text-blue-600'>
        نمونه‌کارها <span className='text-xs text-orange-500'>(به‌زودی)</span>
      </Link>
      <a href='/درباره-ما' className='transition hover:text-blue-600'>
        درباره ما
      </a>
      <a href='/تماس-با-ما' className='transition hover:text-blue-600'>
        تماس با ما
      </a>
    </nav>
  );

  const SearchModal = () => (
    <div
      className='fixed inset-0 z-[999] flex items-center justify-center bg-black/50 backdrop-blur-sm'
      dir='rtl'
    >
      <div ref={searchRef} className='w-[90%] max-w-md rounded-xl bg-white px-6 py-5 shadow-2xl'>
        <div className='flex items-center gap-4'>
          <Search size={22} className='text-gray-600' />
          <input
            type='text'
            placeholder='جستجو کنید...'
            className='w-full border-none text-right text-base text-gray-800 outline-none'
            autoFocus
          />
          <button onClick={() => setIsSearchOpen(false)}>
            <X size={22} className='text-gray-500 transition hover:text-red-500' />
          </button>
        </div>
      </div>
    </div>
  );

  const MobileMenu = () => (
    <div className='animate-slide-in fixed top-0 right-0 z-50 flex h-full w-72 flex-col bg-white px-5 py-4 text-black shadow-2xl'>
      {/* Top Row */}
      <div className='mb-4 flex items-center justify-between'>
        <Logo />
        <button onClick={() => setIsMenuOpen(false)}>
          <X size={26} />
        </button>
      </div>

      {/* Search Input */}
      <div className='mb-4 flex items-center gap-3 rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 shadow-sm'>
        <Search size={20} className='text-gray-600' />
        <input
          type='text'
          placeholder='جستجو...'
          className='w-full border-none bg-transparent text-right text-base text-gray-700 outline-none'
        />
      </div>

      {/* Links */}
      <nav className='space-y-4 text-[17px] font-medium'>
        <Link
          to='/'
          onClick={() => setIsMenuOpen(false)}
          className='flex items-center gap-3 transition hover:text-blue-600'
        >
          <svg
            className='h-5 w-5 text-blue-500'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z'
            />
          </svg>
          خانه
        </Link>

        {/* Services */}
        <div>
          <button
            onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
            className='flex w-full items-center justify-between text-right font-bold text-blue-700'
          >
            <span className='flex items-center gap-2'>
              <svg
                className='h-5 w-5 text-blue-500'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 5h6M4 10h16M7 15h10'
                />
              </svg>
              خدمات
            </span>
            <ChevronDown
              size={20}
              className={`transition-transform ${isMobileProductsOpen ? 'rotate-180' : ''}`}
            />
          </button>

          {isMobileProductsOpen && (
            <ul className='mt-3 space-y-3 pr-4 text-[16px] font-normal text-gray-800'>
              {products.map((p) => (
                <li key={p.id}>
                  <Link
                    to={`/${p.id}`}
                    onClick={() => setIsMenuOpen(false)}
                    className='flex items-center gap-3 rounded-lg px-3 py-2 transition hover:bg-blue-50 hover:text-blue-700'
                  >
                    <span className='text-blue-500'>
                      {/* آیکون‌ها بر اساس id */}
                      {p.id.includes('کرکره') && (
                        <svg
                          className='h-5 w-5'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M3 6h18M3 10h18M3 14h18'
                          />
                        </svg>
                      )}
                      {p.id.includes('دوربین') && (
                        <svg
                          className='h-5 w-5'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M15 10l4.5-2.5v9L15 14v-4L3 17V7l12 3z'
                          />
                        </svg>
                      )}
                      {p.id.includes('جک') && (
                        <svg
                          className='h-5 w-5'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M4 4h16v16H4z'
                          />
                        </svg>
                      )}
                      {p.id.includes('سایبان') && (
                        <svg
                          className='h-5 w-5'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M3 6h18M4 10h16M5 14h14'
                          />
                        </svg>
                      )}
                      {p.id.includes('درب') && !p.id.includes('جک') && (
                        <svg
                          className='h-5 w-5'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M12 3v18M5 12h14'
                          />
                        </svg>
                      )}
                    </span>
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>

        <Link
          to='/نمونه-کارها'
          onClick={() => setIsMenuOpen(false)}
          className='flex items-center gap-3 transition hover:text-blue-600'
        >
          <svg
            className='h-5 w-5 text-blue-500'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M3 4a1 1 0 011-1h16a1 1 0 011 1v16H3V4z'
            />
          </svg>
          نمونه‌کارها <span className='text-sm text-orange-500'>(به‌زودی)</span>
        </Link>

        <a href='/درباره-ما' className='flex items-center gap-3 transition hover:text-blue-600'>
          <svg
            className='h-5 w-5 text-blue-500'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M12 12c2.5 0 4.5-2 4.5-4.5S14.5 3 12 3 7.5 5 7.5 7.5 9.5 12 12 12zm0 3c-2.5 0-7.5 1.25-7.5 3.75V21h15v-2.25c0-2.5-5-3.75-7.5-3.75z'
            />
          </svg>
          درباره ما
        </a>

        <a href='/تماس-با-ما' className='flex items-center gap-3 transition hover:text-blue-600'>
          <svg
            className='h-5 w-5 text-blue-500'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M3 5h18M3 12h18M3 19h18'
            />
          </svg>
          تماس با ما
        </a>
      </nav>
    </div>
  );

  return (
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
            <button className='flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-base backdrop-blur-sm transition hover:bg-white/20 hover:text-blue-500 hover:shadow'>
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
  );
};

export default Navbar;
