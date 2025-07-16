import { useState } from 'react';

const faqs = [
  {
    q: 'چه نوع کرکره‌ای برای ویترین مغازه مناسب‌تر است؟',
    a: 'معمولاً تیغه پلی‌کربنات شفاف بهترین گزینه برای ویترین است چون شفاف و مقاوم است.',
  },
  {
    q: 'آیا نصب کرکره برقی نیاز به تخریب دارد؟',
    a: 'خیر، در اکثر موارد نصب بدون تخریب انجام می‌شود و به‌صورت فیکس یا رول در بالا نصب می‌شود.',
  },
  {
    q: 'زمان آماده‌سازی و نصب چقدر است؟',
    a: 'معمولاً ۲ تا ۳ روز کاری بسته به نوع پروژه زمان نیاز دارد.',
  },
];

const ShutterFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className='bg-gray-50 px-4 py-12' dir='rtl'>
      <div className='mx-auto max-w-3xl'>
        <h3 className='mb-6 text-center text-xl font-bold text-blue-700'>
          سوالات متداول کرکره برقی
        </h3>
        <div className='space-y-4'>
          {faqs.map((item, i) => (
            <div
              key={i}
              className='cursor-pointer rounded border border-blue-200 bg-white p-4'
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <div className='flex items-center justify-between font-semibold text-gray-800'>
                {item.q}
                <span>{openIndex === i ? '-' : '+'}</span>
              </div>
              {openIndex === i && <p className='mt-2 text-sm text-gray-600'>{item.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShutterFAQ;
