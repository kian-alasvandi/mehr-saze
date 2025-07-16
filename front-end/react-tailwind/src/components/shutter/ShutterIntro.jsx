import { PhoneCall } from 'lucide-react';

const ShutterIntro = () => {
  return (
    <section className='bg-blue-50 px-4 py-12' dir='rtl'>
      <div className='mx-auto grid max-w-6xl grid-cols-1 items-start gap-10 md:grid-cols-2'>
        {/* سمت چپ: توضیحات و تماس */}
        <div className='rounded-2xl border border-blue-100 bg-white p-6 shadow-lg'>
          <h1 className='mb-4 text-center text-2xl leading-relaxed font-extrabold text-blue-800 md:text-3xl'>
            خرید کرکره برقی با قیمت مناسب <br /> و مشاوره رایگان
          </h1>

          {/* h2 سئو */}
          <h2 className='mb-2 text-center text-base font-bold text-gray-700'>
            نصب کرکره برقی فروشگاهی، پارکینگی و صنعتی با تیغه‌های متنوع
          </h2>
          <p className='mb-4 text-center text-sm leading-7 text-gray-600'>
            ارائه تیغه‌های آلومینیومی، پلی‌کربنات شفاف، پانچ‌دار، فولادی و طرح چوب با قیمت مناسب،
            نصب تخصصی، پشتیبانی پس از فروش و مشاوره حرفه‌ای در مهرسازه.
          </p>

          {/* دکمه‌های تماس */}
          <div className='mb-4 space-y-3'>
            <a
              href='tel:02112345678'
              className='flex items-center gap-2 rounded-lg border border-blue-600 px-4 py-2 text-blue-700 transition hover:bg-blue-50'
            >
              <PhoneCall size={18} />
              5734 743 0992
            </a>
            <a
              href='tel:09121234567'
              className='flex items-center gap-2 rounded-lg border border-blue-600 px-4 py-2 text-blue-700 transition hover:bg-blue-50'
            >
              <PhoneCall size={18} />
              7004 886 0935
            </a>
          </div>

          {/* CTA */}
          <a
            href='/consult'
            className='mx-auto block w-fit rounded-full bg-blue-600 px-6 py-2 text-sm text-white transition hover:bg-blue-700'
          >
            دریافت مشاوره
          </a>

          {/* برچسب‌ها (سئو + اعتمادسازی) */}
          <div className='mt-6 flex flex-wrap justify-center gap-2 text-xs text-gray-600'>
            <span className='rounded-full bg-green-100 px-3 py-1 text-green-800'>نصب تخصصی</span>
            <span className='rounded-full bg-yellow-100 px-3 py-1 text-yellow-800'>
              پشتیبانی رایگان
            </span>
            <span className='rounded-full bg-blue-100 px-3 py-1 text-blue-800'>مشاوره تلفنی</span>
          </div>
        </div>

        {/* سمت راست: عکس و توضیح زیر */}
        <div className='flex flex-col items-center justify-start gap-4'>
          <img
            src='/images/banner-1.webp'
            alt='کرکره برقی فروشگاهی'
            className='max-h-[280px] w-full rounded-xl object-contain shadow-md md:w-[90%]'
          />
          <p className='max-w-sm text-center text-sm leading-6 text-gray-600'>
            خرید از <strong>شرکت مهرسازه</strong> یعنی دریافت خدمات نصب تخصصی، مشاوره رایگان،
            پشتیبانی کامل و دسترسی به بهترین تیغه‌ها با کیفیت بالا. برای مشاهده گزینه‌های بیشتر، به
            ادامه صفحه مراجعه نمایید.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ShutterIntro;
