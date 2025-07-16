import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'خانم رضایی',
    comment:
      'از کیفیت نصب کرکره برقی و برخورد تیم نصب خیلی راضی بودم. سریع، تمیز و دقیق کار کردند.',
  },
  {
    name: 'آقای کریمی',
    comment:
      'من از جک پارکینگی استفاده کردم. هم قیمت مناسب بود، هم خدمات پس از فروش واقعاً پاسخگو بودند.',
  },
  {
    name: 'مهندس محمدی',
    comment:
      'برای پروژه ویلای شمال، سایبان برقی نصب کردیم. خیلی خوب کار کرد و حتماً برای پروژه بعدی هم با مهرسازه تماس می‌گیرم.',
  },
];

const Testimonials = () => {
  return (
    <section className='bg-gray-50 px-4 py-16' dir='rtl'>
      <div className='mx-auto max-w-6xl'>
        <h2 className='mb-10 text-center text-2xl font-extrabold text-blue-700'>
          نظرات مشتریان مهرسازه
        </h2>

        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {testimonials.map((item, index) => (
            <div
              key={index}
              className='relative rounded-xl bg-white p-6 shadow-md transition duration-300 hover:shadow-lg'
            >
              <Quote className='absolute top-4 left-4 text-blue-300 opacity-10' size={48} />
              <p className='mb-4 text-sm leading-relaxed text-gray-700'>{item.comment}</p>
              <div className='text-sm font-bold text-blue-700'>{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
