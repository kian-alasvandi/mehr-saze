import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ShieldCheck, Video, Wifi, Wrench, CheckCircle, PhoneCall, Headphones } from 'lucide-react';

const CameraPage = () => {
  const features = [
    {
      icon: <ShieldCheck size={36} className='text-blue-600' />,
      title: 'افزایش امنیت',
      description: 'نظارت لحظه‌ای بر محیط زندگی یا کار با ضبط دائمی تصاویر.',
    },
    {
      icon: <Video size={36} className='text-blue-600' />,
      title: 'ضبط با کیفیت بالا',
      description: 'کیفیت تصویر HD و 4K با دید در شب، ضد آب و مناسب فضاهای باز.',
    },
    {
      icon: <Wifi size={36} className='text-blue-600' />,
      title: 'دسترسی از راه دور',
      description: 'اتصال از طریق گوشی و اینترنت با اپلیکیشن مخصوص.',
    },
    {
      icon: <Wrench size={36} className='text-blue-600' />,
      title: 'نصب حرفه‌ای',
      description: 'نصب در مکان‌های مختلف با کابل‌کشی و زاویه دید مناسب.',
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
      question: 'آیا دوربین‌های مداربسته دید در شب دارند؟',
      answer: 'بله، بسیاری از دوربین‌های ما قابلیت دید در شب تا فاصله ۳۰ متر دارند.',
    },
    {
      question: 'دوربین بی‌سیم بهتر است یا سیمی؟',
      answer:
        'دوربین بی‌سیم برای منازل مناسب‌تر است ولی در پروژه‌های بزرگ دوربین سیمی پایداری بیشتری دارد.',
    },
    {
      question: 'آیا می‌توانم از راه دور تصویر را مشاهده کنم؟',
      answer: 'بله، با اپلیکیشن اختصاصی می‌توانید از هر نقطه‌ای تصاویر را مشاهده کنید.',
    },
    {
      question: 'نصب دوربین چقدر زمان می‌برد؟',
      answer: 'بسته به تعداد دوربین‌ها، معمولاً بین ۲ تا ۶ ساعت زمان نیاز است.',
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
          <title>دوربین مداربسته | فروش و نصب حرفه‌ای | مهرسازه</title>
          <meta
            name='description'
            content='فروش دوربین مداربسته، نصب حرفه‌ای در محل، انواع دوربین دید در شب، بی‌سیم و تحت شبکه. قیمت مناسب و مشاوره رایگان در مهرسازه.'
          />
          <link rel='canonical' href='https://mehr-saze.ir/دوربین-مداربسته' />
          <script type='application/ld+json'>{JSON.stringify(faqSchema)}</script>
        </Helmet>
        {/* ✅ هدر با بک‌گراند تصویری */}
        <section
          className='relative h-110 w-full overflow-hidden text-white'
          style={{
            backgroundImage: "url('/images/camera-bg.webp')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          dir='rtl'
        >
          <div className='absolute inset-0 bg-black/50'></div>
          <div className='relative z-10 flex h-full items-center justify-end px-6 md:px-16'>
            <div className='max-w-lg text-right'>
              <h1 className='mb-4 text-3xl font-extrabold md:text-4xl'>
                فروش و نصب دوربین مداربسته
              </h1>
              <p className='leading-7 text-gray-200'>
                انواع دوربین بی‌سیم، تحت شبکه، دید در شب و ضد آب مناسب منزل، فروشگاه و مراکز صنعتی.
              </p>
            </div>
          </div>
        </section>
        {/* ✅ ویژگی‌ها */}
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
        ); };
        {/* ✅ جدول قیمت */}
        <section className='font-iransans bg-gray-50 px-4 py-16' dir='rtl'>
          <div className='mx-auto max-w-6xl'>
            <h2 className='mb-8 text-center text-2xl font-extrabold text-blue-700'>
              لیست قیمت دوربین مداربسته
            </h2>
            <div className='rounded-xl border border-blue-100 bg-white p-4 shadow-md'>
              <div className='overflow-x-auto'>
                <table className='w-full border text-sm'>
                  <thead className='bg-blue-600 text-white'>
                    <tr>
                      <th className='p-3 text-right'>نوع دوربین</th>
                      <th className='p-3 text-right'>کیفیت تصویر</th>
                      <th className='p-3 text-right'>کاربردها</th>
                      <th className='p-3 text-right'>مزایا</th>
                      <th className='p-3 text-right'>قیمت تقریبی (تومان)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='even:bg-gray-100'>
                      <td className='p-3 font-bold'>بی‌سیم</td>
                      <td className='p-3'>HD/FullHD</td>
                      <td className='p-3'>منازل، دفاتر کوچک</td>
                      <td className='p-3'>نصب سریع بدون سیم‌کشی</td>
                      <td className='p-3 font-bold'>1,360,000 - 3,220,000</td>
                    </tr>
                    <tr className='even:bg-gray-100'>
                      <td className='p-3 font-bold'>تحت شبکه (IP)</td>
                      <td className='p-3'>FullHD/4K</td>
                      <td className='p-3'>سازمان‌ها، مکان‌های حساس</td>
                      <td className='p-3'>قابلیت انتقال تصویر تحت اینترنت</td>
                      <td className='p-3 font-bold'>1,485,000 - 10,071,600</td>
                    </tr>
                    <tr className='even:bg-gray-100'>
                      <td className='p-3 font-bold'>بولت (Bullet)</td>
                      <td className='p-3'>HD تا 4K</td>
                      <td className='p-3'>فضای باز مثل پارکینگ</td>
                      <td className='p-3'>بدنه مقاوم و ضد آب</td>
                      <td className='p-3 font-bold'>750,000 - 4,788,000</td>
                    </tr>
                    <tr className='even:bg-gray-100'>
                      <td className='p-3 font-bold'>دام (Dome)</td>
                      <td className='p-3'>HD/FullHD</td>
                      <td className='p-3'>فضای داخلی</td>
                      <td className='p-3'>طراحی زیبا و زاویه دید گسترده</td>
                      <td className='p-3 font-bold'>1,600,000 - 7,300,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* بخش مراحل خرید*/}
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
        {/* گالری محصولات*/}
        <section className='font-iransans bg-white px-4 py-16' dir='rtl'>
          <div className='mx-auto max-w-6xl'>
            <h2 className='mb-8 text-center text-2xl font-extrabold text-blue-700'>
              گالری تصاویر نصب دوربین مداربسته
            </h2>
            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
              {[
                '/images/c-gallery/gallery-1.webp',
                '/images/c-gallery/gallery-2.webp',
                '/images/c-gallery/gallery-3.webp',
                '/images/c-gallery/gallery-4.webp',
                '/images/c-gallery/gallery-5.webp',
                '/images/c-gallery/gallery-6.webp',
              ].map((src, index) => (
                <div
                  key={index}
                  className='group overflow-hidden rounded-xl shadow transition duration-300 hover:shadow-lg'
                >
                  <img
                    src={src}
                    alt={`نمونه نصب دوربین ${index + 1}`}
                    className='h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105'
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
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
        {/* ✅ سوالات متداول */}
        <section className='font-iransans bg-gray-50 px-4 py-16' dir='rtl'>
          <div className='mx-auto max-w-4xl'>
            <h2 className='mb-8 text-center text-2xl font-extrabold text-blue-700'>
              سوالات متداول دوربین مداربسته
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
        <section className='font-iransans bg-gray-50 px-4 py-16' dir='rtl'>
          <div className='mx-auto max-w-6xl'>
            <h2 className='mb-6 text-center text-2xl font-extrabold text-blue-700'>
              مقالات و آموزش‌های دوربین مداربسته
            </h2>
            <p className='mb-10 text-center text-gray-600'>
              نکات مهم قبل از خرید، آموزش نصب، راه‌اندازی و نگهداری انواع دوربین‌های مداربسته.
            </p>

            <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
              {[
                {
                  title: 'نکات مهم قبل از خرید دوربین',
                  desc: 'در این مقاله بررسی می‌کنیم که برای خرید دوربین مداربسته به چه نکاتی باید توجه کرد...',
                  image: '/images/c-gallery/blog-1.webp',
                },
                {
                  title: 'آموزش نصب دوربین مداربسته',
                  desc: 'نصب درست دوربین باعث پوشش بهتر و امنیت بالاتر می‌شود. آموزش اصولی نصب را بخوانید...',
                  image: '/images/c-gallery/blog-2.webp',
                },
                {
                  title: 'فرق دوربین IP با آنالوگ',
                  desc: 'در این مقاله تفاوت بین سیستم‌های تحت شبکه و آنالوگ را بررسی می‌کنیم...',
                  image: '/images/c-gallery/blog-3.webp',
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
                      href='/مقاله/دوربین-مداربسته'
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

export default CameraPage;
