import { CheckCircle } from 'lucide-react';

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

const TimelineSection = () => {
  return (
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
};

export default TimelineSection;
