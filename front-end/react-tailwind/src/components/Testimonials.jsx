import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'علی رضایی',
    role: 'مدیر فروشگاه',
    comment: 'نصب کرکره برقی خیلی سریع و دقیق انجام شد، پشتیبانی هم عالی بود.',
  },
  {
    name: 'مریم احمدی',
    role: 'ساکن تهران',
    comment: 'از نصب دوربین‌های مداربسته بسیار راضی هستم، همه‌چیز خیلی حرفه‌ای بود.',
  },
  {
    name: 'حسین کرمی',
    role: 'مدیر ساختمان',
    comment: 'با تیم مهرسازه بهترین تجربه نصب جک پارکینگی رو داشتم. ممنونم ازتون!',
  },
];

const StarRating = () => (
  <div className='mb-3 flex gap-1' aria-label='5 ستاره'>
    {Array.from({ length: 5 }, (_, i) => (
      <Star key={i} size={16} className='text-yellow-400' fill='currentColor' />
    ))}
  </div>
);

const Testimonials = () => {
  return (
    <section className='bg-white py-16' dir='rtl'>
      <div className='mx-auto max-w-6xl px-4'>
        <h2 className='font-iransans mb-12 text-center text-2xl font-extrabold text-blue-700'>
          نظرات مشتریان
        </h2>
        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {testimonials.map((item, idx) => (
            <blockquote
              key={item.name + idx}
              className='rounded-2xl border border-gray-100 bg-gray-50 p-6 shadow-sm transition hover:shadow-md'
            >
              <StarRating />
              <p className='mb-4 text-sm text-gray-700'>&ldquo;{item.comment}&rdquo;</p>
              <cite className='block text-right text-sm font-semibold text-gray-800 not-italic'>
                {item.name} <span className='text-gray-500'>- {item.role}</span>
              </cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
