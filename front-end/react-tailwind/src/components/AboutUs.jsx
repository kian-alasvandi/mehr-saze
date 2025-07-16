import {
  CheckCircle,
  Users,
  Award,
  Building2,
  Smile,
  BookOpen,
  Star,
  ThumbsUp,
  ShieldCheck,
  Wallet,
  PhoneCall,
  Headphones,
} from 'lucide-react';
import { motion } from 'framer-motion';
const phones = ['7004 886 0935', '5734 743 0992', '4066 274 0939', '39 700 62 0930'];
const AboutPage = () => {
  return (
    <motion.section
      className='mx-auto max-w-6xl px-4 py-16'
      dir='rtl'
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* معرفی کوتاه */}
      <div className='mb-12 text-center'>
        <h2 className='mb-4 text-3xl font-bold text-blue-700'>مهرسازه، بیش از یک نام</h2>
        <p className='mx-auto max-w-2xl text-sm leading-loose text-gray-600'>
          تیم مهرسازه با بیش از ۸ سال تجربه در زمینه نصب و پشتیبانی کرکره برقی، درب اتوماتیک و
          سیستم‌های حفاظتی، تلاش می‌کند تا تجربه‌ای مطمئن، سریع و باکیفیت را برای مشتریان فراهم کند.
          ما باور داریم که امنیت، کیفیت، و پشتیبانی واقعی باید در دسترس همه باشد.
        </p>
      </div>

      {/* ویژگی‌ها */}
      <div className='mb-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {[
          { icon: <Award size={32} className='text-blue-600' />, title: '۸ سال تجربه' },
          { icon: <CheckCircle size={32} className='text-blue-600' />, title: '۵۰۰+ پروژه موفق' },
          { icon: <Smile size={32} className='text-blue-600' />, title: '۹۷٪ رضایت مشتری' },
          { icon: <Users size={32} className='text-blue-600' />, title: 'تیم متخصص و پشتیبان' },
          {
            icon: <Building2 size={32} className='text-blue-600' />,
            title: 'نصب در سراسر تهران و حومه',
          },
          {
            icon: <BookOpen size={32} className='text-blue-600' />,
            title: 'آموزش و مشاوره رایگان',
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            className='flex items-center gap-4 rounded-xl bg-white p-6 shadow-md'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            {item.icon}
            <p className='text-sm font-medium text-gray-700'>{item.title}</p>
          </motion.div>
        ))}
      </div>

      {/* بخش چرا ما */}
      <motion.div
        className='mb-20'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h3 className='mb-10 text-center text-2xl font-bold text-blue-700'>چرا مهرسازه؟</h3>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
          {[
            {
              icon: <ShieldCheck className='text-blue-600' size={32} />,
              title: 'امنیت و کیفیت ماندگار',
              desc: 'ما فقط محصول نمی‌فروشیم، بلکه حس اطمینان را به خانه‌ها و کسب‌وکارها می‌بریم. استفاده از بهترین متریال‌ها و استانداردهای نصب، ما را به انتخاب اول مشتریان تبدیل کرده است.',
            },
            {
              icon: <Wallet className='text-blue-600' size={32} />,
              title: 'قیمت‌گذاری منصفانه',
              desc: 'با وجود کیفیت بالا، هزینه‌های خدمات ما شفاف و قابل رقابت است. شما با هر بودجه‌ای می‌توانید از خدمات تخصصی ما بهره‌مند شوید بدون آن‌که کیفیت قربانی شود.',
            },
            {
              icon: <ThumbsUp className='text-blue-600' size={32} />,
              title: 'پشتیبانی واقعی و پاسخگو',
              desc: 'ما همیشه پاسخ‌گوی سوالات و مشکلات شما هستیم، حتی پس از اتمام پروژه. تیم ما در کنار شماست تا تجربه‌ای بدون دغدغه داشته باشید.',
            },
            {
              icon: <Star className='text-blue-600' size={32} />,
              title: 'اعتماد صدها مشتری راضی',
              desc: 'مهرسازه توانسته با عملکرد حرفه‌ای، رضایت مشتریان را جلب کند و بخش بزرگی از سفارش‌ها از طریق معرفی مشتریان قبلی به دست می‌آید.',
            },
          ].map((item, i) => (
            <div
              key={i}
              className='flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md'
            >
              <div className='mt-1'>{item.icon}</div>
              <div>
                <h4 className='mb-2 font-semibold text-gray-800'>{item.title}</h4>
                <p className='text-sm leading-relaxed text-gray-600'>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
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

      {/* مقاله / محتوای تکمیلی */}
      <motion.div
        className='mb-16 rounded-xl bg-white p-6 text-sm leading-loose text-gray-700 shadow-md'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <h3 className='mb-4 text-xl font-semibold text-blue-700'>
          چرا مهرسازه انتخاب اول مشتریان است؟
        </h3>
        <p>
          یکی از مهم‌ترین دلایل انتخاب ما توسط مشتریان، تعهد ما به خدمات پس از فروش و پشتیبانی
          بی‌وقفه است. ما تنها به فروش و نصب تجهیزات اکتفا نمی‌کنیم، بلکه همراه واقعی شما در مسیر
          استفاده و بهره‌برداری از سیستم‌های حفاظتی و ساختمانی خواهیم بود.
        </p>
        <p className='mt-4'>
          هر پروژه در مهرسازه با دقت و بررسی کامل نیاز مشتری آغاز می‌شود. مشاوره اولیه رایگان ما به
          شما کمک می‌کند تا بهترین راه‌حل را بر اساس بودجه، محیط و هدف خود انتخاب کنید. تیم فنی ما
          متشکل از تکنسین‌های با تجربه و آموزش‌دیده است که نصب اصولی را با سرعت بالا انجام می‌دهند.
        </p>
        <p className='mt-4'>
          در نهایت، رضایت مشتری و لبخند او هنگام تحویل پروژه، ارزشمندترین دارایی ماست. این مسیر را
          با افتخار و اعتماد ادامه می‌دهیم.
        </p>
      </motion.div>

      {/* پیام پایانی */}
      <motion.div
        className='mx-auto max-w-3xl rounded-xl bg-blue-50 p-6 text-center'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <p className='text-sm leading-loose text-gray-700'>
          ما در مهرسازه باور داریم که اعتماد شما مهم‌ترین سرمایه‌ی ماست. هدف ما ارائه‌ی خدماتی فراتر
          از انتظار، با پشتیبانی واقعی و کیفیتی ماندگار است. <br />
          با ما تماس بگیرید و تفاوت را احساس کنید.
        </p>
      </motion.div>
    </motion.section>
  );
};

export default AboutPage;
