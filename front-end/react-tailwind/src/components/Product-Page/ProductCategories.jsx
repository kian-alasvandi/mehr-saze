import { Link } from 'react-router-dom';
import { Camera, PanelTopClose, DoorOpen, Umbrella, Wrench } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const productCategories = [
  {
    title: 'کرکره برقی',
    image: '/images/products/shutter.webp',
    icon: <PanelTopClose size={26} />,
    link: '/کرکره-برقی',
    price: '۶ تا ۱۸ میلیون تومان',
  },
  {
    title: 'دوربین مداربسته',
    image: '/images/products/camera.webp',
    icon: <Camera size={26} />,
    link: '/دوربین-مداربسته',
    price: '۱ تا ۱۰ میلیون تومان',
  },
  {
    title: 'درب اتوماتیک',
    image: '/images/products/door.webp',
    icon: <DoorOpen size={26} />,
    link: '/درب-اتوماتیک',
    price: '۱۰ تا ۳۰ میلیون تومان',
  },
  {
    title: 'جک پارکینگی',
    image: '/images/products/jack.webp',
    icon: <Wrench size={26} />,
    link: '/جک-پارکینگی',
    price: '۸ تا ۲۵ میلیون تومان',
  },
  {
    title: 'سایبان برقی',
    image: '/images/products/canopy.webp',
    icon: <Umbrella size={26} />,
    link: '/سایبان-برقی',
    price: '۵ تا ۲۰ میلیون تومان',
  },
];

const ProductCategories = () => {
  return (
    <>
      <Helmet>
        <title>دسته‌بندی خدمات | مهرسازه</title>
        <meta
          name='description'
          content='معرفی خدمات مهرسازه شامل نصب و راه‌اندازی کرکره برقی، جک پارکینگی، درب اتوماتیک، دوربین مداربسته و سایبان برقی با کیفیت بالا و گارانتی.'
        />
        <meta name='robots' content='index, follow' />
        <link rel='canonical' href='https://mehrsaze.ir/دسته-بندی-خدمات' />
      </Helmet>

      {/* معرفی خدمات */}
      <section className='relative z-10 px-4 py-16' dir='rtl'>
        <div className='animate-fade-in-up mx-auto max-w-6xl overflow-hidden rounded-3xl border border-blue-100 bg-white/60 shadow-xl backdrop-blur-sm transition duration-700'>
          <div className='flex flex-col items-center gap-10 p-6 md:flex-row md:p-12'>
            <div className='w-full max-w-md flex-shrink-0 overflow-hidden rounded-xl shadow-md'>
              <img
                src='/images/products/services-intro.webp'
                alt='معرفی خدمات مهرسازه'
                className='h-full w-full object-cover'
              />
            </div>

            <div className='flex flex-col gap-5 text-gray-800'>
              <h2 className='text-2xl font-extrabold text-blue-700 md:text-3xl'>خدمات مهرسازه</h2>
              <p className='text-sm leading-7 text-gray-700 md:text-base'>
                گروه فنی مهندسی مهرسازه با بیش از یک دهه تجربه در زمینه سیستم‌های حفاظتی و اتوماسیون
                ساختمان، ارائه‌دهنده خدمات حرفه‌ای نصب و راه‌اندازی انواع کرکره برقی، جک پارکینگی،
                درب اتوماتیک، سایبان برقی و دوربین مداربسته می‌باشد.
              </p>
              <p className='text-sm leading-7 text-gray-700 md:text-base'>
                خدمات ما با تجهیزات روز، تیم نصب حرفه‌ای و گارانتی کامل ارائه می‌شود. هدف ما راحتی،
                امنیت و رضایت واقعی شماست.
              </p>
              <div>
                <Link
                  to='/تماس-با-ما'
                  className='inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-2 text-white shadow-md transition hover:scale-105 hover:bg-blue-700'
                >
                  تماس با ما 📞
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* دسته‌بندی محصولات */}
      <section className='bg-white px-4 py-14' dir='rtl'>
        <div className='mx-auto max-w-6xl rounded-3xl border border-blue-100 bg-blue-50/20 p-6 shadow-sm'>
          <h2 className='mb-10 text-center text-3xl font-extrabold text-blue-700'>
            دسته بندی خدمات
          </h2>

          <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
            {productCategories.map((item, index) => (
              <div
                key={index}
                className='group flex flex-col justify-between rounded-xl bg-white p-2 shadow transition duration-300 hover:-translate-y-1 hover:shadow-lg'
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading='lazy'
                  className='h-36 w-full rounded-lg object-cover transition duration-300 group-hover:scale-105'
                />
                <div className='flex flex-col items-center gap-1 py-3 text-center'>
                  <div className='text-blue-600'>{item.icon}</div>
                  <h3 className='text-base font-bold text-gray-700 group-hover:text-blue-700'>
                    {item.title}
                  </h3>
                  <p className='text-sm text-gray-500'>{item.price}</p>
                  <Link
                    to={item.link}
                    className='mt-3 inline-block rounded-full bg-blue-600 px-4 py-1.5 text-sm text-white shadow-sm transition hover:scale-105 hover:bg-blue-700'
                  >
                    دیدن محصول
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* راهنمای انتخاب محصول */}
          <div className='mt-16 rounded-xl bg-white p-6 shadow-inner md:p-10'>
            <h3 className='mb-6 text-center text-xl font-bold text-blue-800'>
              🤔 نمی‌دانید کدام محصول مناسب شماست؟
            </h3>
            <ul className='mb-6 list-disc space-y-3 pr-4 text-sm text-gray-700 md:text-base'>
              <li>
                اگر امنیت برایتان مهم است → <strong>دوربین مداربسته</strong>
              </li>
              <li>
                برای ورود راحت خودرو → <strong>جک پارکینگی</strong>
              </li>
              <li>
                برای محافظت فروشگاه یا پارکینگ → <strong>کرکره برقی</strong>
              </li>
              <li>
                برای کاهش گرما و نور مستقیم → <strong>سایبان برقی</strong>
              </li>
              <li>
                برای تردد پرسرعت و هوشمند → <strong>درب اتوماتیک</strong>
              </li>
            </ul>
            <div className='flex justify-center'>
              <Link
                to='/تماس-با-ما'
                className='rounded-full bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-md transition hover:bg-blue-700'
              >
                دریافت مشاوره رایگان
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductCategories;
