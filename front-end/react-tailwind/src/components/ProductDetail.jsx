import { useParams } from 'react-router-dom';
import { FaArrowLeft, FaTags, FaCheckCircle } from 'react-icons/fa';

const products = [
  {
    id: 'کرکره-برقی',
    title: 'کرکره برقی',
    description:
      'امنیت، زیبایی و عملکرد در یک محصول! کرکره‌های برقی مهرسازه مناسب برای فروشگاه‌ها، پارکینگ‌ها و ویلاها با انواع تیغه‌های مقاوم.',
    image: '/images/products/canopy.webp',
  },
  {
    id: 'دوربین-مداربسته',
    title: 'دوربین مداربسته',
    description:
      'نظارت دقیق، آرامش همیشگی! با دوربین‌های دید در شب، مقاوم در برابر شرایط مختلف و نصب سریع.',
    image: '/images/camera-main.jpg',
  },
  {
    id: 'درب-اتوماتیک',
    title: 'درب اتوماتیک',
    description:
      'ورودی هوشمند با درب‌های شیشه‌ای یا پارکینگی با سنسورهای حرفه‌ای برای ساختمان‌های مدرن.',
    image: '/images/door-main.jpg',
  },
];

const features = [
  'ضمانت کیفیت ساخت و نصب',
  'سازگار با انواع تیغه‌ها و نماها',
  'قابلیت کنترل با ریموت و موبایل',
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className='py-24 text-center text-2xl font-bold text-red-600'>
        محصولی با این مشخصات یافت نشد.
      </div>
    );
  }

  return (
    <section
      className='font-iransans relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-100 px-4 py-20 text-center'
      dir='rtl'
    >
      {/* محتوا اصلی */}
      <div className='animate-fade-up mx-auto max-w-5xl transition-all duration-700 ease-out'>
        <h1 className='mb-6 text-4xl font-extrabold text-blue-900 sm:text-5xl'>{product.title}</h1>

        <img
          src={product.image}
          alt={product.title}
          className='mx-auto mb-8 w-full max-w-lg rounded-3xl shadow-2xl transition-transform duration-500 hover:scale-[1.03]'
        />

        <p className='mb-10 text-lg leading-relaxed text-gray-700'>{product.description}</p>

        {/* ویژگی‌های اختصاصی کرکره برقی */}
        {id === 'کرکره-برقی' && (
          <>
            <div className='mx-auto mb-10 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3'>
              {features.map((item, index) => (
                <div
                  key={index}
                  className='flex items-center justify-center gap-2 rounded-xl bg-white p-4 shadow-sm hover:shadow-md'
                >
                  <FaCheckCircle className='text-green-500' />
                  <span className='text-sm font-medium text-gray-700'>{item}</span>
                </div>
              ))}
            </div>

            {/* دکمه‌ها */}
            <div className='mt-4 flex flex-col items-center justify-center gap-4 sm:flex-row'>
              <a
                href='/قیمت-کرکره-برقی'
                className='inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-white shadow-lg transition-all hover:scale-105 hover:bg-blue-700'
              >
                <FaTags />
                قیمت لحظه‌ای کرکره برقی
              </a>
              <a
                href='/خدمات-کرکره-برقی'
                className='inline-flex items-center gap-2 rounded-xl border border-blue-600 px-6 py-3 text-blue-600 transition-all hover:scale-105 hover:bg-blue-50'
              >
                <FaArrowLeft />
                خدمات نصب و تعمیرات
              </a>
            </div>
          </>
        )}
      </div>

      {/* افکت شیشه‌ای پشت زمینه */}
      <div className='absolute inset-0 -z-10 bg-white/60 backdrop-blur-sm' />
    </section>
  );
};

export default ProductDetail;
