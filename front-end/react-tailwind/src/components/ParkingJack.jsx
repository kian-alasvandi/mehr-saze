import { Helmet, HelmetProvider } from 'react-helmet-async';
import {
  ShieldCheck,
  Settings,
  DoorOpen,
  Wrench,
  CheckCircle,
  PhoneCall,
  Headphones,
} from 'lucide-react';

const ParkingJackPage = () => {
  const features = [
    {
      icon: <DoorOpen size={36} className='text-blue-600' />,
      title: 'باز و بسته شدن اتوماتیک',
      description: 'راحتی در تردد با باز و بسته شدن درب فقط با یک دکمه یا ریموت.',
    },
    {
      icon: <ShieldCheck size={36} className='text-blue-600' />,
      title: 'امنیت بالا',
      description: 'جلوگیری از ورود غیرمجاز با سیستم قفل شونده و مقاوم در برابر فشار.',
    },
    {
      icon: <Settings size={36} className='text-blue-600' />,
      title: 'سازگار با انواع درب',
      description: 'قابل نصب روی درب‌های دو لنگه، تک لنگه و ریلی.',
    },
    {
      icon: <Wrench size={36} className='text-blue-600' />,
      title: 'نصب تخصصی',
      description: 'نصب و راه‌اندازی توسط تکنسین مجرب با خدمات پس از فروش.',
    },
  ];
  const steps = [
    {
      title: 'انتخاب محصول مناسب',
      description:
        'ابتدا از میان محصولات متنوع مهرسازه شامل کرکره برقی، سایبان، درب اتوماتیک، دوربین و جک پارکینگی انتخاب خود را انجام دهید.',
    },
    {
      title: 'تماس و دریافت مشاوره',
      description:
        'از طریق شماره تماس یا فرم مشاوره، با ما ارتباط بگیرید تا نیاز شما بررسی و بهترین پیشنهاد ارائه شود.',
    },
    {
      title: 'برآورد قیمت و زمان اجرا',
      description:
        'پس از بررسی محل و نیاز، هزینه نهایی و زمان اجرا به شما اعلام می‌شود. شفاف، دقیق و بدون هزینه پنهان.',
    },
    {
      title: 'اجرای نصب و خدمات',
      description:
        'تیم متخصص ما پروژه را در محل شما اجرا کرده و تمام خدمات با گارانتی و تجهیزات حرفه‌ای ارائه می‌گردد.',
    },
  ];
  const phones = ['09358867004', '09927435734', '09392744066', '09306270039'];
  const faq = [
    {
      question: 'جک پارکینگی برای چه درب‌هایی مناسب است؟',
      answer: 'برای درب‌های دو لنگه، تک لنگه، ریلی و انواع درب‌های پارکینگ قابل نصب است.',
    },
    {
      question: 'آیا جک در برابر قطع برق هم کار می‌کند؟',
      answer: 'بله، بسیاری از مدل‌ها دارای سیستم باتری پشتیبان هستند.',
    },
    {
      question: 'نصب جک چقدر زمان می‌برد؟',
      answer: 'معمولاً بین ۴ تا ۶ ساعت بسته به نوع درب.',
    },
    {
      question: 'کنترل از راه دور هم داره؟',
      answer: 'بله، همراه با ریموت کنترل و قابلیت اتصال به سیستم هوشمند.',
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
          <title>جک پارکینگی | خرید، قیمت و نصب جک درب اتوماتیک | مهرسازه</title>
          <meta
            name='description'
            content='فروش و نصب جک پارکینگی اتوماتیک با بهترین برندها، مناسب درب دو لنگه، ریلی و تک لنگه. نصب تخصصی و خدمات پس از فروش توسط مهرسازه.'
          />
          <link rel='canonical' href='https://mehr-saze.ir/جک-پارکینگی' />
          <script type='application/ld+json'>{JSON.stringify(faqSchema)}</script>
        </Helmet>

        {/* هدر تصویری */}
        <section
          className='relative h-110 w-full overflow-hidden text-white'
          style={{
            backgroundImage: "url('/images/j-gallery/jack-bg.webp')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          dir='rtl'
        >
          <div className='absolute inset-0 bg-black/50'></div>
          <div className='relative z-10 flex h-full items-center justify-end px-6 md:px-16'>
            <div className='max-w-lg text-right'>
              <h1 className='mb-4 text-3xl font-extrabold md:text-4xl'>فروش و نصب جک پارکینگی</h1>
              <p className='leading-7 text-gray-200'>
                انواع جک اتوماتیک مناسب درب‌های پارکینگ منازل، ساختمان‌ها و ویلاها با ریموت کنترل و
                عملکرد سریع و بی‌صدا.
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
              لیست قیمت جک پارکینگی
            </h2>
            <div className='rounded-xl border border-blue-100 bg-white p-4 shadow-md'>
              <div className='overflow-x-auto'>
                <table className='w-full border text-sm'>
                  <thead className='bg-blue-600 text-white'>
                    <tr>
                      <th className='p-3 text-right'>نوع جک</th>
                      <th className='p-3 text-right'>ظرفیت</th>
                      <th className='p-3 text-right'>کاربرد</th>
                      <th className='p-3 text-right'>ویژگی‌ها</th>
                      <th className='p-3 text-right'>قیمت تقریبی (تومان)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='even:bg-gray-100'>
                      <td className='p-3 font-bold'>جک بازویی ایرانی</td>
                      <td className='p-3'>تا 300 کیلوگرم</td>
                      <td className='p-3'>منازل و درب‌های سبک</td>
                      <td className='p-3'>مقرون‌به‌صرفه، نصب ساده</td>
                      <td className='p-3 font-bold'>6,500,000 - 8,500,000</td>
                    </tr>
                    <tr className='even:bg-gray-100'>
                      <td className='p-3 font-bold'>جک خارجی (FAAC, BFT)</td>
                      <td className='p-3'>تا 800 کیلوگرم</td>
                      <td className='p-3'>ساختمان‌های پرتردد</td>
                      <td className='p-3'>عمر بالا، کیفیت ممتاز</td>
                      <td className='p-3 font-bold'>18,000,000 - 28,000,000</td>
                    </tr>
                    <tr className='even:bg-gray-100'>
                      <td className='p-3 font-bold'>جک ریلی</td>
                      <td className='p-3'>تا 1500 کیلوگرم</td>
                      <td className='p-3'>درب‌های ریلی سنگین</td>
                      <td className='p-3'>مناسب فضای صنعتی</td>
                      <td className='p-3 font-bold'>14,000,000 - 25,000,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
        <section className='bg-white px-4 py-20' dir='rtl'>
          <div className='mx-auto max-w-6xl'>
            <h2 className='mb-14 text-center text-2xl font-extrabold text-blue-700'>
              مراحل خرید و دریافت خدمات از مهرسازه
            </h2>

            <div className='relative flex flex-col gap-10 border-r-4 border-blue-100 md:grid md:grid-cols-4 md:border-t-4 md:border-r-0'>
              {steps.map((step, index) => (
                <div key={index} className='relative pl-6 md:pt-6 md:pl-0'>
                  {/* نقطه و آیکون */}
                  <div className='absolute top-1 right-[-10px] md:top-[-12px] md:right-auto md:left-1/2 md:-translate-x-1/2'>
                    <div className='flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white shadow-md'>
                      <CheckCircle size={20} />
                    </div>
                  </div>

                  {/* باکس محتوا */}
                  <div className='rounded-xl border border-gray-100 bg-gray-50 p-5 shadow transition hover:border-blue-500 hover:bg-blue-50'>
                    <h3 className='mb-2 text-lg font-bold text-blue-800'>{step.title}</h3>
                    <p className='text-sm leading-6 text-gray-700'>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section dir='rtl' className='bg-white py-16'>
          <div className='mx-auto max-w-6xl px-4'>
            <div className='flex flex-col items-center overflow-hidden rounded-3xl bg-gradient-to-br from-sky-100 via-blue-200 to-sky-100 shadow-xl md:flex-row'>
              {/* متن و شماره تماس */}
              <div className='space-y-5 p-8 text-center md:w-1/2 md:text-right'>
                <h3 className='flex items-center justify-center gap-2 text-2xl font-bold text-gray-800 md:justify-end'>
                  <PhoneCall size={26} className='text-blue-600' />
                  نیاز به مشاوره رایگان دارید؟
                </h3>
                <p className='text-gray-600'>
                  برای دریافت راهنمایی، با کارشناسان ما تماس بگیرید یا فرم درخواست تماس را ارسال
                  کنید.
                </p>

                <div className='flex flex-wrap justify-center gap-3 md:justify-end'>
                  {phones.map((phone, index) => (
                    <div
                      key={index}
                      className='flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-800 shadow transition-all hover:bg-blue-100'
                    >
                      <Headphones size={18} className='text-blue-600' />
                      <span>{phone}</span>
                    </div>
                  ))}
                </div>

                {/* دکمه CTA */}
                <button className='mt-4 rounded-full bg-blue-600 px-6 py-2 text-white transition-all hover:bg-blue-700'>
                  درخواست تماس با مشاور
                </button>
              </div>

              {/* تصویر مشاوره */}
              <div className='md:w-1/2'>
                <img
                  src='/images/consult-door.webp'
                  alt='مشاوره مهرسازه'
                  className='h-full w-full object-cover'
                />
              </div>
            </div>
          </div>
        </section>

        {/* گالری نصب */}
        <section className='font-iransans bg-white px-4 py-16' dir='rtl'>
          <div className='mx-auto max-w-6xl'>
            <h2 className='mb-8 text-center text-2xl font-extrabold text-blue-700'>
              نمونه‌کار نصب جک پارکینگی
            </h2>
            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className='group overflow-hidden rounded-xl shadow transition hover:shadow-lg'
                >
                  <img
                    src={`/images/j-gallery/jack-${i}.webp`}
                    alt={`نصب جک ${i}`}
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
              درخواست نصب یا مشاوره جک پارکینگی
            </h2>
            <p className='mb-6 text-center text-sm text-gray-600'>
              برای دریافت مشاوره رایگان و ثبت سفارش با ما تماس بگیرید.
            </p>
            <div className='flex justify-center'>
              <a
                href='tel:09927435734'
                className='flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-white shadow hover:bg-blue-700'
              >
                <span className='text-lg'>📞</span>
                <span className='font-bold'>برای خرید تماس بگیرید.</span>
              </a>
            </div>
          </div>
        </section>

        {/* سوالات متداول */}
        <section className='font-iransans bg-gray-50 px-4 py-16' dir='rtl'>
          <div className='mx-auto max-w-4xl'>
            <h2 className='mb-8 text-center text-2xl font-extrabold text-blue-700'>
              سوالات متداول جک پارکینگی
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

        {/* مقالات آموزشی */}
        <section className='font-iransans bg-gray-50 px-4 py-16' dir='rtl'>
          <div className='mx-auto max-w-6xl'>
            <h2 className='mb-6 text-center text-2xl font-extrabold text-blue-700'>
              مقالات آموزشی جک پارکینگی
            </h2>
            <p className='mb-10 text-center text-gray-600'>
              اطلاعات مهم درباره انتخاب جک مناسب، نصب اصولی، مقایسه برندها و نگهداری سیستم اتوماتیک.
            </p>

            <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
              {[
                {
                  title: 'چطور جک مناسب انتخاب کنیم؟',
                  desc: 'در این مقاله فاکتورهای مهم در انتخاب جک پارکینگی را بررسی می‌کنیم...',
                  image: '/images/j-gallery/blog-1.webp',
                },
                {
                  title: 'مراحل نصب جک درب اتوماتیک',
                  desc: 'راهنمای کامل نصب جک بازویی و ریلی به همراه نکات کلیدی...',
                  image: '/images/j-gallery/blog-2.webp',
                },
                {
                  title: 'برندهای معتبر جک پارکینگی',
                  desc: 'مقایسه برندهای ایرانی و خارجی مانند فک، بی‌اف‌تی، یال و... برای انتخاب بهتر.',
                  image: '/images/j-gallery/blog-3.webp',
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
                      href='/مقاله/جک-پارکینگی'
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

export default ParkingJackPage;
