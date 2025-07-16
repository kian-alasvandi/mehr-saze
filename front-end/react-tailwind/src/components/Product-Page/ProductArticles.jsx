import { Link } from 'react-router-dom';

const articles = [
  {
    title: 'تفاوت کرکره آلومینیومی و پلی‌کربنات',
    description:
      'در این مقاله تفاوت بین دو نوع رایج کرکره برقی را بررسی می‌کنیم و مزایا و معایب هرکدام را توضیح می‌دهیم...',
    image: '/images/blog-shutter.webp',
    link: '/مقاله/تفاوت-کرکره-پلی‌کربنات-و-آلومینیوم',
  },
  {
    title: 'راهنمای انتخاب جک پارکینگی مناسب',
    description:
      'اگر به دنبال خرید جک پارکینگی هستید، این راهنما به شما کمک می‌کند تا بهترین مدل را با توجه به نیاز خود انتخاب کنید...',
    image: '/images/product-5.webp',
    link: '/مقاله/راهنمای-خرید-جک-پارکینگی',
  },
  {
    title: 'نگهداری صحیح سایبان برقی در تابستان',
    description:
      'سایبان‌ها در تابستان تحت فشار نور و گرمای شدید هستند. در این مطلب نکات نگهداری را باهم مرور می‌کنیم...',
    image: '/images/c-Canopy/canopy-bg.webp',
    link: '/مقاله/نگهداری-سایبان-در-تابستان',
  },
];

const ProductArticles = () => {
  return (
    <section className='bg-white px-4 py-16' dir='rtl'>
      <div className='mx-auto max-w-6xl'>
        <h2 className='mb-8 text-center text-2xl font-extrabold text-blue-700'>
          مقالات و آموزش‌های مرتبط با محصولات
        </h2>

        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {articles.map((item, index) => (
            <div
              key={index}
              className='overflow-hidden rounded-xl bg-white shadow transition hover:shadow-lg'
            >
              <img src={item.image} alt={item.title} className='h-40 w-full object-cover' />
              <div className='p-5'>
                <h3 className='mb-2 text-lg font-bold text-blue-700'>{item.title}</h3>
                <p className='text-sm text-gray-600'>{item.description}</p>
                <Link
                  to={item.link}
                  className='mt-4 inline-block text-sm font-bold text-blue-600 hover:underline'
                >
                  ادامه مطلب →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductArticles;
