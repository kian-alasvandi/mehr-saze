import { ShieldCheck, Clock10, Headphones, LockKeyhole } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: (
      <Clock10 className='h-12 w-12 text-indigo-600 transition duration-300 group-hover:text-indigo-800' />
    ),
    title: 'نصب فوق‌سریع',
    desc: 'نصب حرفه‌ای کمتر از ۴۸ ساعت در سراسر تهران',
  },
  {
    icon: (
      <LockKeyhole className='h-12 w-12 text-indigo-600 transition duration-300 group-hover:text-indigo-800' />
    ),
    title: 'امنیت پیشرفته',
    desc: 'تجهیزات باکیفیت و مطمئن با استاندارد روز',
  },
  {
    icon: (
      <Headphones className='h-12 w-12 text-indigo-600 transition duration-300 group-hover:text-indigo-800' />
    ),
    title: 'پشتیبانی ۲۴/۷',
    desc: 'خدمات پس از فروش تا ۱۲ ماه با پاسخگویی سریع',
  },
  {
    icon: (
      <ShieldCheck className='h-12 w-12 text-indigo-600 transition duration-300 group-hover:text-indigo-800' />
    ),
    title: 'مشاوره رایگان',
    desc: 'راهنمایی تخصصی قبل از خرید توسط کارشناسان',
  },
];

const ServicesSection = () => {
  return (
    <section className='bg-gradient-to-br from-indigo-100 via-white to-blue-50 py-20' dir='rtl'>
      <div className='mx-auto max-w-6xl px-4'>
        <motion.h3
          className='font-iransans mb-12 text-center text-3xl font-extrabold text-indigo-700'
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          چرا <span className='text-indigo-500'>مهرسازه</span> انتخاب درسته؟
        </motion.h3>

        <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-4'>
          {services.map((item, index) => (
            <motion.div
              key={index}
              className='group rounded-3xl bg-white p-6 text-center shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className='mb-5 flex justify-center'>{item.icon}</div>
              <h4 className='font-iransans mb-2 text-lg font-bold text-gray-800'>{item.title}</h4>
              <p className='text-sm text-gray-600'>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
