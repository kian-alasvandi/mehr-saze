import { Helmet, HelmetProvider } from 'react-helmet-async';
import {
  DoorOpen,
  Wrench,
  ShieldCheck,
  Zap,
  CheckCircle,
  Headphones,
  PhoneCall,
} from 'lucide-react';

const AutoDoorPage = () => {
  const features = [
    {
      icon: <DoorOpen size={32} className='text-blue-600' />,
      title: 'دسترسی آسان',
      description: 'باز و بسته شدن خودکار برای راحتی بیشتر.',
    },
    {
      icon: <Wrench size={32} className='text-blue-600' />,
      title: 'نصب حرفه‌ای',
      description: 'توسط تکنسین‌های مجرب با گارانتی نصب.',
    },
    {
      icon: <ShieldCheck size={32} className='text-blue-600' />,
      title: 'امنیت بیشتر',
      description: 'جلوگیری از ورود افراد غیرمجاز.',
    },
    {
      icon: <Zap size={32} className='text-blue-600' />,
      title: 'صرفه‌جویی در انرژی',
      description: 'مناسب برای فضاهای پرتردد.',
    },
  ];
  const phones = ['09358867004', '09927435734', '09392744066', '09306270039'];
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
  const tableData = [
    {
      type: 'شیشه‌ای',
      use: 'مغازه‌ها، بانک‌ها',
      benefit: 'ظاهر زیبا، ورود راحت',
      price: '15,000,000 - 40,000,000',
    },
    {
      type: 'پارکینگی',
      use: 'خانه‌ها و آپارتمان‌ها',
      benefit: 'مناسب خودرو، امنیت بالا',
      price: '8,500,000 - 20,000,000',
    },
    {
      type: 'ریلی',
      use: 'سوله، کارخانه',
      benefit: 'مقاوم، مناسب فضاهای صنعتی',
      price: '10,000,000 - 25,000,000',
    },
    {
      type: 'کشویی',
      use: 'دفاتر اداری',
      benefit: 'بی‌صدا و شیک',
      price: '13,000,000 - 30,000,000',
    },
  ];

  const faq = [
    {
      question: 'آیا درب‌های اتوماتیک نیاز به سرویس دارند؟',
      answer: 'بله، پیشنهاد می‌شود سالی یک‌بار سرویس شوند.',
    },
    { question: 'چقدر زمان برای نصب لازم است؟', answer: 'بین 2 تا 5 ساعت بسته به نوع درب.' },
    {
      question: 'آیا امکان نصب در مناطق سرد وجود دارد؟',
      answer: 'بله، موتورهای مخصوص با مقاومت در دماهای پایین موجودند.',
    },
    { question: 'گارانتی دارید؟', answer: 'بله، تا 24 ماه گارانتی رسمی شرکت.' },
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
          <title>درب اتوماتیک | فروش، نصب و خدمات | مهرسازه</title>
          <meta
            name='description'
            content='فروش درب اتوماتیک شیشه‌ای، پارکینگی و ریلی با نصب حرفه‌ای، گارانتی، خدمات پس از فروش و مشاوره رایگان.'
          />
          <link rel='canonical' href='https://mehr-saze.ir/درب-اتوماتیک' />
          <script type='application/ld+json'>{JSON.stringify(faqSchema)}</script>
        </Helmet>
        {/* هدر تصویری */}
        <section
          className='font-iransans relative h-[480px] w-full overflow-hidden text-white'
          style={{
            backgroundImage: "url('/images/d-gallery/auto-door-bg.webp')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          dir='rtl'
        >
          <div className='absolute inset-0 bg-black/50'></div>
          <div className='relative z-10 flex h-full items-center justify-end px-6 md:px-16'>
            <div className='max-w-lg text-right'>
              <h1 className='mb-4 text-3xl font-extrabold md:text-4xl'>فروش و نصب درب اتوماتیک</h1>
              <p className='leading-7 text-gray-200'>
                انواع درب اتوماتیک با خدمات کامل نصب، مشاوره و گارانتی رسمی در مهرسازه.
              </p>
            </div>
          </div>
        </section>
        {/* مزایا */}
        <section className='font-iransans bg-white px-4 py-16' dir='rtl'>
          <div className='mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4'>
            {features.map((item, index) => (
              <div
                key={index}
                className='group rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-md transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:bg-blue-50/70 hover:shadow-xl'
              >
                <div className='mb-4 flex justify-center text-blue-600 transition duration-300 group-hover:scale-110'>
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
        {/* جدول مقایسه */}
        <section className='font-iransans bg-gray-50 px-4 py-16' dir='rtl'>
          <div className='mx-auto max-w-6xl'>
            <h2 className='mb-8 text-center text-2xl font-extrabold text-blue-700'>
              مقایسه انواع درب اتوماتیک
            </h2>
            <div className='overflow-x-auto rounded-xl border border-blue-100 bg-white shadow'>
              <table className='w-full text-sm'>
                <thead className='bg-blue-600 text-white'>
                  <tr>
                    <th className='p-3 text-right'>نوع</th>
                    <th className='p-3 text-right'>کاربرد</th>
                    <th className='p-3 text-right'>مزایا</th>
                    <th className='p-3 text-right'>قیمت تقریبی</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((item, idx) => (
                    <tr key={idx} className='odd:bg-gray-50 even:bg-white'>
                      <td className='p-3 font-bold'>{item.type}</td>
                      <td className='p-3'>{item.use}</td>
                      <td className='p-3'>{item.benefit}</td>
                      <td className='p-3 font-bold'>{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
        );
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
        {/* گالری نصب‌ها */}
        <section className='font-iransans bg-white px-4 py-16' dir='rtl'>
          <div className='mx-auto max-w-6xl'>
            <h2 className='mb-8 text-center text-2xl font-extrabold text-blue-700'>
              نمونه نصب درب اتوماتیک
            </h2>

            <div className='grid grid-cols-2 gap-4 md:grid-cols-3'>
              {Array.from({ length: 6 }, (_, i) => {
                const imgIndex = i + 1;
                return (
                  <img
                    src={`/images/d-gallery/auto-door-${imgIndex}.webp`}
                    alt={`نمونه نصب درب اتوماتیک ${imgIndex}`}
                    className='aspect-[4/3] w-full rounded-xl object-cover shadow transition-transform duration-300 hover:scale-105'
                  />
                );
              })}
            </div>
          </div>
        </section>
        {/* CTA مشاوره */}
        {/* ✅ دکمه تماس برای خرید */}
        <section className='font-iransans bg-gray-50 px-4 py-20' dir='rtl'>
          <div className='mx-auto max-w-xl rounded-3xl bg-white p-8 shadow-xl transition hover:shadow-2xl'>
            <h2 className='mb-3 text-center text-2xl font-extrabold text-blue-700'>
              سفارش نصب یا خرید دوربین مداربسته
            </h2>
            <p className='mb-6 text-center text-sm leading-7 text-gray-600'>
              برای دریافت مشاوره رایگان و ثبت سفارش، کافیست با شماره زیر تماس بگیرید.
            </p>
            <div className='flex justify-center'>
              <a
                href='tel:09121234567'
                className='flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-white shadow transition-all duration-300 hover:bg-blue-700'
              >
                <span className='text-lg'>📞</span>
                <span className='font-bold'>برای خرید تماس بگیرید</span>
              </a>
            </div>
          </div>
        </section>
        {/* سوالات متداول */}
        <section className='font-iransans bg-gray-50 px-4 py-16' dir='rtl'>
          <div className='mx-auto max-w-4xl'>
            <h2 className='mb-8 text-center text-2xl font-extrabold text-blue-700'>
              سوالات متداول درباره درب اتوماتیک
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
        {/* مقاله و آموزش */}
        <section className='font-iransans bg-white px-4 py-16' dir='rtl'>
          <div className='mx-auto max-w-6xl'>
            <h2 className='mb-12 text-center text-3xl font-extrabold text-blue-700'>
              مقالات و آموزش‌های مرتبط با درب اتوماتیک
            </h2>
            <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
              {[
                {
                  id: 1,
                  title: 'کدام نوع درب اتوماتیک برای مغازه من مناسب است؟',
                  image: '/images/d-gallery/auto-blog-1.webp',
                  desc: 'در این مقاله به بررسی درب‌های کشویی، تلسکوپی و شیشه‌ای برای فضاهای تجاری می‌پردازیم.',
                },
                {
                  id: 2,
                  title: 'نکات مهم قبل از خرید درب اتوماتیک',
                  image: '/images/d-gallery/auto-blog-2.webp',
                  desc: 'آیا وزن درب اهمیت دارد؟ برق اضطراری چطور؟ این مقاله به پرسش‌های مشتریان پاسخ می‌دهد.',
                },
                {
                  id: 3,
                  title: 'تفاوت درب‌های تلسکوپی با کشویی چیست؟',
                  image: '/images/d-gallery/auto-blog-3.webp',
                  desc: 'تفاوت عملکرد، فضای موردنیاز نصب، قیمت و کاربرد هر مدل را در این مطلب بررسی کرده‌ایم.',
                },
              ].map(({ id, title, image, desc }) => (
                <div
                  key={id}
                  className='rounded-xl border border-gray-100 bg-gray-50 p-4 shadow-sm transition duration-200 hover:shadow-md'
                >
                  <img
                    src={image}
                    alt={title}
                    className='mb-4 h-48 w-full rounded-lg object-cover'
                  />
                  <h3 className='mb-2 text-lg font-semibold text-blue-800'>{title}</h3>
                  <p className='mb-4 line-clamp-3 text-sm text-gray-600'>{desc}</p>
                  <button className='text-sm font-bold text-blue-600 hover:underline'>
                    مطالعه مقاله →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    </HelmetProvider>
  );
};

export default AutoDoorPage;
