// components/TimelineSection.jsx
import { MessageCircle, MapPin, ClipboardCheck, PencilRuler, Hammer, LifeBuoy } from 'lucide-react';

const steps = [
  {
    icon: <MessageCircle size={36} className='text-blue-600' />,
    title: 'مشاوره رایگان',
    description:
      'ارائه مشاوره تلفنی یا آنلاین برای انتخاب بهترین محصول متناسب با نیاز و بودجه شما.',
  },
  {
    icon: <MapPin size={36} className='text-blue-600' />,
    title: 'بازدید حضوری',
    description: 'بررسی دقیق محل پروژه توسط کارشناسان ما برای اندازه‌گیری و انتخاب بهینه.',
  },
  {
    icon: <ClipboardCheck size={36} className='text-blue-600' />,
    title: 'ثبت سفارش',
    description: 'ثبت مشخصات محصول، دریافت پیش‌پرداخت و زمان‌بندی نهایی اجرای پروژه.',
  },
  {
    icon: <PencilRuler size={36} className='text-blue-600' />,
    title: 'طراحی و آماده‌سازی',
    description: 'ساخت یا آماده‌سازی قطعات مورد نیاز بر اساس اندازه و ویژگی‌های انتخاب‌شده.',
  },
  {
    icon: <Hammer size={36} className='text-blue-600' />,
    title: 'نصب و اجرا',
    description: 'نصب حرفه‌ای محصول توسط تکنسین‌های مجرب با رعایت نکات فنی و ایمنی.',
  },
  {
    icon: <LifeBuoy size={36} className='text-blue-600' />,
    title: 'پشتیبانی پس از نصب',
    description: 'ارائه گارانتی، خدمات پس از فروش و پاسخ‌گویی به مشکلات احتمالی.',
  },
];

const TimelineSection = () => {
  return (
    <section className='bg-gray-50 py-16' dir='rtl'>
      <div className='mx-auto max-w-5xl px-4'>
        <h2 className='mb-12 text-center text-3xl font-bold'>مراحل اجرای پروژه در مهرسازه</h2>
        <div className='relative mr-6 space-y-10 border-l-4 border-blue-200'>
          {steps.map((step, index) => (
            <div key={index} className='relative pr-12 text-right'>
              <div className='absolute top-1 -right-7 flex h-14 w-14 items-center justify-center rounded-full border-4 border-blue-500 bg-white shadow-md'>
                {step.icon}
              </div>
              <div className='rounded-xl bg-white p-6 shadow-md'>
                <h3 className='mb-2 text-xl font-semibold'>{step.title}</h3>
                <p className='leading-relaxed text-gray-600'>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
