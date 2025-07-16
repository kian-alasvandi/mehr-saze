import { ShieldCheck, Clock, Headset, Lock } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Clock className='h-10 w-10 text-blue-600 transition group-hover:text-blue-800' />,
      title: 'نصب سریع',
      desc: 'نصب در کمتر از ۴۸ ساعت در سراسر تهران',
    },
    {
      icon: <Lock className='h-10 w-10 text-blue-600 transition group-hover:text-blue-800' />,
      title: 'امنیت تضمینی',
      desc: 'استفاده از تجهیزات حرفه‌ای و ایمن',
    },
    {
      icon: <Headset className='h-10 w-10 text-blue-600 transition group-hover:text-blue-800' />,
      title: 'خدمات پس از فروش',
      desc: 'پشتیبانی کامل تا ۱۲ ماه پس از نصب',
    },
    {
      icon: (
        <ShieldCheck className='h-10 w-10 text-blue-600 transition group-hover:text-blue-800' />
      ),
      title: 'مشاوره تخصصی',
      desc: 'راهنمایی رایگان توسط کارشناسان ما',
    },
  ];

  return (
    <section className='bg-gradient-to-b from-[#f0f6ff] to-white py-16' dir='rtl'>
      <div className='mx-auto max-w-6xl px-4'>
        <h2 className='font-iransans mb-3 text-center text-sm font-semibold text-blue-500'>
          چرا ما؟
        </h2>
        <h3 className='font-iransans mb-10 text-center text-2xl font-extrabold text-blue-800'>
          چرا <span className='text-blue-600'>مهرسازه؟</span>
        </h3>

        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
          {services.map((item, index) => (
            <div
              key={index}
              className='group rounded-2xl bg-white p-6 text-center shadow transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg'
            >
              <div className='mb-4 flex justify-center'>{item.icon}</div>
              <h4 className='font-iransans mb-1 text-base font-bold text-gray-800'>{item.title}</h4>
              <p className='text-sm text-gray-600'>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
