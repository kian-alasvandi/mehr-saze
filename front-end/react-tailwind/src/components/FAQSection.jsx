import { useState } from 'react';

const faqs = [
  {
    question: 'نصب محصولات چقدر زمان می‌برد؟',
    answer: 'معمولاً نصب بین ۲۴ تا ۴۸ ساعت پس از ثبت سفارش انجام می‌شود.',
  },
  {
    question: 'آیا محصولات شامل گارانتی هستند؟',
    answer: 'بله، تمام محصولات دارای ۱۲ ماه گارانتی معتبر شرکتی هستند.',
  },
  {
    question: 'آیا مشاوره رایگان است؟',
    answer: 'بله، مشاوره پیش از خرید کاملاً رایگان و بدون تعهد است.',
  },
  {
    question: 'آیا امکان پرداخت در محل وجود دارد؟',
    answer: 'بله، در بیشتر نقاط تهران امکان پرداخت پس از نصب فراهم است.',
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className='font-iransans bg-white py-16' dir='rtl'>
      <div className='mx-auto max-w-3xl px-4'>
        <h2 className='mb-8 inline-block border-b-2 border-blue-100 pb-1 text-center text-2xl font-bold text-blue-700'>
          سوالات متداول
        </h2>

        <div className='space-y-4'>
          {faqs.map((item, index) => (
            <div key={index} className='overflow-hidden rounded-lg border border-gray-200'>
              <button
                onClick={() => toggle(index)}
                className='flex w-full items-center justify-between bg-gray-50 px-4 py-3 text-right font-semibold text-gray-800 transition hover:bg-gray-100'
              >
                {item.question}
                <span>{openIndex === index ? '−' : '+'}</span>
              </button>
              {openIndex === index && (
                <div className='border-t bg-white px-4 py-3 text-sm text-gray-600'>
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
