// components/ConsultBoxAdvanced.jsx
import { PhoneCall, Headphones } from 'lucide-react';

const phones = ['7004 886 0935', '5734 743 0992', '4066 274 0939', '39 700 62 0930'];

const ConsultBoxAdvanced = () => {
  return (
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
              برای دریافت راهنمایی، با کارشناسان ما تماس بگیرید یا فرم درخواست تماس را ارسال کنید.
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
  );
};

export default ConsultBoxAdvanced;
