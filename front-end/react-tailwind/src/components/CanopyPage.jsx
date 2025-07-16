import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Sun, Umbrella, Wrench, ShieldCheck } from 'lucide-react';

const CanopyPage = () => {
  const features = [
    {
      icon: <Umbrella size={36} className='text-blue-600' />,
      title: 'محافظت در برابر آفتاب و باران',
      description: 'استفاده از سایبان برقی در تمام فصول سال برای تراس، حیاط و مغازه.',
    },
    {
      icon: <Sun size={36} className='text-blue-600' />,
      title: 'کنترل نور و دما',
      description: 'جلوگیری از ورود نور شدید و کاهش گرمای فضای زیر سایبان.',
    },
    {
      icon: <ShieldCheck size={36} className='text-blue-600' />,
      title: 'مقاومت بالا',
      description: 'پارچه‌های ضد آب، مقاوم در برابر UV، رطوبت و وزش باد.',
    },
    {
      icon: <Wrench size={36} className='text-blue-600' />,
      title: 'نصب تخصصی',
      description: 'نصب سریع توسط تیم حرفه‌ای با گارانتی و خدمات پس از فروش.',
    },
  ];

  const faq = [
    {
      question: 'سایبان برقی برای چه مکان‌هایی مناسب است؟',
      answer: 'برای تراس، حیاط، ویلا، کافی‌شاپ، مغازه و فضای باز قابل استفاده است.',
    },
    {
      question: 'آیا سایبان در برابر باد مقاوم است؟',
      answer: 'بله، سازه‌های آلومینیومی و پارچه مقاوم، دوام بالایی در برابر باد دارند.',
    },
    {
      question: 'نصب سایبان چقدر زمان می‌برد؟',
      answer: 'نصب معمولاً در یک روز کاری انجام می‌شود بسته به شرایط محل.',
    },
    {
      question: 'کنترل سایبان به چه صورت است؟',
      answer: 'سایبان‌ها معمولاً دارای ریموت کنترل و موتور برقی با قابلیت تنظیم زاویه هستند.',
    },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <HelmetProvider>
      <>
        <Helmet>
          <title>سایبان برقی | فروش، قیمت و نصب | مهرسازه</title>
          <meta
            name='description'
            content='سایبان برقی اتوماتیک مخصوص ویلا، تراس، حیاط و مغازه با نصب حرفه‌ای، پارچه مقاوم در برابر نور، باد و باران. کنترل با ریموت. مهرسازه.'
          />
          <link rel='canonical' href='https://mehr-saze.ir/سایبان-برقی' />
          <script type='application/ld+json'>{JSON.stringify(faqSchema)}</script>
        </Helmet>

        {/* هدر تصویری */}
        <section
          className='relative h-110 w-full overflow-hidden text-white'
          style={{
            backgroundImage: "url('/images/c-Canopy/canopy-bg.webp')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          dir='rtl'
        >
          <div className='absolute inset-0 bg-black/50'></div>
          <div className='relative z-10 flex h-full items-center justify-end px-6 md:px-16'>
            <div className='max-w-lg text-right'>
              <h1 className='mb-4 text-3xl font-extrabold md:text-4xl'>فروش و نصب سایبان برقی</h1>
              <p className='leading-7 text-gray-200'>
                سایبان‌های برقی مدرن با طراحی شیک، پارچه مقاوم و موتور برقی با ریموت، مخصوص تراس،
                مغازه، ویلا و حیاط.
              </p>
            </div>
          </div>
        </section>

        {/* ویژگی‌ها */}
        <section className='font-iransans bg-white px-4 py-16' dir='rtl'>
          <div className='mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4'>
            {features.map((item, index) => (
              <div
                key={index}
                className='group rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-md transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:bg-blue-50/70 hover:shadow-xl'
              >
                <div className='mb-4 flex justify-center text-blue-600 transition group-hover:scale-110'>
                  {item.icon}
                </div>
                <h3 className='mb-2 text-lg font-bold text-blue-800 group-hover:text-blue-900'>
                  {item.title}
                </h3>
                <p className='text-sm text-gray-600 group-hover:text-gray-800'>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* جدول قیمت */}
        <section className='font-iransans bg-gray-50 px-4 py-16' dir='rtl'>
          <div className='mx-auto max-w-6xl'>
            <h2 className='mb-8 text-center text-2xl font-extrabold text-blue-700'>
              لیست قیمت سایبان برقی
            </h2>
            <div className='rounded-xl border border-blue-100 bg-white p-4 shadow-md'>
              <div className='overflow-x-auto'>
                <table className='w-full border text-sm'>
                  <thead className='bg-blue-600 text-white'>
                    <tr>
                      <th className='p-3 text-right'>نوع سایبان</th>
                      <th className='p-3 text-right'>کاربرد</th>
                      <th className='p-3 text-right'>جنس پارچه</th>
                      <th className='p-3 text-right'>ویژگی‌ها</th>
                      <th className='p-3 text-right'>قیمت تقریبی (تومان)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='even:bg-gray-100'>
                      <td className='p-3 font-bold'>سایبان بازویی</td>
                      <td className='p-3'>مغازه، تراس</td>
                      <td className='p-3'>PVC دو لایه</td>
                      <td className='p-3'>کنترل ریموت، ضد آب</td>
                      <td className='p-3 font-bold'>6,000,000 - 12,000,000</td>
                    </tr>
                    <tr className='even:bg-gray-100'>
                      <td className='p-3 font-bold'>سایبان فول باکس</td>
                      <td className='p-3'>ویلا، کافی‌شاپ</td>
                      <td className='p-3'>اکریلیک ضد UV</td>
                      <td className='p-3'>محفظه محافظ، عمر بالا</td>
                      <td className='p-3 font-bold'>12,000,000 - 18,000,000</td>
                    </tr>
                    <tr className='even:bg-gray-100'>
                      <td className='p-3 font-bold'>سقف جمع‌شو</td>
                      <td className='p-3'>حیاط، رستوران</td>
                      <td className='p-3'>پارچه برزنتی</td>
                      <td className='p-3'>موتور دار، پوشش کامل</td>
                      <td className='p-3 font-bold'>15,000,000 - 30,000,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* گالری نصب */}
        <section className='font-iransans bg-white px-4 py-16' dir='rtl'>
          <div className='mx-auto max-w-6xl'>
            <h2 className='mb-8 text-center text-2xl font-extrabold text-blue-700'>
              نمونه‌کار نصب سایبان
            </h2>
            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
              {[
                '/images/c-Canopy/gallery-1.webp',
                '/images/c-Canopy/gallery-2.webp',
                '/images/c-Canopy/gallery-3.webp',
              ].map((src, index) => (
                <div
                  key={index}
                  className='group overflow-hidden rounded-xl shadow transition hover:shadow-lg'
                >
                  <img
                    src={src}
                    alt={`نمونه نصب سایبان ${index + 1}`}
                    className='h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105'
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* دکمه تماس */}
        <section className='font-iransans bg-gray-50 px-4 py-20' dir='rtl'>
          <div className='mx-auto max-w-xl rounded-3xl bg-white p-8 shadow-xl hover:shadow-2xl'>
            <h2 className='mb-3 text-center text-2xl font-extrabold text-blue-700'>
              سفارش یا مشاوره سایبان
            </h2>
            <p className='mb-6 text-center text-sm text-gray-600'>
              جهت مشاوره رایگان یا ثبت سفارش، با شماره زیر تماس بگیرید.
            </p>
            <div className='flex justify-center'>
              <a
                href='tel:09121234567'
                className='flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-white shadow transition hover:bg-blue-700'
              >
                <span className='text-lg'>📞</span>
                <span className='font-bold'>تماس برای سفارش</span>
              </a>
            </div>
          </div>
        </section>

        {/* سوالات متداول */}
        <section className='font-iransans bg-gray-50 px-4 py-16' dir='rtl'>
          <div className='mx-auto max-w-4xl'>
            <h2 className='mb-8 text-center text-2xl font-extrabold text-blue-700'>
              سوالات متداول سایبان برقی
            </h2>
            <div className='space-y-4'>
              {faq.map((item, index) => (
                <details
                  key={index}
                  className='group rounded-xl border border-blue-100 bg-white p-4 shadow-sm'
                >
                  <summary className='cursor-pointer font-bold text-blue-800 group-open:mb-2'>
                    {item.question}
                  </summary>
                  <p className='text-sm text-gray-700'>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* مقالات */}
        <section className='font-iransans bg-gray-50 px-4 py-16' dir='rtl'>
          <div className='mx-auto max-w-6xl'>
            <h2 className='mb-6 text-center text-2xl font-extrabold text-blue-700'>
              مقالات و آموزش‌های سایبان برقی
            </h2>
            <p className='mb-10 text-center text-gray-600'>
              نکاتی درباره انتخاب نوع سایبان، نگهداری صحیح، نصب اصولی و موارد مصرف کاربردی.
            </p>

            <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
              {[
                {
                  title: 'نکات مهم هنگام خرید سایبان',
                  desc: 'در این مقاله به مواردی که باید قبل از انتخاب سایبان بدانید می‌پردازیم...',
                  image: '/images/c-Canopy/blog-1.webp',
                },
                {
                  title: 'راهنمای نصب سایبان برقی',
                  desc: 'نصب اصولی سایبان باعث افزایش عمر و عملکرد بهتر آن می‌شود...',
                  image: '/images/c-Canopy/blog-2.webp',
                },
                {
                  title: 'فرق سایبان بازویی با سقف جمع‌شو',
                  desc: 'در این مقاله تفاوت میان مدل‌های مختلف سایبان را بررسی می‌کنیم...',
                  image: '/images/c-Canopy/blog-3.webp',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className='overflow-hidden rounded-xl bg-white shadow transition hover:shadow-lg'
                >
                  <img src={item.image} alt={item.title} className='h-40 w-full object-cover' />
                  <div className='p-5'>
                    <h3 className='mb-2 text-lg font-bold text-blue-700'>{item.title}</h3>
                    <p className='text-sm text-gray-600'>{item.desc}</p>
                    <a
                      href='/مقاله/سایبان-برقی'
                      className='mt-4 inline-block text-sm font-bold text-blue-600 hover:underline'
                    >
                      ادامه مطلب →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    </HelmetProvider>
  );
};

export default CanopyPage;
