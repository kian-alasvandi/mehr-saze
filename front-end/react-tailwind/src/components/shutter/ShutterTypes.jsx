const types = [
  {
    title: 'تیغه پانچ‌دار',
    desc: 'دارای پانچ برای تهویه، نور و زیبایی. مناسب پارکینگ و مراکز تجاری.',
    image: '/images/product-sutter-3.webp',
  },
  {
    title: 'آلومینیومی دوجداره',
    desc: 'مقاوم، بی‌صدا، رایج‌ترین انتخاب برای پارکینگ منازل، فروشگاه‌ها و ویلا.',
    image: '/images/product-sutter-2.webp',
  },
  {
    title: 'پلی‌کربنات شفاف',
    desc: 'لوکس، شفاف، ضدضربه و ضدآتش. مناسب ویترین فروشگاه‌های خاص و لوکس.',
    image: '/images/product-sutter-1.webp',
  },
  {
    title: 'تیغه فولادی',
    desc: 'بسیار مقاوم و سنگین. مناسب مکان‌های صنعتی و حفاظتی.',
    image: '/images/shutter-steel.jpg',
  },
  {
    title: 'تیغه طرح چوب',
    desc: 'زیبا و متفاوت برای نمای کلاسیک و لوکس ساختمان‌ها.',
    image: '/images/shutter-wood.jpg',
  },
];

const ShutterTypes = () => {
  return (
    <section className='bg-gradient-to-b from-white to-blue-50 px-4 py-16' dir='rtl'>
      <div className='mx-auto max-w-6xl'>
        {/* توضیح کلی بالا */}
        <div className='mb-10 rounded-xl border border-blue-100 bg-white px-6 py-8 text-center shadow'>
          <h3 className='mb-3 text-2xl font-bold text-blue-800'>
            انتخاب بهترین تیغه کرکره برقی برای نیاز شما
          </h3>
          <p className='mx-auto max-w-3xl text-sm leading-7 text-gray-600'>
            بسته به محل استفاده (ویترین، پارکینگ، صنعتی، تجاری) می‌توانید تیغه مناسب را انتخاب کنید.
            پلی‌کربنات برای ویترین، آلومینیومی برای استفاده عمومی، پانچ‌دار برای تهویه و فولادی برای
            امنیت بالا گزینه‌ای عالی هستند.
          </p>
        </div>

        {/* لیست کارت‌ها */}
        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {types.map((item, i) => (
            <div
              key={i}
              className='group overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-xl'
            >
              <div className='relative'>
                <img
                  src={item.image}
                  alt={item.title}
                  className='h-44 w-full object-cover transition-transform duration-300 group-hover:scale-105'
                />
                {item.title === 'آلومینیومی دوجداره' && (
                  <span className='absolute top-2 right-2 rounded bg-blue-600 px-2 py-1 text-xs text-white'>
                    پیشنهاد ما
                  </span>
                )}
              </div>
              <div className='p-4'>
                <h4 className='mb-1 flex items-center gap-2 text-base font-bold text-gray-800'>
                  <svg className='h-4 w-4 text-blue-600' fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M5 3h14v2H5zm0 4h14v2H5zm0 4h14v2H5zm0 4h14v2H5zm0 4h14v2H5z' />
                  </svg>
                  {item.title}
                </h4>
                <p className='text-sm text-gray-600'>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShutterTypes;
