import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <>
      <footer
        className='font-iransans bg-gradient-to-tr from-blue-800 to-blue-950 py-14 text-white'
        dir='rtl'
      >
        <div className='mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 sm:grid-cols-2 md:grid-cols-3'>
          {/* مهرسازه */}
          <div>
            <h3 className='mb-4 text-lg font-bold'>مهرسازه</h3>
            <p className='text-sm leading-relaxed text-gray-300'>
              مهرسازه با بیش از ۸ سال تجربه در زمینه هوشمندسازی ساختمان، ارائه‌دهنده‌ی خدمات نصب
              کرکره، جک پارکینگی، درب اتوماتیک و سیستم‌های امنیتی است.
            </p>

            {/* شبکه‌های اجتماعی */}
            <div className='mt-4 flex gap-3'>
              <a href='#' className='transition hover:text-blue-300'>
                <Instagram size={20} />
              </a>
              <a href='#' className='transition hover:text-blue-300'>
                <Facebook size={20} />
              </a>
              <a href='#' className='transition hover:text-blue-300'>
                <Twitter size={20} />
              </a>
              <a href='#' className='transition hover:text-blue-300'>
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* لینک‌ها */}
          <div>
            <h4 className='mb-4 text-lg font-bold'>لینک‌های مفید</h4>
            <ul className='space-y-3 text-sm text-gray-300'>
              <li>
                <a href='/' className='transition hover:text-white'>
                  خانه
                </a>
              </li>
              <li>
                <a href='/products' className='transition hover:text-white'>
                  محصولات
                </a>
              </li>
              <li>
                <a href='/portfolio' className='transition hover:text-white'>
                  نمونه‌کارها
                </a>
              </li>
              <li>
                <a href='/contact' className='transition hover:text-white'>
                  تماس با ما
                </a>
              </li>
            </ul>
          </div>

          {/* تماس با ما */}
          <div>
            <h4 className='mb-4 text-lg font-bold'>ارتباط با ما</h4>
            <ul className='space-y-3 text-sm text-gray-300'>
              <li className='flex items-center gap-2'>
                <Phone size={16} />
                09927435734
              </li>
              <li className='flex items-center gap-2'>
                <Mail size={16} />
                info@mehr-saze.ir
              </li>
              <li className='flex items-center gap-2'>
                <MapPin size={16} />
                تهران، خیابان آزادی
              </li>
            </ul>
          </div>
        </div>
      </footer>

      {/* پاورقی */}
      <div className='bg-blue-950 py-4 text-center text-xs text-gray-400'>
        <p>© {new Date().getFullYear()} کلیه حقوق این سایت محفوظ است.</p>
        <p className='mt-1 text-[11px]'>قدرت‌گرفته از تیم توسعه مهرسازه</p>
      </div>
    </>
  );
};

export default Footer;
