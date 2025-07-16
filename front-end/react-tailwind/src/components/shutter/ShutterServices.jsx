import { Wrench, PhoneCall, RotateCcw, Settings2, ArrowRight } from 'lucide-react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ShutterServices = () => {
  const services = [
    {
      icon: <Wrench size={36} className='text-blue-600' />,
      title: 'نصب کرکره برقی',
      description: 'نصب تخصصی انواع کرکره پارکینگی، فروشگاهی، صنعتی با تیغه‌های متنوع.',
    },
    {
      icon: <Settings2 size={36} className='text-blue-600' />,
      title: 'تعمیر و عیب‌یابی',
      description: 'تعمیر موتور، تیغه، برد فرمان و سایر اجزای کرکره در محل مشتری.',
    },
    {
      icon: <PhoneCall size={36} className='text-blue-600' />,
      title: 'مشاوره رایگان',
      description: 'مشاوره تلفنی و حضوری برای انتخاب بهترین تیغه، موتور و اجرای پروژه.',
    },
    {
      icon: <RotateCcw size={36} className='text-blue-600' />,
      title: 'سرویس دوره‌ای و نگهداری',
      description: 'بازبینی، روان‌کاری و بررسی عملکرد کرکره جهت افزایش عمر مفید.',
    },
  ];

  const faq = [
    {
      question: 'هزینه نصب کرکره برقی چقدر است؟',
      answer:
        'هزینه نصب به نوع تیغه، نوع موتور، اندازه و محل نصب بستگی دارد. پس از بازدید، قیمت دقیق اعلام می‌شود.',
    },
    {
      question: 'آیا خدمات شما شامل گارانتی می‌شود؟',
      answer: 'بله، تمام خدمات نصب و تجهیزات ارائه‌شده دارای گارانتی مهرسازه می‌باشند.',
    },
    {
      question: 'مدت زمان نصب کرکره چقدر است؟',
      answer: 'در اغلب پروژه‌ها، نصب کرکره برقی بین ۲ تا ۵ ساعت زمان می‌برد.',
    },
    {
      question: 'آیا کرکره در برابر باد و باران مقاوم است؟',
      answer: 'بله، کرکره‌های با تیغه مناسب و نصب اصولی در برابر باد و باران مقاوم‌اند.',
    },
    {
      question: 'تفاوت کرکره پلی‌کربنات و آلومینیومی چیست؟',
      answer:
        'پلی‌کربنات شفاف و زیباتر است و مناسب مکان‌های لوکس می‌باشد. آلومینیومی مقاوم‌تر و مقرون‌به‌صرفه‌تر است.',
    },
    {
      question: 'آیا امکان کنترل کرکره با موبایل وجود دارد؟',
      answer:
        'بله، در صورت استفاده از موتورهای هوشمند یا اتصال به سیستم‌های کنترل از راه دور، این امکان فراهم است.',
    },
    {
      question: 'آیا می‌توان کرکره را به سیستم برق اضطراری وصل کرد؟',
      answer: 'بله، برخی مدل‌ها قابلیت اتصال به UPS یا باتری پشتیبان دارند.',
    },
    {
      question: 'هر چند وقت یک‌بار باید کرکره سرویس شود؟',
      answer: 'پیشنهاد می‌شود هر ۶ ماه یک‌بار سرویس دوره‌ای برای افزایش عمر مفید انجام شود.',
    },
    {
      question: 'در صورت خرابی، چقدر زمان می‌برد تا نیرو اعزام شود؟',
      answer: 'در تهران و حومه، کمتر از ۲۴ ساعت پشتیبانی ارائه می‌شود.',
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <HelmetProvider>
      <>
        <Helmet>
          <title>خدمات کرکره برقی | نصب، تعمیر، مشاوره | مهرسازه</title>
          <meta
            name='description'
            content='ارائه خدمات تخصصی نصب، تعمیر، مشاوره و نگهداری کرکره برقی با تیغه‌های متنوع توسط مهرسازه. خدمات فوری، تضمینی و پشتیبانی حرفه‌ای.'
          />
          <link rel='canonical' href='https://mehr-saze.ir/خدمات-کرکره-برقی' />
        </Helmet>

        <section
          className='font-iransans bg-gradient-to-b from-gray-100 to-gray-200 px-4 py-16'
          dir='rtl'
        >
          <div className='mx-auto max-w-6xl'>
            <div className='relative mb-12 flex items-center justify-center'>
              <span className='absolute top-1/2 right-0 hidden h-0.5 w-1/4 bg-blue-200 sm:block' />
              <span className='absolute top-1/2 left-0 hidden h-0.5 w-1/4 bg-blue-200 sm:block' />
              <h1 className='relative z-10 mx-2 text-2xl font-extrabold text-blue-700 sm:text-3xl'>
                <span className='mx-1'>⮜</span> خدمات کرکره برقی <span className='mx-1'>⮞</span>
              </h1>
            </div>

            <div className='grid gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4'>
              {services.map((service, index) => (
                <div
                  key={index}
                  className='rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm transition hover:shadow-md'
                >
                  <div className='mb-4 flex justify-center'>{service.icon}</div>
                  <h3 className='mb-2 text-lg font-bold text-blue-800'>{service.title}</h3>
                  <p className='text-sm leading-relaxed text-gray-600'>{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className='font-iransans bg-white px-4 py-12 text-center text-gray-700' dir='rtl'>
          <div className='mx-auto max-w-3xl'>
            <h2 className='mb-4 text-xl font-bold text-blue-700'>چرا مهرسازه؟</h2>
            <p className='leading-7'>
              با بیش از 10 سال تجربه در اجرای پروژه‌های هوشمندسازی، مهرسازه آماده ارائه خدمات نصب،
              تعمیر و ارتقاء کرکره برقی با بالاترین کیفیت و ضمانت می‌باشد.
            </p>
          </div>
        </section>

        <section className='font-iransans bg-gray-50 px-4 py-14' dir='rtl'>
          <div className='mx-auto max-w-4xl'>
            <h2 className='mb-8 text-center text-2xl font-bold text-blue-700'>
              سوالات متداول درباره خدمات کرکره برقی
            </h2>
            <div className='space-y-4'>
              {faq.map((item, index) => (
                <div key={index} className='rounded-xl border border-gray-200 bg-white p-4 shadow'>
                  <button
                    className='flex w-full items-center justify-between text-right font-semibold text-blue-800'
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  >
                    {item.question}
                    <span>{openIndex === index ? '−' : '+'}</span>
                  </button>
                  {openIndex === index && (
                    <p className='mt-2 text-sm leading-6 text-gray-600'>{item.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className='font-iransans bg-blue-50 px-4 py-16' dir='rtl'>
          <div className='mx-auto max-w-4xl text-center'>
            <h2 className='mb-4 text-2xl font-bold text-blue-800'>
              می‌خواهید قیمت دقیق کرکره برقی را بدانید؟
            </h2>
            <p className='mb-6 text-sm text-gray-700 md:text-base'>
              قیمت انواع تیغه، هزینه نصب، و انتخاب بهترین گزینه را در صفحه اختصاصی قیمت کرکره برقی
              مشاهده کنید.
            </p>
            <Link
              to='/قیمت-کرکره-برقی'
              className='inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700'
            >
              مشاهده قیمت کرکره برقی
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </>
    </HelmetProvider>
  );
};

export default ShutterServices;
